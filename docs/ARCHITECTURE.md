# Project Architecture & Conventions

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Design System](#design-system)
- [Component Architecture](#component-architecture)
- [Path Aliases](#path-aliases)
- [Styling Patterns](#styling-patterns)
- [Development Workflow](#development-workflow)
- [Best Practices](#best-practices)

---

## Overview

This is a React Native mobile application built with TypeScript, following atomic design principles and a token-based theming system for long-term maintainability.

**Key Principles:**

- 🎨 **Design Tokens** - Single source of truth for styling
- 🧩 **Atomic Design** - Component hierarchy (primitives → atoms → molecules → organisms)
- 📂 **Colocated Files** - Screens and their styles live together
- 🔗 **Path Aliases** - Clean imports using `@` prefixes
- 📚 **Storybook** - Component development and documentation

---

## Tech Stack

### Core

- **React Native**: 0.83.0
- **TypeScript**: 5.9.3
- **React Navigation**: 7.x (Native Stack)

### State Management

- **Redux Toolkit**: 2.11.2
- **React Redux**: 9.2.0

### Forms & Validation

- **Formik**: 2.4.0
- **Yup**: 1.2.0

### Storage & API

- **AsyncStorage**: @react-native-async-storage 2.2.0
- **Axios**: 1.13.2

### Development Tools

- **Storybook**: @storybook/react-native 7.6.0
- **ESLint**: 8.19.0
- **Prettier**: 2.8.8
- **Jest**: 29.6.3

---

## Project Structure

```
pingParentFrontend/
├── src/
│   ├── components/          # Component library (atomic design)
│   │   ├── atoms/           # Base components (Box, Text, Button, Logo, Input, etc.)
│   │   ├── molecules/       # Composite components (ErrorToast)
│   │   ├── organisms/       # Complex components (ErrorBoundary)
│   │   ├── templates/       # Page-level layouts
│   │   └── index.ts         # Barrel exports
│   │
│   ├── pages/               # Application pages (Atomic Design)
│   │   ├── login/
│   │   │   ├── Login.tsx    # Page component
│   │   │   └── styles.ts    # Page styles (makeStyles factory)
│   │   ├── splash/
│   │   └── home/
│   │
│   ├── navigation/          # React Navigation setup
│   │   ├── AppNavigator.tsx
│   │   └── index.ts
│   │
│   ├── store/               # Redux store (organized by feature)
│   │   ├── auth/            # Auth feature module
│   │   │   ├── slice.ts     # Redux slice
│   │   │   ├── actions.ts   # Action creators
│   │   │   ├── reducer.ts   # Reducer
│   │   │   ├── types.ts     # TypeScript types
│   │   │   ├── selectors.ts # Selector functions
│   │   │   └── index.ts     # Barrel exports
│   │   ├── user/            # User feature module
│   │   ├── app/             # App feature module
│   │   ├── store.ts         # Store configuration
│   │   └── index.ts         # Root exports with namespaced actions
│   │
│   ├── services/            # API services
│   │   ├── api.ts           # Axios instance
│   │   ├── auth.ts          # Auth service
│   │   └── index.ts
│   │
│   ├── theme/               # Design system
│   │   ├── tokens.ts        # Design tokens
│   │   ├── ThemeProvider.tsx # Theme context
│   │   └── index.ts
│   │
│   ├── locales/             # Internationalization
│   │   ├── en.json          # English translations
│   │   └── index.ts         # Translation helper (t() function)
│   │
│   ├── schemas/             # Form validation schemas
│   │   ├── auth.schema.ts   # Auth-related schemas (Login, Register)
│   │   └── index.ts         # Barrel exports
│   │
│   ├── constants/           # App constants
│   │   ├── components.ts    # Component sizes, etc.
│   │   └── index.ts         # Barrel exports
│   │
│   ├── config/              # Configuration
│   │   ├── env.dev.ts       # Dev environment
│   │   └── index.ts
│   │
│   ├── hooks/               # Custom React hooks
│   ├── utils/               # Utility functions
│   │   ├── storage.ts       # AsyncStorage utilities
│   │   └── index.ts         # Barrel exports
│   ├── types/               # TypeScript types
│   ├── styles/              # Global styles
│   │
│   └── stories/             # Storybook stories (mirrors components/)
│       ├── atoms/
│       ├── molecules/
│       ├── organisms/
│       └── templates/
│
├── assets/                  # Static assets (images, fonts)
├── android/                 # Android native code
├── ios/                     # iOS native code
├── storybook/               # Storybook configuration
└── __tests__/               # Test files
```

---

## Design System

### Theme Tokens (`src/theme/tokens.ts`)

All design decisions are centralized in tokens:

```typescript
export const tokens = {
  colors: {
    primary: '#007AFF',
    background: '#ffffff',
    surface: '#f5f5f5',
    text: {
      primary: '#000000',
      muted: '#666666',
      error: '#dc2626',
      placeholder: '#999999',
    },
    border: '#e0e0e0',
    success: '#22c55e',
    warning: '#f59e0b',
    splash: {
      background: '#0b1220',
      text: '#ffffff',
      version: '#94a3b8',
    },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  radii: {
    sm: 4,
    md: 8,
    lg: 12,
  },
  fonts: {
    regular: 'System',
    medium: 'System',
    bold: 'System',
  },
  fontSizes: {
    sm: 12,
    md: 14,
    lg: 16,
    xl: 20,
    xxl: 24,
  },
} as const;
```

### Theme Usage

```typescript
import { useTheme } from '@theme/ThemeProvider';

function MyComponent() {
  const theme = useTheme();

  return (
    <View
      style={{
        padding: theme.spacing.md,
        backgroundColor: theme.colors.surface,
      }}
    >
      <Text style={{ color: theme.colors.text.primary }}>Hello World</Text>
    </View>
  );
}
```

---

## Component Architecture

### Atomic Design Hierarchy

**Atoms** (`src/components/atoms/`)

- Most basic building blocks that can't be broken down further
- Simple, single-purpose components
- Examples: `Box`, `Text`, `Button`, `Logo`, `LoadingSpinner`, `Input`, `PasswordInput`
- **When to use**: Reusable UI elements with minimal or no complex logic

**Molecules** (`src/components/molecules/`)

- Combination of atoms/primitives
- Handle specific UI patterns
- Examples: `ErrorToast` (text + button + styling)
- **When to use**: Related elements that work together

**Organisms** (`src/components/organisms/`)

- Complex, feature-rich components
- May contain business logic
- Examples: `ErrorBoundary`, form sections
- **When to use**: Distinct sections of UI with multiple responsibilities

### Component File Organization

**Standard Structure:**

Each component follows a consistent file structure:

```
ComponentName/
├── ComponentName.tsx    # Main component logic
├── types.ts             # TypeScript interfaces/types
├── styles.ts            # StyleSheet with makeStyles factory
├── utils.ts             # Helper functions (optional)
├── countries.ts         # Data/constants (optional)
└── index.ts             # Barrel export
```

**Benefits:**

- **Separation of Concerns**: Logic, types, and styles are separated
- **Maintainability**: Easy to find and update specific aspects
- **Reusability**: Types and utilities can be shared
- **Consistency**: Same structure across all components
- **Scalability**: Easy to add new files (utils, hooks, etc.)

### Component Template

**ComponentName.tsx:**

```typescript
import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '@theme/ThemeProvider';
import type { MyComponentProps } from './types';
import { makeStyles } from './styles';

export default function MyComponent({
  variant = 'primary',
  size = 'medium',
  disabled = false,
}: MyComponentProps) {
  const theme = useTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Content</Text>
    </View>
  );
}
```

**types.ts:**

```typescript
import { ViewStyle } from 'react-native';

export interface MyComponentProps {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  containerStyle?: ViewStyle;
}
```

**styles.ts:**

```typescript
import { StyleSheet } from 'react-native';
import type { Tokens } from '@theme/tokens';

export const makeStyles = (theme: Tokens) =>
  StyleSheet.create({
    container: {
      padding: theme.spacing.md,
      borderRadius: theme.radii.md,
    },
    text: {
      fontSize: theme.fontSizes.md,
      color: theme.colors.text.primary,
    },
  });
```

**index.ts:**

```typescript
export { default as MyComponent } from './MyComponent';
export type { MyComponentProps } from './types';
// Export utilities if any
```

### Type Organization Best Practices

**✅ DO:**

- **Move interfaces to `types.ts`** - Keep component file focused on logic
- **Export types** from index.ts for external use
- **Use descriptive names** - ComponentNameProps, not just Props
- **Define all prop types** - Avoid `any` or implicit types
- **Use ViewStyle/TextStyle** for style props

```typescript
// ✅ Good - types.ts
export interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  containerStyle?: ViewStyle;
  testID?: string;
}

// ✅ Good - Component.tsx
import type { ButtonProps } from './types';

export default function Button(props: ButtonProps) {
  // ...
}
```

**❌ DON'T:**

```typescript
// ❌ Bad - Inline types in component
export default function Button({
  title,
  onPress,
  variant,
}: {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
}) {
  // ...
}

// ❌ Bad - Using 'any'
export default function Button(props: any) {
  // ...
}
```

### Form Components

The app includes reusable form input components that follow atomic design principles.

**Input Component** (`src/components/atoms/Input/`)

- Generic text input with built-in error display
- Supports all keyboard types (email, phone, numeric, etc.)
- Built-in validation state styling
- Theme-aware

**Usage:**

```typescript
import { Input } from '@components';

function MyForm() {
  return (
    <Input
      value={value}
      onChangeText={setValue}
      placeholder="Email address"
      keyboardType="email-address"
      error={error}
      touched={touched}
    />
  );
}
```

**PasswordInput Component** (`src/components/atoms/PasswordInput/`)

- Password-specific input with show/hide toggle
- Built-in eye icon functionality
- Error display included
- Customizable toggle labels

**Usage:**

```typescript
import { PasswordInput } from '@components';

function MyForm() {
  return (
    <PasswordInput
      value={password}
      onChangeText={setPassword}
      placeholder="Password"
      error={error}
      touched={touched}
    />
  );
}
```

**Benefits:**

- Consistent styling across all forms
- Built-in error handling and display
- Reduced code duplication
- Theme-aware styling
- Reusable in any form or screen

---

## Path Aliases

Clean imports using `@` prefixes instead of relative paths.

### Available Aliases

| Alias         | Path             | Usage                   |
| ------------- | ---------------- | ----------------------- |
| `@components` | `src/components` | UI components           |
| `@pages`      | `src/pages`      | Page components         |
| `@store`      | `src/store`      | Redux store             |
| `@services`   | `src/services`   | API services            |
| `@theme`      | `src/theme`      | Theme system            |
| `@navigation` | `src/navigation` | Navigation setup        |
| `@hooks`      | `src/hooks`      | Custom hooks            |
| `@utils`      | `src/utils`      | Utilities               |
| `@types`      | `src/types`      | TypeScript types        |
| `@config`     | `src/config`     | Configuration           |
| `@constants`  | `src/constants`  | Constants               |
| `@styles`     | `src/styles`     | Global styles           |
| `@locales`    | `src/locales`    | Translations (i18n)     |
| `@schemas`    | `src/schemas`    | Form validation schemas |

### Examples

```typescript
// ❌ Before
import { Button } from '../../components/atoms/Button';
import { useTheme } from '../../theme/ThemeProvider';
import { login } from '../../services/auth';

// ✅ After
import { Button } from '@components';
import { useTheme } from '@theme/ThemeProvider';
import { login } from '@services/auth';
```

### Configuration

Path aliases are configured in:

1. **`tsconfig.json`** - TypeScript resolution
2. **`babel.config.js`** - Runtime module resolution (requires `babel-plugin-module-resolver`)

---

## Styling Patterns

### Pattern 1: Inline Styles with Theme

For simple components:

```typescript
function SimpleComponent() {
  const theme = useTheme();

  return (
    <View
      style={{
        padding: theme.spacing.md,
        backgroundColor: theme.colors.surface,
      }}
    >
      <Text style={{ color: theme.colors.text.primary }}>Content</Text>
    </View>
  );
}
```

### Pattern 2: StyleSheet with Theme

For components with multiple styles:

```typescript
function Component() {
  const theme = useTheme();
  const styles = makeStyles(theme);

  return <View style={styles.container} />;
}

function makeStyles(theme: Tokens) {
  return StyleSheet.create({
    container: {
      padding: theme.spacing.md,
      backgroundColor: theme.colors.surface,
    },
    text: {
      color: theme.colors.text.primary,
      fontSize: theme.fontSizes.md,
    },
  });
}
```

### Pattern 3: Colocated Styles File (Screens)

For pages with complex styling:

```
src/pages/login/
├── Login.tsx
└── styles.ts       # Export makeStyles factory
```

**Login.tsx:**

```typescript
import { useTheme } from '@theme/ThemeProvider';
import makeStyles from './styles';

export default function Login() {
  const theme = useTheme();
  const styles = makeStyles(theme);

  return <View style={styles.container} />;
}
```

**styles.ts:**

```typescript
import { StyleSheet } from 'react-native';
import type { Tokens } from '@theme/tokens';

export default function makeStyles(theme: Tokens) {
  return StyleSheet.create({
    container: {
      flex: 1,
      padding: theme.spacing.lg,
      backgroundColor: theme.colors.background,
    },
    // ... more styles
  });
}
```

---

## Internationalization (i18n)

### Translation System

The app uses a custom translation system with JSON-based language files.

**Structure:**

```
src/locales/
├── en.json      # English translations
├── index.ts     # t() helper function
└── [future: fr.json, es.json, etc.]
```

### Translation Keys Convention

- **CAPITAL_CASE** for all keys
- **Nested structure** by feature
- **Underscores** between words

**Example (`en.json`):**

```json
{
  "LOGIN": {
    "TITLE": "Welcome Back",
    "EMAIL_OR_PHONE_PLACEHOLDER": "Email or Phone Number",
    "PASSWORD_PLACEHOLDER": "Password",
    "LOGIN_BUTTON": "Login",
    "VALIDATIONS": {
      "EMAIL_OR_PHONE_REQUIRED": "Email or phone is required",
      "PASSWORD_REQUIRED": "Password is required",
      "PASSWORD_MIN_LENGTH": "Password must be at least 6 characters"
    }
  },
  "COMMON": {
    "LOADING": "Loading...",
    "ERROR": "Error",
    "SUCCESS": "Success"
  }
}
```

### Using Translations

```typescript
import { t } from '@locales';

function MyComponent() {
  return (
    <View>
      <Text>{t('LOGIN.TITLE')}</Text>
      <TextInput placeholder={t('LOGIN.EMAIL_OR_PHONE_PLACEHOLDER')} />
      <Button title={t('LOGIN.LOGIN_BUTTON')} />
    </View>
  );
}
```

### String Management Best Practices

**✅ DO - Move all user-facing strings to locales:**

```typescript
// ✅ Good - en.json
{
  "REGISTER": {
    "TITLE": "Create Account",
    "SUBTITLE": "Sign up to get started",
    "FIRST_NAME_PLACEHOLDER": "First Name",
    "LAST_NAME_PLACEHOLDER": "Last Name",
    "SUCCESS_TITLE": "Registration Successful",
    "SUCCESS_MESSAGE": "Your account has been created successfully!",
    "VALIDATIONS": {
      "FIRST_NAME_REQUIRED": "First name is required",
      "EMAIL_INVALID": "Please enter a valid email address"
    }
  }
}

// ✅ Good - Component using translations
import { t } from '@locales';

function Register() {
  return (
    <>
      <Text>{t('REGISTER.TITLE')}</Text>
      <Input placeholder={t('REGISTER.FIRST_NAME_PLACEHOLDER')} />
    </>
  );
}
```

**❌ DON'T - Hardcode strings in components:**

```typescript
// ❌ Bad - Hardcoded strings
function Register() {
  return (
    <>
      <Text>Create Account</Text>
      <Input placeholder="First Name" />
      <Text>Your account has been created successfully!</Text>
    </>
  );
}
```

**Benefits:**

- **Easier to translate** - All strings in one place
- **Consistency** - Same terminology across app
- **Maintainability** - Update strings without touching components
- **Future-proof** - Ready for multi-language support

**When to use translations:**

- ✅ Button labels
- ✅ Page titles and subtitles
- ✅ Input placeholders
- ✅ Error messages
- ✅ Success/info messages
- ✅ Validation messages
- ✅ Navigation labels
- ❌ Developer console logs
- ❌ TestIDs or keys
- ❌ API endpoints

### Type-Safe Translation Helper

The `t()` function provides nested key support:

```typescript
// src/locales/index.ts
export function t(key: string): string {
  const keys = key.split('.');
  let value: any = translations;
  for (const k of keys) {
    value = value?.[k];
  }
  return typeof value === 'string' ? value : key;
}
```

### Adding New Languages

1. Create new JSON file: `src/locales/fr.json`
2. Copy structure from `en.json`
3. Translate all values
4. Update `locales/index.ts` to load based on device language

```typescript
import { Platform, NativeModules } from 'react-native';
import en from './en.json';
import fr from './fr.json';

const deviceLanguage =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0]
    : NativeModules.I18nManager.localeIdentifier;

const translations = deviceLanguage.startsWith('fr') ? fr : en;
```

---

## Form Validation

### Centralized Schemas

All form validation schemas are stored in `src/schemas/` using Yup.

**Structure:**

```
src/schemas/
├── auth.schema.ts    # Login, Register, ForgotPassword
├── profile.schema.ts # User profile forms
└── index.ts          # Barrel exports
```

### Schema Example

```typescript
// src/schemas/auth.schema.ts
import * as Yup from 'yup';
import { t } from '@locales';

export const LoginSchema = Yup.object().shape({
  emailOrPhone: Yup.string()
    .required(t('LOGIN.VALIDATIONS.EMAIL_OR_PHONE_REQUIRED'))
    .test(
      'email-or-phone',
      t('LOGIN.VALIDATIONS.EMAIL_OR_PHONE_INVALID'),
      value => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9+\-() ]{6,20}$/;
        return emailRegex.test(value) || phoneRegex.test(value);
      },
    ),
  password: Yup.string()
    .required(t('LOGIN.VALIDATIONS.PASSWORD_REQUIRED'))
    .min(6, t('LOGIN.VALIDATIONS.PASSWORD_MIN_LENGTH')),
});

export const RegisterSchema = Yup.object().shape({
  // ... register fields
});
```

### Using Schemas

```typescript
import { Formik } from 'formik';
import { LoginSchema } from '@schemas';

function LoginScreen() {
  return (
    <Formik
      initialValues={{ emailOrPhone: '', password: '' }}
      validationSchema={LoginSchema}
      onSubmit={handleLogin}
    >
      {({ handleChange, values, errors }) => (
        // ... form fields
      )}
    </Formik>
  );
}
```

---

## Redux Store Organization

### Feature-Based Structure

Redux store is organized by feature modules with separate concerns:

**Structure:**

```
src/store/
├── auth/
│   ├── slice.ts      # createSlice with reducers
│   ├── actions.ts    # Exported action creators
│   ├── reducer.ts    # Exported reducer
│   ├── types.ts      # State and payload types
│   ├── selectors.ts  # Memoized selectors
│   └── index.ts      # Barrel exports
├── user/
│   └── [same structure]
├── app/
│   └── [same structure]
├── store.ts          # configureStore
└── index.ts          # Namespaced exports
```

### Namespaced Actions

To avoid action name conflicts, actions are exported with namespaces:

```typescript
// src/store/index.ts
export * as authActions from './auth/actions';
export * as userActions from './user/actions';
export * as appActions from './app/actions';
```

### Usage

```typescript
import { useDispatch } from 'react-redux';
import { authActions, userActions } from '@store';

function MyComponent() {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(authActions.setToken('abc123'));
    dispatch(userActions.setProfile({ name: 'John' }));
  };
}
```

### Selectors

```typescript
// src/store/auth/selectors.ts
import type { RootState } from '../store';

export const selectAuthToken = (state: RootState) => state.auth.token;
export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;

// Usage
import { useSelector } from 'react-redux';
import { selectAuthToken } from '@store/auth/selectors';

function MyComponent() {
  const token = useSelector(selectAuthToken);
}
```

---

## Development Workflow

### Storybook

Storybook is integrated for component development and documentation.

**Toggle Storybook:**

```typescript
// App.tsx
const SHOW_STORYBOOK = __DEV__ && false; // Change to true
```

**Story Structure:**

```
src/stories/
├── atoms/
│   ├── Button.stories.tsx
│   ├── Input.stories.tsx
│   ├── PasswordInput.stories.tsx
│   ├── Logo.stories.tsx
│   └── LoadingSpinner.stories.tsx
├── molecules/
│   └── ErrorToast.stories.tsx
└── organisms/
```

**Story Template:**

```typescript
import React from 'react';
import { View } from 'react-native';
import { MyComponent } from '@components';
import { ThemeProvider } from '@theme/ThemeProvider';

export default {
  title: 'Atoms/MyComponent',
  component: MyComponent,
};

export const Default = () => (
  <ThemeProvider>
    <View style={{ padding: 16 }}>
      <MyComponent />
    </View>
  </ThemeProvider>
);

export const WithProps = () => (
  <ThemeProvider>
    <View style={{ padding: 16 }}>
      <MyComponent variant="secondary" size="large" />
    </View>
  </ThemeProvider>
);
```

### Running the App

```bash
# Install dependencies
npm install

# Android
npm run android

# iOS
npm run ios

# Start Metro bundler
npm start
```

### Platform-Specific Development

**Android Emulator API Configuration:**

```typescript
// src/config/env.dev.ts
export const API_BASE_URL = Platform.select({
  android: 'http://10.0.2.2:3000', // Android emulator
  ios: 'http://localhost:3000', // iOS simulator
  default: 'http://localhost:3000',
});
```

---

## Utility Functions

### Storage Utilities (`src/utils/storage.ts`)

Centralized AsyncStorage operations with type-safe, consistent key management.

**Features:**

- Centralized storage keys constant
- Type-safe wrapper functions
- Built-in error handling
- Specialized utilities for auth, user data, and preferences

**Storage Keys:**

```typescript
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'auth_token',
  REMEMBER_ME: 'remember_me',
  USER_DATA: 'user_data',
  THEME_PREFERENCE: 'theme_preference',
  LANGUAGE: 'language',
} as const;
```

**Generic Functions:**

```typescript
import { setStorageItem, getStorageItem, removeStorageItem } from '@utils';

// Set item
await setStorageItem('my_key', 'my_value');

// Get item
const value = await getStorageItem('my_key');

// Remove item
await removeStorageItem('my_key');

// Clear all storage
await clearStorage();

// Multi-operations
await setMultipleStorageItems([
  ['key1', 'value1'],
  ['key2', 'value2'],
]);
```

**Auth Storage:**

```typescript
import { authStorage } from '@utils';

// Set/get/remove token
await authStorage.setToken(token);
const token = await authStorage.getToken();
await authStorage.removeToken();

// Remember me
await authStorage.setRememberMe(true);
const rememberMe = await authStorage.getRememberMe();

// Clear all auth data
await authStorage.clearAuth();
```

**User Storage:**

```typescript
import { userStorage } from '@utils';

// Save user data
await userStorage.setUserData({ id: 1, name: 'John' });

// Get user data
const userData = await userStorage.getUserData();

// Remove user data
await userStorage.removeUserData();
```

**Preferences Storage:**

```typescript
import { preferencesStorage } from '@utils';

// Theme
await preferencesStorage.setTheme('dark');
const theme = await preferencesStorage.getTheme();

// Language
await preferencesStorage.setLanguage('en');
const language = await preferencesStorage.getLanguage();
```

**Benefits:**

- **Consistency**: Single source of truth for storage keys
- **Type Safety**: TypeScript support throughout
- **Error Handling**: Built-in try-catch blocks with logging
- **Maintainability**: Easy to extend with new storage operations
- **Developer Experience**: Clean, intuitive API

**Usage Example:**

```typescript
// ✅ Good - Using storage utilities
import { authStorage } from '@utils';

async function handleLogin(token: string, rememberMe: boolean) {
  await authStorage.setToken(token);
  if (rememberMe) await authStorage.setRememberMe(true);
}

// ❌ Bad - Direct AsyncStorage usage
import AsyncStorage from '@react-native-async-storage/async-storage';

async function handleLogin(token: string, rememberMe: boolean) {
  await AsyncStorage.setItem('auth_token', token);
  if (rememberMe) await AsyncStorage.setItem('remember_me', '1');
}
```

---

## Best Practices

### ✅ DO

- **Use path aliases** for all cross-directory imports (`@components`, `@utils`)
- **Move interfaces to `types.ts`** - Keep component files focused on logic
- **Move all user-facing strings to `locales/en.json`** - Never hardcode text
- **Use `t()` function** for all displayed text (labels, placeholders, messages)
- **Extract constants** for magic numbers (sizes, durations) to `@constants`
- **Colocate screen styles** in separate `styles.ts` files with makeStyles
- **Use theme tokens** instead of hardcoded colors/spacing
- **Create stories** for all reusable components
- **Follow atomic design** hierarchy when creating components
- **Type all props** with TypeScript interfaces/types (avoid `any`)
- **Use barrel exports** (`index.ts`) for clean imports
- **Add accessibility labels** to interactive elements
- **Test on both platforms** (iOS + Android)
- **Export types** from component index.ts for external use

### ❌ DON'T

- **Don't use relative imports** like `../../components` (use `@components`)
- **Don't define types inline** in component files (use `types.ts`)
- **Don't hardcode strings** in components (use `t('KEY')` from locales)
- **Don't hardcode colors/spacing** (use tokens from theme)
- **Don't create inline styles** for complex screens (use `styles.ts`)
- **Don't skip TypeScript types** (`any` should be minimal)
- **Don't nest components** more than necessary
- **Don't forget to update stories** when changing components
- **Don't use `localhost`** for Android emulator (use `10.0.2.2`)
- **Don't commit** sensitive data in config files
- **Don't mix logic and types** in the same file

### Naming Conventions

**Files:**

- Components: `PascalCase.tsx` (e.g., `Login.tsx`, `Button.tsx`)
- Styles: `camelCase.ts` (e.g., `styles.ts`, `makeStyles.ts`)
- Services: `camelCase.ts` (e.g., `auth.ts`, `api.ts`)
- Constants: `SCREAMING_SNAKE_CASE` (e.g., `SPINNER_SIZES`)

**Components:**

- Remove "Screen" suffix: `Login.tsx` (not `LoginScreen.tsx`)
- Remove "Component" suffix: `Button.tsx` (not `ButtonComponent.tsx`)

**Exports:**

- Use default export for main component
- Use named exports for utilities/types

### TypeScript

```typescript
// ✅ Good
type Props = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
};

export default function Button({ title, onPress, disabled = false }: Props) {
  // ...
}

// ❌ Bad
export default function Button({ title, onPress, disabled }: any) {
  // ...
}
```

### Component Constants

```typescript
// src/constants/index.ts
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

// Usage in component
import { SPINNER_SIZES } from '@constants';

function MyComponent() {
  return <LoadingSpinner size={SPINNER_SIZES.large} />;
}
```

---

## Adding New Features

### New Component Checklist

1. **Determine atomic level** (atom/molecule/organism/template)
2. **Create component folder** with standardized structure:
   ```
   ComponentName/
   ├── ComponentName.tsx    # Main component
   ├── types.ts             # TypeScript interfaces
   ├── styles.ts            # makeStyles factory
   ├── utils.ts             # Helper functions (optional)
   └── index.ts             # Barrel exports
   ```
3. **Move all interfaces to `types.ts`** - Keep component file clean
4. **Define TypeScript types** for all props (no `any`)
5. **Add user-facing strings to `locales/en.json`** - Don't hardcode text
6. **Use theme tokens** for all styling
7. **Export from `index.ts`** - Component and types
8. **Add to parent barrel export** (`components/index.ts`)
9. **Create story file** in matching `stories/` folder
10. **Update story loader** (`storybook/storybook.requires.ts`)
11. **Test in Storybook** (set `SHOW_STORYBOOK = true`)
12. **Test in actual app** with real data

**Example Workflow:**

```typescript
// 1. Create types.ts
export interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  error?: boolean;
}

// 2. Create styles.ts
export const makeStyles = (theme: Tokens) => StyleSheet.create({
  container: { flexDirection: 'row' },
  // ...
});

// 3. Add strings to en.json
{
  "CHECKBOX": {
    "ARIA_LABEL": "Checkbox",
    "CHECKED": "Checked",
    "UNCHECKED": "Unchecked"
  }
}

// 4. Create Checkbox.tsx
import type { CheckboxProps } from './types';
import { makeStyles } from './styles';
import { t } from '@locales';

export default function Checkbox(props: CheckboxProps) {
  const theme = useTheme();
  const styles = makeStyles(theme);
  // ...
}

// 5. Export from index.ts
export { default as Checkbox } from './Checkbox';
export type { CheckboxProps } from './types';

// 6. Add to components/index.ts
export * from './atoms/Checkbox';
```

### New Page Checklist

1. **Create page folder** (`src/pages/[name]/`)
2. **Create page component** (`[Name].tsx`)
3. **Create styles file** (`styles.ts` with `makeStyles`)
4. **Use path aliases** for imports
5. **Add to navigation** (`AppNavigator.tsx`)
6. **Add types** to navigation types
7. **Test navigation flow**

---

## Troubleshooting

### Common Issues

**Path aliases not working:**

- Install `babel-plugin-module-resolver`: `npm install -D babel-plugin-module-resolver`
- Restart Metro bundler: `npm start -- --reset-cache`

**Storybook not loading:**

- Check `storybook/storybook.requires.ts` has all story imports
- Toggle `SHOW_STORYBOOK` to `true` in `App.tsx`
- Reload app (shake device → Reload)

**Android API not connecting:**

- Use `10.0.2.2` instead of `localhost` in `env.dev.ts`
- Check backend is running on correct port

**TypeScript errors after adding aliases:**

- Verify `tsconfig.json` has correct `paths` mapping
- Restart TypeScript server in VS Code

---

## Future Enhancements

### Planned Improvements

- [ ] **CI/CD Pipeline** - GitHub Actions for automated testing
- [ ] **Visual Regression Testing** - Chromatic/Percy integration
- [ ] **Component Documentation** - Auto-generate from Storybook
- [ ] **E2E Testing** - Detox or Maestro setup
- [ ] **Performance Monitoring** - React Native Performance
- [ ] **Dark Mode** - Extend theme system with dark tokens
- [x] **Internationalization** - i18n with JSON translations and t() helper
- [ ] **Multi-Language Support** - Add more language files (fr.json, es.json)
- [ ] **Accessibility Audit** - A11y compliance testing
- [ ] **Language Switcher** - UI for changing app language

---

## Resources

- [React Native Docs](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Storybook for React Native](https://storybook.js.org/docs/react-native)
- [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)

---

**Last Updated:** December 18, 2025
**Maintainers:** Development Team
