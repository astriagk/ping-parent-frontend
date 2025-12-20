/**
 * Centralized route name constants
 * Use these constants instead of string literals for type-safe navigation
 */

export const ROUTES = {
  AUTH: {
    SPLASH: "Splash" as const,
    LOGIN: "Login" as const,
    REGISTER: "Register" as const,
  },
  MAIN: {
    HOME: "Home" as const,
    PROFILE: "Profile" as const,
  },
} as const;
