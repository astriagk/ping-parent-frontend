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

- `npm run lint` - Run linter
- `npm run type-check` - Check TypeScript types

## License

Private
