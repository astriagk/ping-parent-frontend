import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SplashScreen } from "@screens/auth/SplashScreen";
import { LoginScreen } from "@screens/auth/LoginScreen";
import { RegisterScreen } from "@screens/auth/RegisterScreen";
import { ROUTES } from "./routes";
import type { AuthStackParamList } from "./types";

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={ROUTES.AUTH.SPLASH}
    >
      <Stack.Screen name={ROUTES.AUTH.SPLASH} component={SplashScreen} />
      <Stack.Screen name={ROUTES.AUTH.LOGIN} component={LoginScreen} />
      <Stack.Screen name={ROUTES.AUTH.REGISTER} component={RegisterScreen} />
    </Stack.Navigator>
  );
};
