import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@app/api/client";
import { API_ENDPOINTS } from "@app/api/endpoints";
import type {
  ParentProfile,
  UpdateParentProfileRequest,
} from "@app/types/models";
import { QUERY_KEYS } from "@/src/utils/constants";

export const useUpdateParentProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: UpdateParentProfileRequest) => {
      const response = await apiClient.put<{
        success: boolean;
        data: ParentProfile;
        message: string;
      }>(API_ENDPOINTS.PARENT.PROFILE, data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.PARENT.PROFILE });
    },
  });
};
