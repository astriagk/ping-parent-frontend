export interface VerifyTokenResponse {
  success: boolean;
  data: {
    userId: string;
    email: string;
    role: string;
    tokenValid: boolean;
  };
}
