import { useMutation } from "@tanstack/react-query";
import { apiClient } from "@app/api/client";
import { API_ENDPOINTS } from "@app/api/endpoints";
import type {
  RegisterSendOTPRequest,
  RegisterSendOTPResponse,
} from "@app/types/api.types";

export const useRegisterSendOTP = () => {
  return useMutation({
    mutationFn: async (data: RegisterSendOTPRequest) => {
      const response = await apiClient.post<RegisterSendOTPResponse>(
        API_ENDPOINTS.AUTH.REGISTER_SEND_OTP,
        data
      );
      return response.data;
    },
  });
};
