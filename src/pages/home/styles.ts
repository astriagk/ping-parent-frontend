import { StyleSheet, Platform, StatusBar } from 'react-native';

export function makeStyles(theme: any) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    statusBarSpacer: {
      height: Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0,
      backgroundColor: theme.colors.background,
    },
    content: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.background,
    },
    title: {
      fontSize: theme.fontSizes.lg || 18,
      color: theme.colors.text.primary,
    },
  });
}

export default makeStyles;
