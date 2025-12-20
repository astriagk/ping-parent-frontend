import { useMutation } from "@tanstack/react-query";
import { apiClient } from "@app/api/client";
import { API_ENDPOINTS } from "@app/api/endpoints";
import type { SendOTPRequest, SendOTPResponse } from "@app/types/api.types";

export const useSendOTP = () => {
  return useMutation({
    mutationFn: async (data: SendOTPRequest) => {
      const response = await apiClient.post<SendOTPResponse>(
        API_ENDPOINTS.AUTH.SEND_OTP,
        data
      );
      return response.data;
    },
    onError: (_) => {},
  });
};
