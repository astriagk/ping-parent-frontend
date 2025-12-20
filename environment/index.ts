import ENV_DEV from "./env.dev";
import ENV_UAT from "./env.uat";
import ENV_PROD from "./env.prod";

const getEnvConfig = () => {
  const env = process.env.EXPO_PUBLIC_ENV || "development";

  switch (env) {
    case "production":
      return ENV_PROD;
    case "uat":
      return ENV_UAT;
    case "development":
    default:
      return ENV_DEV;
  }
};

const ENV = getEnvConfig();

export const {
  API_BASE_URL,
  APP_ENV,
  ENV_NAME,
  DEBUG,
  API_TIMEOUT,
  ENABLE_LOGGING,
} = ENV;

export default ENV;
