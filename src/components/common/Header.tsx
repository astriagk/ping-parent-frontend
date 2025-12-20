import React from "react";
import { View, Text } from "react-native";

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <View className="px-4 py-6 bg-blue-600">
      <Text className="text-xl font-bold text-white">{title}</Text>
    </View>
  );
};
