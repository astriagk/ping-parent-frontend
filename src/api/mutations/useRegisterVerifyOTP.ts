import { useMutation } from "@tanstack/react-query";
import { apiClient } from "@app/api/client";
import { API_ENDPOINTS } from "@app/api/endpoints";
import type {
  RegisterVerifyOTPRequest,
  RegisterVerifyOTPResponse,
} from "@app/types/api.types";

export const useRegisterVerifyOTP = () => {
  return useMutation({
    mutationFn: async (data: RegisterVerifyOTPRequest) => {
      const response = await apiClient.post<RegisterVerifyOTPResponse>(
        API_ENDPOINTS.AUTH.REGISTER_VERIFY_OTP,
        data
      );
      return response.data;
    },
  });
};
