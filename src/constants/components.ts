// Component size constants
export const SPINNER_SIZES = {
  small: 18,
  medium: 24,
  large: 32,
} as const;

export const LOGO_SIZES = {
  small: 40,
  medium: 80,
  large: 120,
} as const;

// Component size type helpers
export type SpinnerSize = keyof typeof SPINNER_SIZES;
export type LogoSize = keyof typeof LOGO_SIZES;
