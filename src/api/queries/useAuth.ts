import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@app/api/client";
import { API_ENDPOINTS } from "@app/api/endpoints";
import { QUERY_KEYS } from "@app/utils/constants";
import type { User } from "@app/types/models";

export const useCurrentUser = () => {
  return useQuery({
    queryKey: QUERY_KEYS.AUTH.CURRENT_USER,
    queryFn: async () => {
      const { data } = await apiClient.get<User>(API_ENDPOINTS.AUTH.ME);
      return data;
    },
  });
};
