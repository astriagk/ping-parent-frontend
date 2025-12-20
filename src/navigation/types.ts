import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RouteProp } from "@react-navigation/native";

// Auth Stack
export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

export type AuthNavigationProp = NativeStackNavigationProp<AuthStackParamList>;
export type AuthRouteProp<T extends keyof AuthStackParamList> = RouteProp<
  AuthStackParamList,
  T
>;

// Main Stack
export type MainStackParamList = {
  Home: undefined;
  Profile: { userId?: string };
};

export type MainNavigationProp = NativeStackNavigationProp<MainStackParamList>;
export type MainRouteProp<T extends keyof MainStackParamList> = RouteProp<
  MainStackParamList,
  T
>;
