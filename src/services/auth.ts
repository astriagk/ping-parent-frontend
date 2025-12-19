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

export async function register(data: {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  address?: {
    street?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    coordinates?: { lat: number; lng: number };
  };
}) {
  try {
    const res = await api.post(API_ENDPOINTS.AUTH.REGISTER, data);
    // Expected success shape: { success: true, data: { token, user } }
    if (res?.data?.success) return { success: true, data: res.data.data };
    return { success: false, error: res?.data?.error ?? 'Unknown error' };
  } catch (err: any) {
    // Normalize common error responses
    if (err?.response) {
      const status = err.response.status;
      if (status === 400)
        return {
          success: false,
          error: {
            code: 'VALIDATION_ERROR',
            message: err.response.data?.error ?? 'Validation failed',
          },
        };
      if (status === 409)
        return {
          success: false,
          error: {
            code: 'DUPLICATE_EMAIL',
            message: 'This email is already registered',
          },
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

// Phone-based login: Step 1 - Send Login OTP
export async function sendLoginOTP(phone: string) {
  try {
    const res = await api.post(API_ENDPOINTS.AUTH.LOGIN_SEND_OTP, { phone });
    // Expected success shape: { success: true, message: string, otp?: string }
    if (res?.data?.success)
      return {
        success: true,
        message: res.data.message,
        otp: res.data.otp, // Only in development
      };
    return { success: false, error: res?.data?.error ?? 'Unknown error' };
  } catch (err: any) {
    if (err?.response) {
      const status = err.response.status;
      if (status === 400)
        return {
          success: false,
          error: {
            code: 'INVALID_PHONE',
            message: err.response.data?.error ?? 'Invalid phone number',
          },
        };
      if (status === 404)
        return {
          success: false,
          error: {
            code: 'PHONE_NOT_REGISTERED',
            message: 'Phone number not registered',
          },
        };
      return {
        success: false,
        error: err.response.data?.error ?? 'Server error',
      };
    }
    throw err;
  }
}

// Phone-based login: Step 2 - Verify Login OTP
export async function verifyLoginOTP(phone: string, otp: string) {
  try {
    const res = await api.post(API_ENDPOINTS.AUTH.LOGIN_VERIFY_OTP, {
      phone,
      otp,
    });
    // Expected success shape: { success: true, data: { token, user }, message: string }
    if (res?.data?.success) return { success: true, data: res.data.data };
    return { success: false, error: res?.data?.error ?? 'Unknown error' };
  } catch (err: any) {
    if (err?.response) {
      const status = err.response.status;
      if (status === 400)
        return {
          success: false,
          error: {
            code: 'INVALID_OTP',
            message: err.response.data?.error ?? 'Invalid or expired OTP',
          },
        };
      if (status === 404)
        return {
          success: false,
          error: {
            code: 'USER_NOT_FOUND',
            message: 'User not found',
          },
        };
      return {
        success: false,
        error: err.response.data?.error ?? 'Server error',
      };
    }
    throw err;
  }
}

// Phone-based registration: Step 1 - Send OTP
export async function sendOTP(phone: string) {
  try {
    const res = await api.post(API_ENDPOINTS.AUTH.SEND_OTP, { phone });
    // Expected success shape: { success: true, message: string, otp?: string }
    if (res?.data?.success)
      return {
        success: true,
        message: res.data.message,
        otp: res.data.otp, // Only in development
      };
    return { success: false, error: res?.data?.error ?? 'Unknown error' };
  } catch (err: any) {
    if (err?.response) {
      const status = err.response.status;
      if (status === 400)
        return {
          success: false,
          error: {
            code: 'INVALID_PHONE',
            message: err.response.data?.error ?? 'Invalid phone number',
          },
        };
      if (status === 409)
        return {
          success: false,
          error: {
            code: 'PHONE_EXISTS',
            message: 'This phone number is already registered',
          },
        };
      return {
        success: false,
        error: err.response.data?.error ?? 'Server error',
      };
    }
    throw err;
  }
}

// Phone-based registration: Step 2 - Verify OTP
export async function verifyOTP(phone: string, otp: string) {
  try {
    const res = await api.post(API_ENDPOINTS.AUTH.VERIFY_OTP, { phone, otp });
    // Expected success shape: { success: true, message: string }
    if (res?.data?.success) return { success: true, message: res.data.message };
    return { success: false, error: res?.data?.error ?? 'Unknown error' };
  } catch (err: any) {
    if (err?.response) {
      const status = err.response.status;
      if (status === 400)
        return {
          success: false,
          error: {
            code: 'INVALID_OTP',
            message: err.response.data?.error ?? 'Invalid or expired OTP code',
          },
        };
      return {
        success: false,
        error: err.response.data?.error ?? 'Server error',
      };
    }
    throw err;
  }
}

// Phone-based registration: Step 3 - Complete registration
export async function completeRegistration(data: {
  phone: string;
  email: string;
  firstName: string;
  lastName: string;
  address?: string;
  role?: string;
}) {
  try {
    const res = await api.post(API_ENDPOINTS.AUTH.COMPLETE_REGISTRATION, data);
    // Expected success shape: { success: true, data: { token, user }, message: string }
    if (res?.data?.success) return { success: true, data: res.data.data };
    return { success: false, error: res?.data?.error ?? 'Unknown error' };
  } catch (err: any) {
    if (err?.response) {
      const status = err.response.status;
      if (status === 400)
        return {
          success: false,
          error: {
            code: 'VALIDATION_ERROR',
            message:
              err.response.data?.error ??
              'Please verify your phone number first',
          },
        };
      if (status === 409)
        return {
          success: false,
          error: {
            code: 'DUPLICATE',
            message:
              err.response.data?.error ??
              'Phone number or email already registered',
          },
        };
      return {
        success: false,
        error: err.response.data?.error ?? 'Server error',
      };
    }
    throw err;
  }
}
