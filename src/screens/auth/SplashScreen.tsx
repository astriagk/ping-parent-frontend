import React, { useEffect } from "react";
import { View, ActivityIndicator, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthLayout } from "@components/layouts/AuthLayout";
import { useVerifyToken } from "@api/queries/useVerifyToken";
import { useAuthStore } from "@store/useAuthStore";
import { useTranslation } from "@hooks/useTranslation";
import { ROUTES } from "@navigation/routes";
import type { AuthNavigationProp } from "@navigation/types";

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
      navigation.replace(ROUTES.AUTH.LOGIN);
    }
  }, [token, data, isError, logout, navigation]);

  return (
    <AuthLayout>
      <View className="items-center">
        <Text className="text-3xl font-bold mb-8 text-center">
          {t("app.name")}
        </Text>
        <ActivityIndicator size="large" color="#3B82F6" />
        <Text className="text-gray-500 mt-4">{t("auth.splash.verifying")}</Text>
      </View>
    </AuthLayout>
  );
};
