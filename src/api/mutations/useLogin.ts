import { useMutation } from "@tanstack/react-query";
import { apiClient } from "@app/api/client";
import { API_ENDPOINTS } from "@app/api/endpoints";
import { useAuthStore } from "@app/store/useAuthStore";
import type { LoginRequest, AuthResponse } from "@app/types/api.types";

export const useLogin = () => {
  const setAuth = useAuthStore((state) => state.setAuth);

  return useMutation({
    mutationFn: async (credentials: LoginRequest) => {
      const { data } = await apiClient.post<AuthResponse>(
        API_ENDPOINTS.AUTH.LOGIN,
        credentials
      );
      return data;
    },
    onSuccess: (data) => {
      setAuth(data.token, data.user);
    },
  });
};
