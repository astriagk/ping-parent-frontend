import { StyleSheet } from 'react-native';
import type { Tokens } from '@theme/tokens';

export const makeStyles = (theme: Tokens) => {
  return StyleSheet.create({
    container: {
      width: '100%',
      marginBottom: theme.spacing.sm,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: theme.colors.border,
      borderRadius: theme.radii.md,
      backgroundColor: theme.colors.background,
    },
    inputContainerError: {
      borderColor: theme.colors.text.error,
    },
    inputContainerDisabled: {
      backgroundColor: theme.colors.surface,
      opacity: 0.6,
    },
    input: {
      flex: 1,
      padding: theme.spacing.md,
      fontSize: theme.fontSizes.md,
      color: theme.colors.text.primary,
    },
    eyeButton: {
      padding: theme.spacing.md,
    },
    eyeText: {
      fontSize: 18,
    },
    errorText: {
      color: theme.colors.text.error,
      fontSize: theme.fontSizes.sm,
      marginTop: theme.spacing.xs,
      marginLeft: theme.spacing.xs,
    },
  });
};
