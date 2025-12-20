// Theme Configuration
export const themes = {
  light: {
    name: "Light",
    colors: {
      primary: "#3B82F6",
      secondary: "#8B5CF6",
      background: "#FFFFFF",
      text: "#111827",
      card: "#FFFFFF",
      border: "#E5E7EB",
    },
  },
  dark: {
    name: "Dark",
    colors: {
      primary: "#60A5FA",
      secondary: "#A78BFA",
      background: "#111827",
      text: "#F9FAFB",
      card: "#1F2937",
      border: "#374151",
    },
  },
  // Add custom themes here
  ocean: {
    name: "Ocean",
    colors: {
      primary: "#0EA5E9",
      secondary: "#06B6D4",
      background: "#F0F9FF",
      text: "#0C4A6E",
      card: "#FFFFFF",
      border: "#BAE6FD",
    },
  },
  sunset: {
    name: "Sunset",
    colors: {
      primary: "#F97316",
      secondary: "#FB923C",
      background: "#FFF7ED",
      text: "#7C2D12",
      card: "#FFFFFF",
      border: "#FDBA74",
    },
  },
  forest: {
    name: "Forest",
    colors: {
      primary: "#10B981",
      secondary: "#059669",
      background: "#F0FDF4",
      text: "#064E3B",
      card: "#FFFFFF",
      border: "#86EFAC",
    },
  },
};

export type ThemeName = keyof typeof themes;

// Spacing
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

// Typography
export const typography = {
  sizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    xxxl: 32,
  },
  weights: {
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  },
};

// Border Radius
export const borderRadius = {
  none: 0,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  full: 9999,
};

// Shadows
export const shadows = {
  sm: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  md: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  lg: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
};
