export const ENV_CONFIG = {
  API_BASE_URL:
    process.env.EXPO_PUBLIC_API_URL || "https://api.pingparent.com/api",
  APP_ENV: "production",
  ENV_NAME: "Production",
  DEBUG: false,
  API_TIMEOUT: 30000,
  ENABLE_LOGGING: false,
};

export default ENV_CONFIG;
