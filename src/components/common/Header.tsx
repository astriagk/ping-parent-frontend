import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { HStack, Box, Text } from "@app/components/ui";
import { useNavigation } from "@react-navigation/native";
import type { DrawerNavigationProp } from "@react-navigation/drawer";
import { useAuthStore } from "@app/store/useAuthStore";
import { Menu, User } from "lucide-react-native";
import { COLORS } from "@app/config/design-tokens";

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  const navigation = useNavigation<DrawerNavigationProp<any>>();
  const user = useAuthStore((state) => state.user);

  return (
    <Box className="px-2 py-2 bg-primary-600 shadow-md">
      <HStack className="items-center justify-between">
        {/* Hamburger Menu */}
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          className="p-2"
        >
          <Menu color={COLORS.white} size={24} />
        </TouchableOpacity>

        {/* Title */}
        <Text className="text-xl font-bold text-white flex-1 text-center">
          {title}
        </Text>

        {/* Profile Image */}
        <TouchableOpacity className="p-2">
          {user?.avatar ? (
            <Image
              source={{ uri: user.avatar }}
              className="w-8 h-8 rounded-full"
            />
          ) : (
            <Box className="w-8 h-8 rounded-full bg-white items-center justify-center">
              <User color={COLORS.primary} size={16} />
            </Box>
          )}
        </TouchableOpacity>
      </HStack>
    </Box>
  );
};
