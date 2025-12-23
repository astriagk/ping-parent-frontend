# PP Frontend V2

React Native mobile application built with modern tech stack.

## Tech Stack

- **React Native** - Mobile framework
- **Expo** - Development platform
- **TypeScript** - Type safety
- **Gluestack UI** - Component library
- **NativeWind** - Tailwind for React Native
- **React Navigation** - Navigation
- **Zustand** - Global state management
- **React Query** - Server state management
- **React Hook Form** - Form management
- **Async Storage** - Local persistence
- **Axios** - HTTP client

## Project Structure

```
src/
├── api/              # API layer (React Query & Axios)
├── components/       # Reusable components
├── screens/          # Screen components
├── navigation/       # Navigation setup
├── store/            # Zustand stores
├── services/         # Business logic
├── hooks/            # Custom hooks
├── utils/            # Utilities
├── types/            # TypeScript types
└── config/           # Configuration
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm start
```

3. Run on platforms:

```bash
npm run ios       # iOS
npm run android   # Android
npm run web       # Web
```

## Environment Variables

Create a `.env` file:

```
EXPO_PUBLIC_API_URL=http://localhost:3000/api
EXPO_PUBLIC_ENV=development
```

## Development

### Code Quality

This project uses ESLint and Prettier to maintain code quality and consistency.

**Available Commands:**

```bash
# Linting
npm run lint              # Check for linting errors
npm run lint:fix          # Fix linting errors automatically

# Formatting
npm run format            # Format all files with Prettier
npm run format:check      # Check if files are formatted correctly

# Type Checking
npm run type-check        # Check TypeScript types
```

**Code Standards:**

- ✅ **ESLint**: Enforces code quality rules
- ✅ **Prettier**: Auto-formats code on save
- ⚠️ **No console statements**: Use proper logging (console warnings enabled)
- ✅ **TypeScript**: Strict type checking enabled

**VS Code Setup:**

- Install the Prettier extension (`esbenp.prettier-vscode`)
- Format on save is enabled automatically via `.vscode/settings.json`
- ESLint auto-fix on save is configured

**Git Hooks (Pre-commit):**

When you commit code, the pre-commit hook will automatically:

1. Run ESLint on staged files and fix issues
2. Run Prettier to format staged files
3. Block the commit if there are unfixable linting errors
4. Show clear error messages indicating what needs to be fixed

This ensures all committed code meets quality standards.

## Build for Android

See step-by-step instructions in [docs/BUILD_ANDROID.md](docs/BUILD_ANDROID.md).

## License

Private
