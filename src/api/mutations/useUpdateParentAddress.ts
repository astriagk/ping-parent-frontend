import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@app/api/client";
import { API_ENDPOINTS } from "@app/api/endpoints";
import type {
  ParentAddress,
  UpdateParentAddressRequest,
} from "@app/types/models";
import { QUERY_KEYS } from "@/src/utils/constants";

export const useUpdateParentAddress = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: UpdateParentAddressRequest) => {
      const response = await apiClient.put<{
        success: boolean;
        data: ParentAddress;
        message: string;
      }>(API_ENDPOINTS.PARENT.ADDRESS, data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.PARENT.ADDRESS });
    },
  });
};
