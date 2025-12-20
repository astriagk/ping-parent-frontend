import { Platform } from "react-native";

// For Android emulator, use 10.0.2.2 instead of localhost
// For physical devices, replace with your computer's IP address (e.g., 192.168.1.100)
const getApiUrl = () => {
  // Check if EXPO_PUBLIC_API_URL is set
  if (process.env.EXPO_PUBLIC_API_URL) {
    return process.env.EXPO_PUBLIC_API_URL;
  }

  // Default URLs based on platform
  if (Platform.OS === "android") {
    return "http://192.168.0.126:3000/api"; // Android emulator
  }

  return "http://localhost:3000/api"; // iOS simulator/web
};

export const ENV_CONFIG = {
  API_BASE_URL: getApiUrl(),
  APP_ENV: "development",
  ENV_NAME: "Development",
  DEBUG: true,
  API_TIMEOUT: 30000,
  ENABLE_LOGGING: true,
};

export default ENV_CONFIG;
