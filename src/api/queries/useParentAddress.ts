import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@app/api/client";
import { API_ENDPOINTS } from "@app/api/endpoints";
import type { ParentAddress } from "@app/types/models";
import { QUERY_KEYS } from "@/src/utils/constants";

export const useParentAddress = () => {
  return useQuery({
    queryKey: QUERY_KEYS.PARENT.ADDRESS,
    queryFn: async () => {
      const { data } = await apiClient.get<{
        success: boolean;
        data: ParentAddress;
      }>(API_ENDPOINTS.PARENT.ADDRESS);
      return data.data;
    },
    retry: false,
  });
};
