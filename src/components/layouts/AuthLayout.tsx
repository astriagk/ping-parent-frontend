import React from "react";
import { View, KeyboardAvoidingView, Platform, ScrollView } from "react-native";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <View className="flex-1 bg-white">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100%",
          }}
          keyboardShouldPersistTaps="handled"
        >
          <View className="w-full max-w-md px-6">{children}</View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};
