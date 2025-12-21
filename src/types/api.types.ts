import type { User } from "./models";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface SendOTPRequest {
  phone: string;
}

export interface SendOTPResponse {
  success: boolean;
  message: string;
  otp?: string; // Only in development mode
}

export interface VerifyOTPRequest {
  phone: string;
  otp: string;
}

export interface VerifyOTPResponse {
  success: boolean;
  data: {
    token: string;
    user: User;
  };
  message: string;
}

// Phone-based registration types
export interface RegisterSendOTPRequest {
  phone: string;
}

export interface RegisterSendOTPResponse {
  success: boolean;
  message: string;
  otp?: string; // Only in development mode
}

export interface RegisterVerifyOTPRequest {
  phone: string;
  otp: string;
}

export interface RegisterVerifyOTPResponse {
  success: boolean;
  message: string;
}

export interface CompleteRegistrationRequest {
  phone: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  address?: string;
  role?: string;
}

export interface CompleteRegistrationResponse {
  success: boolean;
  data: {
    token: string;
    user: User;
  };
  message: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface ApiError {
  message: string;
  code: string;
  statusCode: number;
}
