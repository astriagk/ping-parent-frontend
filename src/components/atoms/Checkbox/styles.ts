import { StyleSheet } from 'react-native';
import type { Tokens } from '@theme/tokens';

export const makeStyles = (theme: Tokens) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    checkbox: {
      width: 20,
      height: 20,
      borderWidth: 2,
      borderColor: theme.colors.border,
      borderRadius: theme.radii.sm,
      backgroundColor: theme.colors.surface,
      justifyContent: 'center',
      alignItems: 'center',
    },
    checkboxChecked: {
      backgroundColor: theme.colors.primary,
      borderColor: theme.colors.primary,
    },
    checkboxError: {
      borderColor: theme.colors.text.error,
    },
    checkboxDisabled: {
      backgroundColor: '#F3F4F6',
      borderColor: '#E5E7EB',
    },
    checkmark: {
      color: theme.colors.surface,
      fontSize: 14,
      fontWeight: 'bold',
      lineHeight: 14,
    },
    label: {
      marginLeft: theme.spacing.sm,
      fontSize: theme.fontSizes.md,
      color: theme.colors.text.primary,
    },
    labelDisabled: {
      color: theme.colors.text.muted,
    },
    labelError: {
      color: theme.colors.text.error,
    },
  });
