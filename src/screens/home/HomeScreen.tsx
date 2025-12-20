import React from "react";
import { ScreenLayout } from "@app/components/layouts/ScreenLayout";
import { Box, Text } from "@app/components/ui";
import { useAuthStore } from "@app/store/useAuthStore";

export const HomeScreen = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <ScreenLayout>
      <Box className="flex-1 justify-center items-center">
        <Text className="text-2xl font-bold">
          Welcome, {user?.name || "User"}!
        </Text>
      </Box>
    </ScreenLayout>
  );
};
