import { StyleSheet } from 'react-native';
import type { Tokens } from '@theme/tokens';

export const makeStyles = (theme: Tokens) =>
  StyleSheet.create({
    container: {
      marginTop: theme.spacing.md,
      padding: theme.spacing.md,
      backgroundColor: '#F9FAFB',
      borderRadius: theme.radii.md,
      borderWidth: 1,
      borderColor: theme.colors.border,
    },
    requirementRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: theme.spacing.xs,
    },
    checkmark: {
      fontSize: 14,
      color: theme.colors.text.muted,
      marginRight: theme.spacing.sm,
      width: 16,
    },
    checkmarkMet: {
      color: theme.colors.success,
    },
    requirementText: {
      fontSize: theme.fontSizes.sm,
      color: theme.colors.text.muted,
    },
    requirementMet: {
      color: theme.colors.text.primary,
    },
  });
