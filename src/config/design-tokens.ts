import { themes } from "./theme";

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
  // Light theme colors
  primary: themes.light.colors.primary,
  primaryLight: themes.dark.colors.primary,
  secondary: themes.light.colors.secondary,

  // Semantic colors
  success: "#10B981",
  warning: "#F59E0B",
  error: "#EF4444",
  info: "#06B6D4",

  // Neutral colors
  white: "#FFFFFF",
  black: "#000000",
  gray: "#6B7280",
  grayLight: "#9CA3AF",

  // Theme-aware colors
  backgroundLight: themes.light.colors.background,
  backgroundDark: themes.dark.colors.background,
  surfaceLight: themes.light.colors.card,
  surfaceDark: themes.dark.colors.card,
  textLight: themes.light.colors.text,
  textDark: themes.dark.colors.text,
  borderLight: themes.light.colors.border,
  borderDark: themes.dark.colors.border,
} as const;

export type ColorKey = keyof typeof COLORS;

/**
 * Helper function to get theme-aware colors
 *
 * Usage:
 * const isDark = colorScheme === "dark";
 * <View style={{ backgroundColor: getThemeColor(isDark, "background") }} />
 */
export const getThemeColor = (
  isDark: boolean,
  colorType: "primary" | "secondary" | "background" | "text" | "card" | "border"
) => {
  const theme = isDark ? themes.dark : themes.light;
  return theme.colors[colorType];
};
