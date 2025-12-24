import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@app/api/client";
import { API_ENDPOINTS } from "@app/api/endpoints";
import type { ParentProfile } from "@app/types/models";
import { QUERY_KEYS } from "@/src/utils/constants";

export const useParentProfile = () => {
  return useQuery({
    queryKey: QUERY_KEYS.PARENT.PROFILE,
    queryFn: async () => {
      const { data } = await apiClient.get<{
        success: boolean;
        data: ParentProfile;
      }>(API_ENDPOINTS.PARENT.PROFILE);
      return data.data;
    },
    retry: false,
  });
};
