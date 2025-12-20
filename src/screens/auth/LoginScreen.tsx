import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { AuthNavigationProp } from "../../navigation/types";
import { LoginForm } from "../../components/forms/LoginForm";

export const LoginScreen = () => {
  const navigation = useNavigation<AuthNavigationProp>();

  return (
    <View className="flex-1 justify-center px-6 bg-white">
      <LoginForm />
    </View>
  );
};
