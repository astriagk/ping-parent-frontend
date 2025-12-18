import { StyleSheet } from 'react-native';

export function makeStyles(theme: any) {
  return StyleSheet.create({
    container: {
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
