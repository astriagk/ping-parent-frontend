# Theme System Guide

## Overview

The app supports Light, Dark, and System themes with easy customization.

## Usage

### 1. Using the Theme Hook

```tsx
import { useTheme } from "@/hooks/useTheme";

const MyComponent = () => {
  const { colors, isDark, theme, setTheme, toggleTheme } = useTheme();

  return (
    <View style={{ backgroundColor: colors.background }}>
      <Text style={{ color: colors.text }}>Hello World</Text>
    </View>
  );
};
```

### 2. Switch Theme

```tsx
import { useThemeStore } from "@/store/useThemeStore";

// Set specific theme
const { setTheme } = useThemeStore();
setTheme("light"); // or 'dark' or 'system'

// Toggle between light/dark
const { toggleTheme } = useThemeStore();
toggleTheme();
```

### 3. Using ThemeSwitcher Component

```tsx
import { ThemeSwitcher } from "@/components/common/ThemeSwitcher";

<ThemeSwitcher />;
```

## Available Theme Colors

### Light Theme

- primary: #3B82F6 (Blue)
- secondary: #8B5CF6 (Purple)
- background: #FFFFFF
- text: #111827
- success: #10B981
- warning: #F59E0B
- error: #EF4444

### Dark Theme

- primary: #60A5FA (Light Blue)
- secondary: #A78BFA (Light Purple)
- background: #111827
- text: #F9FAFB
- success: #34D399
- warning: #FBBF24
- error: #F87171

## Custom Themes

### Option 1: Modify Gluestack Config

Edit `src/config/gluestack-ui.config.ts`:

```tsx
export const myCustomTheme = {
  primary: "#FF6B6B",
  secondary: "#4ECDC4",
  background: "#F7FFF7",
  // ... more colors
};

export const config = {
  ...defaultConfig,
  tokens: {
    ...defaultConfig.tokens,
    colors: {
      ...defaultConfig.tokens.colors,
      ...myCustomTheme,
    },
  },
};
```

### Option 2: Add Named Themes

Edit `src/config/theme.ts`:

```tsx
export const themes = {
  // ... existing themes
  myCustom: {
    name: "My Custom",
    colors: {
      primary: "#FF6B6B",
      secondary: "#4ECDC4",
      background: "#F7FFF7",
      text: "#2C3E50",
      card: "#FFFFFF",
      border: "#E8F5E9",
    },
  },
};
```

## Styling with Theme

### 1. NativeWind Classes

```tsx
<View className={isDark ? "bg-gray-800" : "bg-white"}>
  <Text className={isDark ? "text-white" : "text-gray-900"}>Themed Text</Text>
</View>
```

### 2. Inline Styles

```tsx
<View style={{ backgroundColor: colors.background }}>
  <Text style={{ color: colors.text }}>Themed Text</Text>
</View>
```

### 3. Gluestack UI Components

```tsx
import { Button, ButtonText } from "@gluestack-ui/themed";

<Button bg="$primary">
  <ButtonText>Primary Button</ButtonText>
</Button>;
```

## Theme Tokens

Access predefined values from `src/config/theme.ts`:

```tsx
import { spacing, typography, borderRadius, shadows } from "@/config/theme";

<View
  style={{
    padding: spacing.md,
    borderRadius: borderRadius.lg,
    ...shadows.md,
  }}
>
  <Text style={{ fontSize: typography.sizes.lg }}>Consistent Styling</Text>
</View>;
```

## Best Practices

1. **Always use theme colors**: Avoid hardcoded colors
2. **Use isDark for conditional styling**: Clean ternary operators
3. **Leverage NativeWind**: Faster development with Tailwind
4. **Test both themes**: Always verify light and dark appearance
5. **Use theme tokens**: Maintain consistency across the app

## Example Implementation

```tsx
import React from "react";
import { View, Text } from "react-native";
import { useTheme } from "@/hooks/useTheme";
import { spacing, borderRadius } from "@/config/theme";

export const ThemedCard = ({ title, content }) => {
  const { colors, isDark } = useTheme();

  return (
    <View
      className={`p-4 ${isDark ? "bg-gray-800" : "bg-white"}`}
      style={{
        backgroundColor: colors.card,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: borderRadius.lg,
        padding: spacing.md,
      }}
    >
      <Text
        className={`text-lg font-bold mb-2 ${
          isDark ? "text-white" : "text-gray-900"
        }`}
        style={{ color: colors.text }}
      >
        {title}
      </Text>
      <Text
        className={isDark ? "text-gray-300" : "text-gray-600"}
        style={{ color: colors.textSecondary }}
      >
        {content}
      </Text>
    </View>
  );
};
```
