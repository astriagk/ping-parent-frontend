import { StyleSheet } from 'react-native';
import type { Tokens } from '@theme/tokens';

export const makeStyles = (theme: Tokens) =>
  StyleSheet.create({
    container: {
      flexGrow: 1,
    },
    inner: {
      width: '100%',
    },
    formContainer: {
      width: '100%',
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: theme.colors.text.primary,
      marginBottom: theme.spacing.sm,
      textAlign: 'center',
    },
    subtitle: {
      fontSize: theme.fontSizes.lg,
      color: theme.colors.text.muted,
      marginBottom: theme.spacing.xl,
      textAlign: 'center',
    },
    submitButton: {
      backgroundColor: theme.colors.primary,
      borderRadius: theme.radii.md,
      paddingVertical: theme.spacing.md,
      marginTop: theme.spacing.lg,
      alignItems: 'center',
      justifyContent: 'center',
    },
    submitButtonDisabled: {
      opacity: 0.6,
    },
    submitButtonText: {
      color: '#ffffff',
      fontSize: theme.fontSizes.lg,
      fontWeight: '600',
    },
    skipButton: {
      paddingVertical: theme.spacing.md,
      marginTop: theme.spacing.md,
      alignItems: 'center',
    },
    skipButtonText: {
      color: theme.colors.text.muted,
      fontSize: theme.fontSizes.md,
      fontWeight: '500',
    },
    loginContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: theme.spacing.xl,
    },
    loginText: {
      fontSize: theme.fontSizes.md,
      color: theme.colors.text.muted,
    },
    loginLink: {
      fontSize: theme.fontSizes.md,
      color: theme.colors.primary,
      fontWeight: '600',
      marginLeft: theme.spacing.xs,
    },
    resendTimer: {
      fontSize: theme.fontSizes.sm,
      color: theme.colors.text.muted,
      textAlign: 'center',
      marginTop: theme.spacing.sm,
    },
    resendButton: {
      paddingVertical: theme.spacing.sm,
      alignItems: 'center',
      marginTop: theme.spacing.sm,
    },
    resendButtonText: {
      color: theme.colors.primary,
      fontSize: theme.fontSizes.md,
      fontWeight: '600',
    },
  });
