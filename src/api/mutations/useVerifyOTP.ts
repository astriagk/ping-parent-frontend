import { useMutation } from "@tanstack/react-query";
import { apiClient } from "@api/client";
import { API_ENDPOINTS } from "@api/endpoints";
import { useAuthStore } from "@store/useAuthStore";
import type { VerifyOTPRequest, VerifyOTPResponse } from "@models/api.types";

export const useVerifyOTP = () => {
  const setAuth = useAuthStore((state) => state.setAuth);

  return useMutation({
    mutationFn: async (data: VerifyOTPRequest) => {
      const response = await apiClient.post<VerifyOTPResponse>(
        API_ENDPOINTS.AUTH.VERIFY_OTP,
        data
      );
      return response.data;
    },
    onSuccess: (data) => {
      setAuth(data.data.token, data.data.user);
    },
    onError: (_) => {},
  });
};
