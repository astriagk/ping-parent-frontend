import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Box } from "@app/components/ui";
import { useAuthStore } from "@app/store/useAuthStore";
import { AuthNavigator } from "./AuthNavigator";
import { MainNavigator } from "./MainNavigator";
import { SafeAreaView } from "react-native-safe-area-context";

export const RootNavigator = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  // false;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box className="flex-1">
        <NavigationContainer>
          {!isAuthenticated ? <AuthNavigator /> : <MainNavigator />}
        </NavigationContainer>
      </Box>
    </SafeAreaView>
  );
};
