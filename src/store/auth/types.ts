// Auth slice state types
export type AuthStatus =
  | 'idle'
  | 'loading'
  | 'authenticated'
  | 'unauthenticated'
  | 'error';

export type AuthState = {
  token: string | null;
  userId: string | null;
  status: AuthStatus;
  error?: string;
  isAuthenticated: boolean;
};

// Auth payload types
export type SetTokenPayload = string | null;
export type SetUserPayload = {
  userId: string;
  token: string;
};
