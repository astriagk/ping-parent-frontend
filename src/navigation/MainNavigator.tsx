import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeScreen } from "@app/screens/home/HomeScreen";
import { ProfileScreen } from "@app/screens/profile/ProfileScreen";
import { ROUTES } from "./routes";

import { MainStackParamList } from "./types";
import { SettingsScreen } from "@app/screens/settings/SettingsScreen";

const Drawer = createDrawerNavigator<MainStackParamList>();

export const MainNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        swipeEnabled: true,
        drawerPosition: "right",
      }}
    >
      <Drawer.Screen name={ROUTES.MAIN.HOME} component={HomeScreen} />
      <Drawer.Screen name={ROUTES.MAIN.PROFILE} component={ProfileScreen} />
      <Drawer.Screen name={ROUTES.MAIN.SETTINGS} component={SettingsScreen} />
    </Drawer.Navigator>
  );
};
