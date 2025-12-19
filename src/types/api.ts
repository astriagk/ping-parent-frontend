// API and service types

// Auth service types
export type LoginCredentials = {
  emailOrPhone: string;
  password: string;
};

export type AuthResponse = {
  success: boolean;
  data?: {
    token: string;
    user?: {
      id: string;
      email?: string;
      phone?: string;
    };
  };
  error?: string | { message: string };
};

export type VerifyTokenResponse = {
  success: boolean;
  data?: {
    userId: string;
    email?: string;
  };
  error?: string;
};
