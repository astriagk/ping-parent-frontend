# Styling Guide - Gluestack UI v3

## ⚠️ IMPORTANT: Use Tailwind className Approach

This project uses **Gluestack UI v3** which supports Tailwind CSS className props.

## ✅ Correct Approach - Use className with Tailwind Syntax

```tsx
import { Box } from "@app/components/ui/box";
import { Text } from "@app/components/ui/text";
import { VStack } from "@app/components/ui/vstack";

// ✅ CORRECT - Use Tailwind className
<Box className="flex-1 p-4 bg-background-0">
  <Text className="text-2xl font-bold text-typography-900">
    Hello World
  </Text>
</Box>

// ✅ CORRECT - Use VStack with space
<VStack space="md" className="mt-6">
  <Text className="text-base">Content</Text>
</VStack>
```

## ❌ Wrong Approach - Don't Use v1 Props

```tsx
// ❌ WRONG - Don't use v1 style props
<Box flex={1} padding={16} backgroundColor="$backgroundLight0">
  <Text fontSize={24} fontWeight="bold">
    Hello
  </Text>
</Box>
```

## 📏 Common Tailwind Classes

### Layout & Flexbox

```tsx
// Flex direction
className = "flex-row"; // Row layout
className = "flex-col"; // Column layout (default)

// Flex sizing
className = "flex-1"; // flex: 1
className = "flex-grow"; // flex-grow: 1
className = "flex-shrink"; // flex-shrink: 1

// Alignment
className = "justify-center"; // Justify content center
className = "justify-between"; // Space between items
className = "items-center"; // Align items center
className = "items-start"; // Align items start
className = "items-end"; // Align items end

// Self alignment
className = "self-center"; // Align self center
className = "self-start"; // Align self start
className = "self-end"; // Align self end
```

### Spacing (Margin & Padding)

```tsx
// Padding
className = "p-1"; // 4px all sides
className = "p-2"; // 8px all sides
className = "p-4"; // 16px all sides
className = "p-6"; // 24px all sides
className = "p-8"; // 32px all sides

className = "px-4"; // Horizontal padding 16px
className = "py-4"; // Vertical padding 16px
className = "pt-4"; // Padding top 16px
className = "pb-4"; // Padding bottom 16px
className = "pl-4"; // Padding left 16px
className = "pr-4"; // Padding right 16px

// Margin
className = "m-1"; // 4px all sides
className = "m-2"; // 8px all sides
className = "m-4"; // 16px all sides
className = "m-6"; // 24px all sides
className = "m-8"; // 32px all sides

className = "mx-4"; // Horizontal margin 16px
className = "my-4"; // Vertical margin 16px
className = "mt-4"; // Margin top 16px
className = "mb-4"; // Margin bottom 16px
className = "ml-4"; // Margin left 16px
className = "mr-4"; // Margin right 16px

// Gap (for VStack/HStack)
className = "gap-1"; // 4px gap
className = "gap-2"; // 8px gap
className = "gap-4"; // 16px gap
className = "gap-6"; // 24px gap
```

### Colors

```tsx
// Background colors
className = "bg-primary-500"; // Primary background
className = "bg-secondary-500"; // Secondary background
className = "bg-error-500"; // Error background
className = "bg-success-500"; // Success background
className = "bg-white"; // White background
className = "bg-background-0"; // Theme background

// Text colors
className = "text-primary-500"; // Primary text
className = "text-typography-900"; // Primary text color
className = "text-typography-600"; // Secondary text color
className = "text-white"; // White text
className = "text-error-500"; // Error text

// Border colors
className = "border-primary-500"; // Primary border
className = "border-error-500"; // Error border
className = "border-gray-300"; // Gray border
```

### 🎨 Non-Gluestack Components (Icons, ActivityIndicator, etc.)

For React Native components that don't support Tailwind className, use design tokens:

```tsx
import { COLORS } from "@app/config/design-tokens";
import { Menu, User } from "lucide-react-native";
import { ActivityIndicator } from "react-native";

// ✅ CORRECT - Use COLORS design tokens
<Menu color={COLORS.white} size={24} />
<User color={COLORS.primary} size={16} />
<ActivityIndicator color={COLORS.primary} />

// ❌ WRONG - Don't use hardcoded hex values
<Menu color="#ffffff" size={24} />
<User color="#3B82F6" size={16} />
```

Available colors in COLORS:

- `primary`, `secondary`, `success`, `warning`, `error`, `info`
- `white`, `black`, `gray`

````

### Typography

```tsx
// Font size
className = "text-xs"; // 12px
className = "text-sm"; // 14px
className = "text-base"; // 16px
className = "text-lg"; // 18px
className = "text-xl"; // 20px
className = "text-2xl"; // 24px
className = "text-3xl"; // 30px
className = "text-4xl"; // 36px
className = "text-5xl"; // 48px

// Font weight
className = "font-normal"; // 400
className = "font-medium"; // 500
className = "font-semibold"; // 600
className = "font-bold"; // 700

// Text alignment
className = "text-left";
className = "text-center";
className = "text-right";

// Text color (use Gluestack tokens)
className = "text-typography-900"; // Primary text
className = "text-typography-500"; // Secondary text
className = "text-error-500"; // Error text
className = "text-success-500"; // Success text
````

### Colors

```tsx
// Background colors
className = "bg-background-0"; // White background (light mode)
className = "bg-background-50"; // Light gray background
className = "bg-primary-500"; // Primary blue
className = "bg-error-500"; // Error red
className = "bg-success-500"; // Success green
className = "bg-yellow-100"; // Warning yellow light

