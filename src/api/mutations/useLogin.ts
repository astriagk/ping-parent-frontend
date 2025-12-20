import { useMutation } from "@tanstack/react-query";
import { apiClient } from "../client";
import { useAuthStore } from "../../store/useAuthStore";
import type { LoginRequest, AuthResponse } from "../../types/api.types";

export const useLogin = () => {
  const setAuth = useAuthStore((state) => state.setAuth);

  return useMutation({
    mutationFn: async (credentials: LoginRequest) => {
      const { data } = await apiClient.post<AuthResponse>(
        "/auth/login",
        credentials
      );
      return data;
    },
    onSuccess: (data) => {
      setAuth(data.token, data.user);
    },
  });
};
