import { StyleSheet } from 'react-native';

export function makeStyles(theme: any) {
  return StyleSheet.create({
    flex: { flex: 1 },
    container: {
      flexGrow: 1,
      justifyContent: 'center',
      paddingHorizontal: theme.spacing.lg || 20,
      backgroundColor: theme.colors.background || '#fff',
    },
    inner: { alignItems: 'center', width: '100%' },
    title: {
      fontSize: theme.fontSizes.xl || 24,
      marginBottom: theme.spacing.lg || 24,
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
    },
  });
}

export default makeStyles;
