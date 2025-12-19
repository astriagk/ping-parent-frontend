import { StyleSheet } from 'react-native';

// Common container styles for stories
export const storyContainerStyles = StyleSheet.create({
  default: {
    padding: 16,
  },
  centered: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkBackground: {
    padding: 16,
    backgroundColor: '#0b1220',
    alignItems: 'center',
  },
  primaryBackground: {
    padding: 16,
    backgroundColor: '#007AFF',
    alignItems: 'center',
  },
  darkContainerBackground: {
    padding: 16,
    backgroundColor: '#333',
    alignItems: 'center',
  },
  withHeight: {
    padding: 16,
    height: 200,
  },
});

// Common inline styles as objects for reuse
export const inlineStyles = {
  default: { padding: 16 },
  centered: { padding: 16, alignItems: 'center' as const },
  darkBackground: {
    padding: 16,
    backgroundColor: '#0b1220',
    alignItems: 'center' as const,
  },
  primaryBackground: {
    padding: 16,
    backgroundColor: '#007AFF',
    alignItems: 'center' as const,
  },
  darkContainerBackground: {
    padding: 16,
    backgroundColor: '#333',
    alignItems: 'center' as const,
  },
  withHeight: { padding: 16, height: 200 },
};
