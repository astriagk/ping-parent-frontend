import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@api/client";
import { API_ENDPOINTS } from "@api/endpoints";
import { QUERY_KEYS } from "@utils/constants";
import type { VerifyTokenResponse } from "@models/auth.types";

export const useVerifyToken = (enabled: boolean = true) => {
  return useQuery({
    queryKey: QUERY_KEYS.AUTH.VERIFY_TOKEN,
    queryFn: async () => {
      const { data } = await apiClient.get<VerifyTokenResponse>(
        API_ENDPOINTS.AUTH.VERIFY_TOKEN
      );
      return data;
    },
    enabled,
    retry: false,
    staleTime: 0,
  });
};
