export const CONSTANTS = {
  APP_NAME: "PP Frontend",
  VERSION: "1.0.0",
  STORAGE_KEYS: {
    AUTH_TOKEN: "authToken",
    USER_PREFERENCES: "userPreferences",
  },
};

/**
 * Centralized React Query keys for cache management
 * Use these keys to ensure consistent caching across the app
 */
export const QUERY_KEYS = {
  AUTH: {
    VERIFY_TOKEN: ["auth", "verifyToken"] as const,
    CURRENT_USER: ["auth", "currentUser"] as const,
  },
  USERS: {
    LIST: ["users", "list"] as const,
    DETAIL: (id: string) => ["users", "detail", id] as const,
  },
  POSTS: {
    LIST: ["posts", "list"] as const,
    DETAIL: (id: string) => ["posts", "detail", id] as const,
  },
  PARENT: {
    PROFILE: ["parent", "profile"] as const,
    ADDRESS: ["parent", "address"] as const,
  },
} as const;
