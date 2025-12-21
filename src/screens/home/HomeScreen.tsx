import React from "react";
import { Box, Text } from "@app/components/ui";
import { useAuthStore } from "@app/store/useAuthStore";
import { MainLayout } from "@app/components/layouts/MainLayout";

export const HomeScreen = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <MainLayout title="Home">
      <Box className="flex-1 justify-center items-center p-4">
        <Text className="text-2xl font-bold">
          Welcome, {user?.name || "User"}!
        </Text>
      </Box>
    </MainLayout>
  );
};
