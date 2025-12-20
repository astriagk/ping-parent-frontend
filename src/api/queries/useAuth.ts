import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@api/client";
import { API_ENDPOINTS } from "@api/endpoints";
import { QUERY_KEYS } from "@utils/constants";
import type { User } from "@models/models";

export const useCurrentUser = () => {
  return useQuery({
    queryKey: QUERY_KEYS.AUTH.CURRENT_USER,
    queryFn: async () => {
      const { data } = await apiClient.get<User>(API_ENDPOINTS.AUTH.ME);
      return data;
    },
  });
};
