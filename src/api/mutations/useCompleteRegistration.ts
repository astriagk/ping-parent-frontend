import { useMutation } from "@tanstack/react-query";
import { apiClient } from "@app/api/client";
import { API_ENDPOINTS } from "@app/api/endpoints";
import type {
  CompleteRegistrationRequest,
  CompleteRegistrationResponse,
} from "@app/types/api.types";

export const useCompleteRegistration = () => {
  return useMutation({
    mutationFn: async (data: CompleteRegistrationRequest) => {
      const response = await apiClient.post<CompleteRegistrationResponse>(
        API_ENDPOINTS.AUTH.REGISTER_COMPLETE,
        data
      );
      return response.data;
    },
  });
};
