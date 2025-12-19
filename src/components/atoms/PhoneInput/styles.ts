import { StyleSheet } from 'react-native';
import type { Tokens } from '@theme/tokens';

export const makeStyles = (theme: Tokens) =>
  StyleSheet.create({
    container: {
      marginBottom: theme.spacing.lg,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: theme.colors.border,
      borderRadius: theme.radii.md,
      backgroundColor: theme.colors.surface,
      height: 48,
    },
    inputContainerError: {
      borderColor: theme.colors.text.error,
    },
    countrySelector: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: theme.spacing.md,
      borderRightWidth: 1,
      borderRightColor: theme.colors.border,
      height: '100%',
    },
    flag: {
      fontSize: 20,
      marginRight: theme.spacing.xs,
    },
    dialCode: {
      fontSize: theme.fontSizes.md,
      color: theme.colors.text.primary,
      fontWeight: '500',
      marginRight: theme.spacing.xs,
    },
    arrow: {
      fontSize: 10,
      color: theme.colors.text.muted,
    },
    input: {
      flex: 1,
      paddingHorizontal: theme.spacing.md,
      fontSize: theme.fontSizes.lg,
      color: theme.colors.text.primary,
    },
    errorText: {
      color: theme.colors.text.error,
      fontSize: theme.fontSizes.sm,
      marginTop: theme.spacing.xs,
      marginLeft: theme.spacing.xs,
    },
    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'flex-end',
    },
    modalContent: {
      backgroundColor: theme.colors.surface,
      borderTopLeftRadius: theme.radii.lg,
      borderTopRightRadius: theme.radii.lg,
      maxHeight: '70%',
    },
    modalHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: theme.spacing.lg,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
    },
    modalTitle: {
      fontSize: theme.fontSizes.lg,
      fontWeight: '600',
      color: theme.colors.text.primary,
    },
    closeButton: {
      fontSize: 24,
      color: theme.colors.text.muted,
    },
    countryItem: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: theme.spacing.lg,
      borderBottomWidth: 1,
      borderBottomColor: '#F3F4F6',
    },
    countryFlag: {
      fontSize: 24,
      marginRight: theme.spacing.md,
    },
    countryName: {
      flex: 1,
      fontSize: theme.fontSizes.lg,
      color: theme.colors.text.primary,
    },
    countryDialCode: {
      fontSize: theme.fontSizes.md,
      color: theme.colors.text.muted,
    },
  });
