import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Box } from "@app/components/ui";
import { useAuthStore } from "@app/store/useAuthStore";
import { AuthNavigator } from "./AuthNavigator";
import { MainNavigator } from "./MainNavigator";

export const RootNavigator = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <Box className="flex-1">
      <NavigationContainer>
        {!isAuthenticated ? <AuthNavigator /> : <MainNavigator />}
      </NavigationContainer>
    </Box>
  );
};
