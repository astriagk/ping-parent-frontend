import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { HStack, Box, Text } from "@app/components/ui";
import { useNavigation } from "@react-navigation/native";
import type { MainNavigationProp } from "@app/navigation/types";
import { useThemeStore } from "@app/store/useThemeStore";
import { User, Moon, Sun } from "lucide-react-native";
import { COLORS } from "@app/config/design-tokens";
import { ROUTES } from "@app/navigation/routes";
import { useParentProfile } from "@/src/api/queries/useParentProfile";

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  const navigation = useNavigation<MainNavigationProp>();
  const { data: profile } = useParentProfile();
  const { colorScheme, toggleTheme } = useThemeStore();
  const isDark = colorScheme === "dark";

  return (
    <Box className="px-2 py-2">
      <HStack className="items-center justify-between">
        {/* Title */}
        <Text className="text-xl font-bold text-typography-white flex-1 text-center">
          {title}
        </Text>

        {/* Right Side Actions */}
        <HStack className="items-center gap-2">
          {/* Theme Toggle Icon */}
          <TouchableOpacity onPress={toggleTheme} className="p-2">
            {isDark ? (
              <Sun color={COLORS.white} size={20} />
            ) : (
              <Moon color={COLORS.primary} size={20} />
            )}
          </TouchableOpacity>

          {/* Profile Icon */}
          <TouchableOpacity
            onPress={() => navigation.navigate(ROUTES.MAIN.PROFILE, {})}
            className="p-2"
          >
            {profile?.profileImageUrl ? (
              <Image
                source={{ uri: profile.profileImageUrl }}
                className="w-8 h-8 rounded-full"
              />
            ) : (
              <Box className="w-8 h-8 rounded-full items-center justify-center">
                <User
                  color={isDark ? COLORS.white : COLORS.primary}
                  size={16}
                />
              </Box>
            )}
          </TouchableOpacity>
        </HStack>
      </HStack>
    </Box>
  );
};
