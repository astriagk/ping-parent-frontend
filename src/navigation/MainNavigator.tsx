import React from "react";
import { TouchableOpacity, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "@app/screens/home/HomeScreen";
import { ProfileScreen } from "@app/screens/profile/ProfileScreen";
import { ROUTES } from "./routes";
import { useThemeStore } from "@app/store/useThemeStore";
import { useParentProfile } from "@app/api/queries/useParentProfile";
import { COLORS, getThemeColor } from "@app/config/design-tokens";
import { Moon, Sun } from "lucide-react-native";

import { MainStackParamList } from "./types";
import { SettingsScreen } from "@app/screens/settings/SettingsScreen";
import { Avatar, AvatarFallbackText, AvatarImage } from "@app/components/ui";

const Stack = createNativeStackNavigator<MainStackParamList>();

export const MainNavigator = () => {
  const { colorScheme, toggleTheme } = useThemeStore();
  const { data: profile } = useParentProfile();
  const isDark = colorScheme === "dark";

  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerShown: true,
        headerStyle: {
          backgroundColor: isDark
            ? getThemeColor(isDark, "card")
            : getThemeColor(isDark, "primary"),
        },
        headerTintColor: COLORS.white,
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerRight: () => {
          const state = navigation.getState();
          const currentRouteName =
            state.routes[state.index]?.name || ROUTES.MAIN.HOME;
          // Hide avatar if on Profile screen
          const isProfileScreen = currentRouteName === ROUTES.MAIN.PROFILE;
          return (
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              {/* Theme Toggle Icon */}
              <TouchableOpacity onPress={toggleTheme} style={{ padding: 8 }}>
                {isDark ? (
                  <Sun color={COLORS.white} size={22} />
                ) : (
                  <Moon color={COLORS.white} size={22} />
                )}
              </TouchableOpacity>
              {/* Profile Icon / User Avatar */}
              {!isProfileScreen && (
                <TouchableOpacity
                  onPress={() => navigation.navigate(ROUTES.MAIN.PROFILE, {})}
                >
                  <Avatar size="sm">
                    {profile?.profileImageUrl ? (
                      <AvatarImage source={{ uri: profile.profileImageUrl }} />
                    ) : (
                      <AvatarFallbackText>
                        {profile?.firstName?.[0] || "U"}
                      </AvatarFallbackText>
                    )}
                  </Avatar>
                </TouchableOpacity>
              )}
            </View>
          );
        },
      })}
    >
      <Stack.Screen name={ROUTES.MAIN.HOME} component={HomeScreen} />
      <Stack.Screen name={ROUTES.MAIN.PROFILE} component={ProfileScreen} />
      <Stack.Screen name={ROUTES.MAIN.SETTINGS} component={SettingsScreen} />
    </Stack.Navigator>
  );
};
