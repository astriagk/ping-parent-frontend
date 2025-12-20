import { useMutation } from "@tanstack/react-query";
import { apiClient } from "@app/api/client";
import { API_ENDPOINTS } from "@app/api/endpoints";
import { useAuthStore } from "@app/store/useAuthStore";
import type { VerifyOTPRequest, VerifyOTPResponse } from "@app/types/api.types";

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
