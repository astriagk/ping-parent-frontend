import { StyleSheet } from 'react-native';

export function makeStyles(theme: any) {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.splash.background,
    },
    center: { alignItems: 'center', justifyContent: 'center' },
    appName: {
      color: theme.colors.splash.text,
      marginTop: theme.spacing.lg || 16,
      fontSize: theme.fontSizes.lg || 18,
    },
    spacer: { height: theme.spacing.md || 12 },
    version: {
      position: 'absolute',
      bottom: theme.spacing.md || 12,
      color: theme.colors.splash.version,
      fontSize: theme.fontSizes.sm || 12,
    },
  });
}

export default makeStyles;
