# Ping Parent Frontend

A modern React Native mobile application built with TypeScript, following Atomic Design principles and industry best practices.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- React Native development environment set up ([Guide](https://reactnative.dev/docs/set-up-your-environment))
- Android Studio (for Android) or Xcode (for iOS)
- JDK 17+ (for Android)

### Installation

```bash
# Install dependencies
npm install

# Start Metro bundler
npm start

# Run on Android
npm run android

# Run on iOS
npm run ios
```

## 📱 Features

- 🎨 **Atomic Design** - Scalable component architecture (Atoms → Molecules → Organisms → Templates → Pages)
- 🎭 **Theme System** - Token-based design system with centralized styling
- 🔐 **Authentication** - Complete auth flow with AsyncStorage
- 📦 **State Management** - Redux Toolkit with typed actions and selectors
- 🌍 **Internationalization** - i18n support with translation keys
- ✅ **Form Validation** - Formik + Yup for type-safe forms
- 🔗 **Path Aliases** - Clean imports with `@components`, `@store`, etc.
- 📚 **Storybook** - Component development and documentation
- 🔧 **TypeScript** - Full type safety throughout the app

## 🏗️ Tech Stack

| Category       | Technologies                                  |
| -------------- | --------------------------------------------- |
| **Core**       | React Native 0.83, TypeScript 5.9, React 19.2 |
| **State**      | Redux Toolkit 2.11, React Redux 9.2           |
| **Navigation** | React Navigation 7.x (Native Stack)           |
| **Forms**      | Formik 2.4, Yup 1.2                           |
| **Storage**    | AsyncStorage 2.2                              |
| **API**        | Axios 1.13                                    |
| **Dev Tools**  | Storybook 10.1, ESLint, Prettier, Jest        |

## 📂 Project Structure

```
pingParentFrontend/
├── src/
│   ├── components/          # Atomic Design components
│   │   ├── atoms/          # Basic building blocks (Button, Input, Text, etc.)
│   │   ├── molecules/      # Simple combinations (ErrorToast)
│   │   ├── organisms/      # Complex components (ErrorBoundary)
│   │   └── templates/      # Page layouts (AuthFormLayout)
│   ├── pages/              # Application pages (Login, Home, Splash)
│   ├── navigation/         # Navigation configuration
│   ├── store/              # Redux store (auth, user, app)
│   ├── services/           # API services
│   ├── theme/              # Design tokens and theming
│   ├── utils/              # Utilities (storage, alerts)
│   ├── hooks/              # Custom React hooks
│   ├── schemas/            # Validation schemas
│   ├── locales/            # Translations
│   ├── types/              # TypeScript types
│   └── stories/            # Storybook stories
├── docs/                   # Documentation
└── ...
```

## 📖 Documentation

Comprehensive documentation is available in the [`docs/`](./docs) folder:

- **[ARCHITECTURE.md](./docs/ARCHITECTURE.md)** - Complete architecture guide, design system, conventions
- **[ATOMIC_DESIGN.md](./docs/ATOMIC_DESIGN.md)** - Atomic Design methodology explained
- **[SETUP_ANDROID.md](./docs/SETUP_ANDROID.md)** - Android-specific setup guide
- **[METRO_BUNDLER_GUIDE.md](./docs/METRO_BUNDLER_GUIDE.md)** - Metro bundler troubleshooting & startup guide
- **[MANUAL_COMMANDS.md](./docs/MANUAL_COMMANDS.md)** - Quick reference for manual CMD commands

### Quick Scripts

- **[start-metro.bat](./docs/start-metro.bat)** - Double-click to start Metro bundler
- **[run-android.bat](./docs/run-android.bat)** - Double-click to run Android app

## 🎨 Component Architecture

Following **Atomic Design** principles:

- **Atoms** - Basic UI elements (Button, Text, Input, Logo)
- **Molecules** - Simple component groups (ErrorToast)
- **Organisms** - Complex, reusable sections (ErrorBoundary)
- **Templates** - Page-level layouts (AuthFormLayout)
- **Pages** - Final pages with real content (Login, Home)

## 🔧 Development

### Path Aliases

Use clean imports instead of relative paths:

```typescript
// ✅ Good
import { Button } from '@components';
import { authStorage } from '@utils';
import { useTheme } from '@theme/ThemeProvider';

// ❌ Avoid
import { Button } from '../../components/atoms/Button';
```

### Available Aliases

`@components`, `@pages`, `@store`, `@services`, `@theme`, `@navigation`, `@utils`, `@hooks`, `@types`, `@config`, `@constants`, `@locales`, `@schemas`

### Storybook

Toggle Storybook mode in `App.tsx`:

```typescript
const ENABLE_STORYBOOK = true; // Set to true for component development
```

## 🔐 Environment Variables

Configure API endpoints in `src/config/`:

```typescript
// src/config/env.dev.ts
export const API_BASE_URL = Platform.select({
  android: 'http://10.0.2.2:3000',
  ios: 'http://localhost:3000',
});
```

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm test -- --coverage

# Lint code
npm run lint
```

## 🚢 Building for Production

### Android

```bash
# Generate release APK
cd android
./gradlew assembleRelease

# Find APK at: android/app/build/outputs/apk/release/app-release.apk
```

### iOS

```bash
# Build for release
npx react-native run-ios --configuration Release
```

## 📱 Troubleshooting

### Metro Bundler Issues

```bash
# Clear cache and restart
npm start -- --reset-cache
```

### Port 8081 Already in Use

```powershell
# Windows PowerShell
netstat -ano | findstr :8081
Stop-Process -Id <PID> -Force
```

### Android Build Issues

Ensure `JAVA_HOME` is set correctly:

```powershell
$env:JAVA_HOME = "C:\Program Files\Eclipse Adoptium\jdk-17.0.17.10-hotspot"
```

## 🤝 Contributing

1. Follow the coding conventions in [ARCHITECTURE.md](./docs/ARCHITECTURE.md)
2. Use TypeScript for all new code
3. Create Storybook stories for reusable components
4. Write tests for critical functionality
5. Update documentation as needed

## 📄 License

Private project - All rights reserved

## 👥 Team

- **Project**: Ping Parent Frontend
- **Version**: 0.0.1

---

For detailed documentation, see the [`docs/`](./docs) folder.
