import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../client";
import type { User } from "../../types/models";

export const useCurrentUser = () => {
  return useQuery({
    queryKey: ["currentUser"],
    queryFn: async () => {
      const { data } = await apiClient.get<User>("/auth/me");
      return data;
    },
  });
};
