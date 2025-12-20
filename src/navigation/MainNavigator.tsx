import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "@app/screens/home/HomeScreen";
import { ProfileScreen } from "@app/screens/profile/ProfileScreen";
import { ROUTES } from "./routes";
import type { MainStackParamList } from "./types";

const Stack = createNativeStackNavigator<MainStackParamList>();

export const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ROUTES.MAIN.HOME} component={HomeScreen} />
      <Stack.Screen name={ROUTES.MAIN.PROFILE} component={ProfileScreen} />
    </Stack.Navigator>
  );
};
