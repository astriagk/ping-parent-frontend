import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useTheme } from "@hooks/useTheme";
import type { ThemeMode } from "@store/useThemeStore";

export const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme, toggleTheme, isDark } = useTheme();

  const themes: { label: string; value: ThemeMode }[] = [
    { label: "☀️ Light", value: "light" },
    { label: "🌙 Dark", value: "dark" },
    { label: "⚙️ System", value: "system" },
  ];

  return (
    <View className="p-4">
      <Text
        className={`text-lg font-semibold mb-3 ${
          isDark ? "text-white" : "text-gray-900"
        }`}
      >
        Theme
      </Text>

      <View className="flex-row gap-2 mb-4">
        {themes.map((themeOption) => (
          <TouchableOpacity
            key={themeOption.value}
            onPress={() => setTheme(themeOption.value)}
            className={`flex-1 py-3 px-4 rounded-lg ${
              theme === themeOption.value
                ? isDark
                  ? "bg-blue-600"
                  : "bg-blue-500"
                : isDark
                  ? "bg-gray-700"
                  : "bg-gray-100"
            }`}
          >
            <Text
              className={`text-center font-medium ${
                theme === themeOption.value
                  ? "text-white"
                  : isDark
                    ? "text-gray-300"
                    : "text-gray-700"
              }`}
            >
              {themeOption.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        onPress={toggleTheme}
        className={`py-3 px-4 rounded-lg ${
          isDark ? "bg-gray-700" : "bg-gray-100"
        }`}
      >
        <Text
          className={`text-center font-medium ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          🔄 Toggle Light/Dark
        </Text>
      </TouchableOpacity>
    </View>
  );
};
