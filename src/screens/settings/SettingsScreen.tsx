import React from "react";
import { View, Text, ScrollView } from "react-native";
import { useTheme } from "@app/hooks/useTheme";
import { ThemeSwitcher } from "@app/components/common/ThemeSwitcher";
import { Button, ButtonText } from "@app/components/ui";

export const SettingsScreen = () => {
  const { colors, isDark } = useTheme();

  return (
    <ScrollView
      className={isDark ? "bg-gray-900" : "bg-white"}
      style={{ backgroundColor: colors.background }}
    >
      <View className="flex-1 p-6">
        <Text
          className={`text-2xl font-bold mb-6 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
          style={{ color: colors.text }}
        >
          Settings
        </Text>

        {/* Theme Switcher */}
        <View
          className={`rounded-xl mb-4 ${isDark ? "bg-gray-800" : "bg-white"}`}
          style={{
            backgroundColor: colors.card,
            borderWidth: 1,
            borderColor: colors.border,
          }}
        >
          <ThemeSwitcher />
        </View>

        {/* Example Card */}
        <View
          className={`p-4 rounded-xl mb-4 ${
            isDark ? "bg-gray-800" : "bg-white"
          }`}
          style={{
            backgroundColor: colors.card,
            borderWidth: 1,
            borderColor: colors.border,
          }}
        >
          <Text
            className={`text-lg font-semibold mb-2 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Theme Colors
          </Text>
          <View className="space-y-2">
            <View className="flex-row items-center justify-between py-2">
              <Text className={isDark ? "text-gray-300" : "text-gray-600"}>
                Primary
              </Text>
              <View
                className="w-12 h-12 rounded-lg"
                style={{ backgroundColor: colors.primary }}
              />
            </View>
            <View className="flex-row items-center justify-between py-2">
              <Text className={isDark ? "text-gray-300" : "text-gray-600"}>
                Secondary
              </Text>
              <View
                className="w-12 h-12 rounded-lg"
                style={{ backgroundColor: colors.secondary }}
              />
            </View>
          </View>
        </View>

        {/* Example Buttons */}
        <View className="space-y-3">
          <Button onPress={() => {}}>
            <ButtonText>Primary Button</ButtonText>
          </Button>
          <Button variant="outline" onPress={() => {}} className="border">
            <ButtonText>Secondary Button</ButtonText>
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};
