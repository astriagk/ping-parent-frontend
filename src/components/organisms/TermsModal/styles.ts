import { StyleSheet } from 'react-native';
import type { Tokens } from '@theme/tokens';

export const makeStyles = (theme: Tokens) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: theme.spacing.lg,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
    },
    title: {
      fontSize: 20,
      fontWeight: '600',
      color: theme.colors.text.primary,
    },
    closeButton: {
      fontSize: 28,
      color: theme.colors.text.muted,
      fontWeight: '300',
    },
    content: {
      flex: 1,
    },
    contentContainer: {
      padding: theme.spacing.lg,
    },
    sectionTitle: {
      fontSize: theme.fontSizes.lg,
      fontWeight: '600',
      color: theme.colors.text.primary,
      marginTop: theme.spacing.lg,
      marginBottom: theme.spacing.sm,
    },
    paragraph: {
      fontSize: theme.fontSizes.md,
      color: theme.colors.text.muted,
      lineHeight: 22,
      marginBottom: theme.spacing.md,
    },
    lastUpdated: {
      fontSize: theme.fontSizes.sm,
      color: theme.colors.text.muted,
      fontStyle: 'italic',
      marginTop: theme.spacing.lg,
      marginBottom: theme.spacing.xl,
    },
    footer: {
      padding: theme.spacing.lg,
      borderTopWidth: 1,
      borderTopColor: theme.colors.border,
    },
    acceptButton: {
      backgroundColor: theme.colors.primary,
      padding: theme.spacing.lg,
      borderRadius: theme.radii.md,
      alignItems: 'center',
    },
    acceptButtonText: {
      color: theme.colors.surface,
      fontSize: theme.fontSizes.lg,
      fontWeight: '600',
    },
  });
