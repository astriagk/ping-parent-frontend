import { StyleSheet } from 'react-native';
import type { Tokens } from '@theme/tokens';

export const makeStyles = (theme: Tokens) => {
  return StyleSheet.create({
    container: {
      width: '100%',
      marginBottom: theme.spacing.sm,
    },
    input: {
      borderWidth: 1,
      borderColor: theme.colors.border,
      borderRadius: theme.radii.md,
      padding: theme.spacing.md,
      fontSize: theme.fontSizes.md,
      color: theme.colors.text.primary,
      backgroundColor: theme.colors.background,
    },
    inputError: {
      borderColor: theme.colors.text.error,
    },
    inputDisabled: {
      backgroundColor: theme.colors.surface,
      opacity: 0.6,
    },
    errorText: {
      color: theme.colors.text.error,
      fontSize: theme.fontSizes.sm,
      marginTop: theme.spacing.xs,
      marginLeft: theme.spacing.xs,
    },
  });
};
