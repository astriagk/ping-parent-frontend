import { StyleSheet } from 'react-native';

export function makeStyles(theme: any) {
  return StyleSheet.create({
    flex: { flex: 1 },
    container: {
      // Remove styles - handled by AuthFormLayout
    },
    inner: {
      // Remove styles - handled by AuthFormLayout
    },
    title: {
      fontSize: theme.fontSizes.xxl || 28,
      fontWeight: 'bold',
      marginBottom: theme.spacing.xl || 32,
      color: theme.colors.text.primary,
      textAlign: 'center',
    },
    rowBetween: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: theme.spacing.sm || 8,
      marginBottom: theme.spacing.md || 16,
    },
    rememberRow: { flexDirection: 'row', alignItems: 'center' },
    checkbox: {
      width: 20,
      height: 20,
      borderWidth: 1,
      borderRadius: 4,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: theme.spacing.sm || 8,
    },
    checkboxBorder: { borderColor: theme.colors.border || '#ccc' },
    checkboxChecked: { backgroundColor: theme.colors.primary },
    checkboxCheck: { color: '#fff' },
    rememberText: { color: theme.colors.text.muted || '#333' },
    link: { color: theme.colors.primary },
    button: {
      backgroundColor: theme.colors.primary,
      padding: theme.spacing.md || 14,
      borderRadius: theme.radii.md || 8,
      alignItems: 'center',
      marginTop: theme.spacing.md || 12,
    },
    buttonDisabled: {
      backgroundColor: theme.colors.primary,
      padding: theme.spacing.md || 14,
      borderRadius: theme.radii.md || 8,
      alignItems: 'center',
      marginTop: theme.spacing.md || 12,
      opacity: 0.6,
    },
    buttonSubmitting: {
      backgroundColor: theme.colors.primary,
      padding: theme.spacing.md || 14,
      borderRadius: theme.radii.md || 8,
      alignItems: 'center',
      marginTop: theme.spacing.md || 12,
      opacity: 0.8,
    },
    buttonText: { color: '#fff', fontWeight: '600' },
    registerRow: {
      flexDirection: 'row',
      marginTop: theme.spacing.xl || 20,
      alignItems: 'center',
    },
    mutedText: { color: theme.colors.text.muted },
    registerLink: {
      color: theme.colors.primary,
      marginLeft: theme.spacing.sm || 8,
    },
    fullWidth: { width: '100%' },
    error: {
      color: theme.colors.text.error || '#FF3B30',
      marginBottom: theme.spacing.md || 12,
      fontSize: theme.fontSizes.sm || 12,
      textAlign: 'center',
    },
    // OTP specific styles
    otpDescription: {
      fontSize: theme.fontSizes.md || 14,
      color: theme.colors.text.muted || '#666',
      textAlign: 'center',
      marginBottom: theme.spacing.lg || 24,
    },
    otpActions: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: theme.spacing.md || 16,
    },
    devOTPContainer: {
      backgroundColor: '#fff3cd',
      padding: theme.spacing.md || 12,
      borderRadius: theme.radii.md || 8,
      marginBottom: theme.spacing.md || 16,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 8,
    },
    devOTPLabel: {
      fontSize: theme.fontSizes.sm || 12,
      color: '#856404',
      fontWeight: '600',
    },
    devOTPText: {
      fontSize: theme.fontSizes.lg || 16,
      color: '#856404',
      fontWeight: 'bold',
      letterSpacing: 2,
    },
  });
}

export default makeStyles;
