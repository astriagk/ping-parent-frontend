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
    // Phone-based registration endpoints
    REGISTER_SEND_OTP: "/auth/register/send-otp",
    REGISTER_VERIFY_OTP: "/auth/register/verify-otp",
    REGISTER_COMPLETE: "/auth/register/complete",
  },
} as const;
