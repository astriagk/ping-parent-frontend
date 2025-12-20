export const ENV_CONFIG = {
  API_BASE_URL:
    process.env.EXPO_PUBLIC_API_URL || "https://uat-api.pingparent.com/api",
  APP_ENV: "uat",
  ENV_NAME: "UAT",
  DEBUG: false,
  API_TIMEOUT: 30000,
  ENABLE_LOGGING: true,
};

export default ENV_CONFIG;
