import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Box } from "@app/components/ui";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuthStore } from "@app/store/useAuthStore";
import { AuthNavigator } from "./AuthNavigator";
import { MainNavigator } from "./MainNavigator";

export const RootNavigator = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  // Temporarily force show auth navigator for development
  const showAuthNavigator = false;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box className="flex-1 bg-background-0">
        <NavigationContainer>
          {showAuthNavigator || !isAuthenticated ? (
            <AuthNavigator />
          ) : (
            <MainNavigator />
          )}
        </NavigationContainer>
      </Box>
    </SafeAreaView>
  );
};
