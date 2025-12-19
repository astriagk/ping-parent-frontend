import { StyleSheet } from 'react-native';
import type { Tokens } from '@theme/tokens';

export const makeStyles = (theme: Tokens) =>
  StyleSheet.create({
    container: {
      position: 'absolute',
      bottom: 20,
      left: 20,
      right: 20,
      backgroundColor: theme.colors.success || '#4CAF50',
      borderRadius: theme.radii.md,
      padding: theme.spacing.md,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    text: {
      color: '#ffffff',
      fontSize: theme.fontSizes.md,
      flex: 1,
      fontWeight: '500',
    },
    close: {
      marginLeft: theme.spacing.sm,
      padding: theme.spacing.xs,
    },
    closeText: {
      color: '#ffffff',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
