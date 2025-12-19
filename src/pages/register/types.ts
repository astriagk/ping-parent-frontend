export interface RegisterFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
  general?: string;
}

// New phone-based registration types
export interface PhoneStepFormValues {
  phone: string;
}

export interface OTPStepFormValues {
  otp: string;
}

export interface ProfileStepFormValues {
  firstName: string;
  lastName: string;
  email: string;
  address?: string;
}
