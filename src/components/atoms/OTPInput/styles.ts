import { StyleSheet } from 'react-native';
import tokens from '@theme/tokens';

type Theme = typeof tokens;

export const makeStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      width: '100%',
      marginBottom: theme.spacing.md,
    },
    inputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: theme.spacing.sm,
    },
    digitBox: {
      flex: 1,
      height: 56,
      borderWidth: 1,
      borderColor: theme.colors.border,
      borderRadius: theme.radii.md,
      backgroundColor: theme.colors.background,
      alignItems: 'center',
      justifyContent: 'center',
    },
    digitBoxFocused: {
      borderColor: theme.colors.primary,
      borderWidth: 2,
    },
    digitBoxError: {
      borderColor: theme.colors.text.error,
    },
    digitBoxDisabled: {
      backgroundColor: theme.colors.surface,
      opacity: 0.6,
    },
    digitText: {
      fontSize: 24,
      fontWeight: '600',
      color: theme.colors.text.primary,
    },
    digitTextPlaceholder: {
      color: theme.colors.text.placeholder,
    },
    hiddenInput: {
      position: 'absolute',
      width: 0,
      height: 0,
      opacity: 0,
    },
    errorContainer: {
      marginTop: theme.spacing.xs,
      paddingHorizontal: theme.spacing.xs,
    },
    errorText: {
      fontSize: theme.fontSizes.sm,
      color: theme.colors.text.error,
    },
  });
