export const ENV_CONFIG = {
  API_BASE_URL: process.env.EXPO_PUBLIC_API_URL || "http://localhost:3000/api",
  APP_ENV: "development",
  ENV_NAME: "Development",
  DEBUG: true,
  API_TIMEOUT: 30000,
  ENABLE_LOGGING: true,
};

export default ENV_CONFIG;
