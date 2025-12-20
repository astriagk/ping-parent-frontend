import React from "react";
import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import type { MainRouteProp } from "@navigation/types";

export const ProfileScreen = () => {
  const route = useRoute<MainRouteProp<"Profile">>();
  const { userId } = route.params || {};

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold">Profile Screen</Text>
      {userId && <Text className="mt-4 text-gray-600">User ID: {userId}</Text>}
    </View>
  );
};
