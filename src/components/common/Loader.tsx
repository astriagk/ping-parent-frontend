import React from "react";
import { View, ActivityIndicator } from "react-native";

export const Loader: React.FC = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <ActivityIndicator size="large" color="#3B82F6" />
    </View>
  );
};
