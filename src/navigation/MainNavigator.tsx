import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeScreen } from "@app/screens/home/HomeScreen";
import { ProfileScreen } from "@app/screens/profile/ProfileScreen";
import { ROUTES } from "./routes";
import type { MainStackParamList } from "./types";

const Drawer = createDrawerNavigator<MainStackParamList>();

export const MainNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name={ROUTES.MAIN.HOME} component={HomeScreen} />
      <Drawer.Screen name={ROUTES.MAIN.PROFILE} component={ProfileScreen} />
    </Drawer.Navigator>
  );
};
