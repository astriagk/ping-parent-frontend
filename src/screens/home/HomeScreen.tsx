import React from "react";
import { View, Text } from "react-native";
import { useAuthStore } from "@store/useAuthStore";

export const HomeScreen = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold">
        Welcome, {user?.name || "User"}!
      </Text>
    </View>
  );
};
