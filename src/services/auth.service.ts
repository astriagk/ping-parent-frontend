import { apiClient } from "@api/client";
import { API_ENDPOINTS } from "@api/endpoints";
import type {
  LoginRequest,
  RegisterRequest,
  AuthResponse,
} from "@models/api.types";

export const authService = {
  async login(credentials: LoginRequest): Promise<AuthResponse> {
    const { data } = await apiClient.post<AuthResponse>(
      API_ENDPOINTS.AUTH.LOGIN,
      credentials
    );
    return data;
  },

  async register(userData: RegisterRequest): Promise<AuthResponse> {
    const { data } = await apiClient.post<AuthResponse>(
      API_ENDPOINTS.AUTH.REGISTER,
      userData
    );
    return data;
  },

  async logout(): Promise<void> {
    await apiClient.post(API_ENDPOINTS.AUTH.LOGOUT);
  },
};
