import type { PasswordStrength } from './types';

export const calculatePasswordStrength = (
  password: string,
): PasswordStrength => {
  if (!password) return null;

  let score = 0;

  // Length check
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;

  // Character type checks
  if (/[a-z]/.test(password)) score++; // lowercase
  if (/[A-Z]/.test(password)) score++; // uppercase
  if (/[0-9]/.test(password)) score++; // number
  if (/[^a-zA-Z0-9]/.test(password)) score++; // special char

  if (score <= 2) return 'weak';
  if (score <= 4) return 'medium';
  return 'strong';
};

export const checkPasswordRequirements = (password: string) => {
  return {
    minLength: password.length >= 8,
    hasUppercase: /[A-Z]/.test(password),
    hasLowercase: /[a-z]/.test(password),
    hasNumber: /[0-9]/.test(password),
  };
};
