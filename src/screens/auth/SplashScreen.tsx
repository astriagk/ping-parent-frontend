import React, { useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Box, Text } from "@app/components/ui";
import { useVerifyToken } from "@app/api/queries/useVerifyToken";
import { useAuthStore } from "@app/store/useAuthStore";
import { useTranslation } from "@app/hooks/useTranslation";
import { ROUTES } from "@app/navigation/routes";
import { COLORS } from "@app/config/design-tokens";
import type { AuthNavigationProp } from "@app/navigation/types";

export const SplashScreen = () => {
  const navigation = useNavigation<AuthNavigationProp>();
  const { token, logout } = useAuthStore();
  const { data, isError } = useVerifyToken(!!token);
  const { t } = useTranslation();

  useEffect(() => {
    // If no token, go to login
    if (!token) {
      navigation.replace(ROUTES.AUTH.LOGIN);
      return;
    }

    // If token verification succeeded
    if (data?.success && data?.data?.tokenValid) {
      // User is authenticated, the RootNavigator will handle navigation to MainNavigator
      return;
    }

    // If token verification failed
    if (isError || (data && !data?.data?.tokenValid)) {
      logout();
      // Don't navigate - RootNavigator will automatically show AuthNavigator
    }
  }, [token, data, isError, logout, navigation]);

  return (
    <Box className="flex-1 justify-center items-center">
      <Text className="text-3xl font-bold mb-8 text-center">
        {t("app.name")}
      </Text>
      <ActivityIndicator size="large" color={COLORS.primary} />
      <Text className="text-typography-500 mt-4">
        {t("auth.splash.verifying")}
      </Text>
    </Box>
  );
};
