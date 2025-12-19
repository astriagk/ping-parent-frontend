import api from './api';
import { API_ENDPOINTS } from './endpoints';

type VerifyResponse = {
  success: boolean;
  data?: { userId: string; email: string; role: string; tokenValid: boolean };
};

export async function verifyToken(
  token: string | null,
  refreshToken?: string | null,
) {
  // If no token treat as invalid quickly
  if (!token) return { valid: false };

  try {
    const headers: Record<string, string> = {
      Authorization: `Bearer ${token}`,
    };
    if (refreshToken) headers['X-Refresh-Token'] = refreshToken;

    // Call the backend endpoint expected by the project
    const res = await api.get<VerifyResponse>(API_ENDPOINTS.AUTH.VERIFY_TOKEN, {
      headers,
    });

    // Expected backend shape per spec: { success: true, data: { ..., tokenValid: true } }
    if (res?.data?.success && res.data.data?.tokenValid) {
      return { valid: true, user: res.data.data };
    }

    // Token invalid/expired
    return { valid: false };
  } catch (err: any) {
    // If API responded 401 treat as invalid token (not a network error)
    if (err?.response?.status === 401) return { valid: false };
    // Otherwise rethrow so caller can show a network/error message
    throw err;
  }
}

export async function login(emailOrPhone: string, password: string) {
  try {
    const res = await api.post(API_ENDPOINTS.AUTH.LOGIN, {
      email: emailOrPhone,
      password,
    });
    // Expected success shape: { success: true, data: { token, user } }
    if (res?.data?.success) return { success: true, data: res.data.data };
    return { success: false, error: res?.data?.error ?? 'Unknown error' };
  } catch (err: any) {
    // Normalize common error responses
    if (err?.response) {
      const status = err.response.status;
      if (status === 401)
        return {
          success: false,
          error: {
            code: 'INVALID_CREDENTIALS',
            message: 'Email or password is incorrect',
          },
        };
      if (status === 429)
        return {
          success: false,
          error: {
            code: 'RATE_LIMIT',
            message:
              err.response.data?.error ??
              'Too many login attempts. Try again later.',
          },
          retryAfter: err.response.headers?.['retry-after'],
        };
      return {
        success: false,
        error: err.response.data?.error ?? 'Server error',
      };
    }
    // Network or other
    throw err;
  }
}
