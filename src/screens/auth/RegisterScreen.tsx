import React from "react";
import { Text } from "react-native";
import { AuthLayout } from "@components/layouts/AuthLayout";
import { useTranslation } from "@hooks/useTranslation";

export const RegisterScreen = () => {
  const { t } = useTranslation();

  return (
    <AuthLayout>
      <Text className="text-2xl font-bold">{t("auth.register.title")}</Text>
    </AuthLayout>
  );
};
