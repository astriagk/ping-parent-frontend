/**
 * Design Tokens for Non-Gluestack Components
 *
 * COLORS - Use only for React Native components that don't support Gluestack styling
 * Examples: ActivityIndicator, StatusBar, lucide-react-native icons, etc.
 *
 * For Gluestack UI v3 components, use Tailwind className with design tokens:
 * - text-primary-500, bg-error-500, border-success-500, etc.
 *
 * Usage:
 * import { COLORS } from "@app/config/design-tokens";
 * <ActivityIndicator color={COLORS.primary} />
 * <Menu color={COLORS.white} size={24} />
 */
export const COLORS = {
  primary: "#3B82F6",
  secondary: "#8B5CF6",
  success: "#10B981",
  warning: "#F59E0B",
  error: "#EF4444",
  info: "#06B6D4",
  white: "#FFFFFF",
  black: "#000000",
  gray: "#6B7280",
} as const;

export type ColorKey = keyof typeof COLORS;