// Text colors
className = "text-typography-900"; // Primary text
className = "text-typography-500"; // Secondary text
className = "text-primary-500"; // Primary blue text
className = "text-error-500"; // Error text
className = "text-success-500"; // Success text

// Border colors
className = "border-error-500"; // Red border
className = "border-outline-300"; // Default border
```

### Borders & Rounded Corners

```tsx
// Border width
className = "border"; // 1px border
className = "border-2"; // 2px border
className = "border-t"; // Top border only
className = "border-b"; // Bottom border only

// Border radius
className = "rounded"; // 4px
className = "rounded-md"; // 6px
className = "rounded-lg"; // 8px
className = "rounded-xl"; // 12px
className = "rounded-full"; // 9999px (fully rounded)
```

### Width & Height

```tsx
// Width
className = "w-full"; // 100%
className = "w-1/2"; // 50%
className = "w-1/3"; // 33.33%
className = "w-64"; // 256px

// Height
className = "h-full"; // 100%
className = "h-screen"; // 100vh
className = "h-64"; // 256px

// Max width
className = "max-w-md"; // 448px
className = "max-w-lg"; // 512px
className = "max-w-xl"; // 576px
```

## 🧩 Component Examples

### Box Layout

```tsx
import { Box } from "@app/components/ui/box";
import { Text } from "@app/components/ui/text";

<Box className="flex-1 p-4 bg-background-0">
  <Box className="mb-6 p-4 bg-primary-500 rounded-lg">
    <Text className="text-white text-center">Card Content</Text>
  </Box>
</Box>;
```

### VStack & HStack

```tsx
import { VStack } from "@app/components/ui/vstack";
import { HStack } from "@app/components/ui/hstack";
import { Text } from "@app/components/ui/text";

// Vertical stack with spacing
<VStack space="md" className="mt-6">
  <Text className="text-lg font-bold">Title</Text>
  <Text className="text-base text-typography-500">Subtitle</Text>
</VStack>

// Horizontal stack
<HStack space="sm" className="items-center">
  <Text className="text-base">Username</Text>
</HStack>
```

### Form Fields with Errors

```tsx
import { Input, InputField } from "@app/components/ui/input";
import { Text } from "@app/components/ui/text";
import { VStack } from "@app/components/ui/vstack";

<VStack space="xs" className="mb-4">
  <Input className={error ? "border-error-500" : ""}>
    <InputField placeholder="Email" className="text-base" />
  </Input>
  {error && <Text className="text-error-500 text-sm mt-1">{error}</Text>}
</VStack>;
```

### Buttons

```tsx
import { Button, ButtonText } from "@app/components/ui/button";

// Primary button
<Button className="w-full">
  <ButtonText className="text-base font-semibold">Submit</ButtonText>
</Button>

// Outline button
<Button variant="outline" className="w-full border">
  <ButtonText className="text-base">Cancel</ButtonText>
</Button>
```

## 🎨 Design Tokens (Legacy)

Only the COLORS constant remains for non-Gluestack components:

```tsx
import { COLORS } from "@app/config/design-tokens";

// Only use COLORS for non-Gluestack components
<ActivityIndicator color={COLORS.primary} />
<StatusBar backgroundColor={COLORS.primary} />
```

For Gluestack UI v3 components, **always use Tailwind className instead**.

## 🚫 Common Mistakes

### ❌ Mistake 1: Using old v1 prop-based styling

```tsx
// ❌ DON'T
<Box flex={1} padding={16} backgroundColor="$backgroundLight0">
  <Text fontSize={24}>Title</Text>
</Box>

// ✅ DO
<Box className="flex-1 p-4 bg-background-0">
  <Text className="text-2xl">Title</Text>
</Box>
```

### ❌ Mistake 2: Using numeric design tokens with v3

```tsx
// ❌ DON'T - These tokens no longer exist
import { SPACING, FONT_SIZE } from "@app/config/design-tokens";
<Box marginTop={SPACING.md} padding={SPACING.lg}>
  <Text fontSize={FONT_SIZE.xl}>Title</Text>
</Box>

// ✅ DO - Use Tailwind className
<Box className="mt-4 p-6">
  <Text className="text-xl">Title</Text>
</Box>
```

### ❌ Mistake 3: Importing from old packages

```tsx
// ❌ DON'T
import { Box, Text } from "@gluestack-ui/themed";

// ✅ DO
import { Box } from "@app/components/ui/box";
import { Text } from "@app/components/ui/text";
```

## ✅ Best Practices

1. **Always use Tailwind className** for Gluestack UI v3 components
2. **Use VStack/HStack space prop** for consistent spacing between children
3. **Import from @app/components/ui/\*** for all Gluestack components
4. **Use design system tokens** for colors (text-typography-900, bg-primary-500)
5. **Keep COLORS constant** only for non-Gluestack components
6. **Combine className strings** with template literals for conditional styling

```tsx
<Input className={`w-full ${error ? "border-error-500" : ""}`}>
  <InputField placeholder="Email" />
</Input>
```
