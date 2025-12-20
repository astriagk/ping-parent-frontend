/**
 * Centralized API endpoint definitions
 * All API routes should be defined here for maintainability
 */
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    LOGOUT: "/auth/logout",
    VERIFY_TOKEN: "/auth/verify-token",
    ME: "/auth/me",
    SEND_OTP: "/auth/login/send-otp",
    VERIFY_OTP: "/auth/login/verify-otp",
  },
} as const;
