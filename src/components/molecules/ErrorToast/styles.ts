import { StyleSheet } from 'react-native';
import type { Tokens } from '@types';

export function makeStyles(theme: Tokens) {
  return StyleSheet.create({
    container: {
      position: 'absolute',
      top: 40,
      left: theme.spacing.lg,
      right: theme.spacing.lg,
      backgroundColor: theme.colors.text.error,
      padding: theme.spacing.md,
      borderRadius: theme.radii.md,
      flexDirection: 'row',
      alignItems: 'center',
    },
    text: {
      color: '#fff',
      flex: 1,
      fontSize: theme.fontSizes.md,
    },
    close: {
      marginLeft: theme.spacing.sm,
    },
    closeText: {
      color: '#fff',
      fontWeight: '700',
      fontSize: theme.fontSizes.lg,
    },
  });
}
