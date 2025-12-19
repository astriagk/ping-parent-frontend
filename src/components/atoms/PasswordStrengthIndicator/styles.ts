import { StyleSheet } from 'react-native';
import type { Tokens } from '@theme/tokens';

export const makeStyles = (theme: Tokens) =>
  StyleSheet.create({
    container: {
      marginTop: theme.spacing.sm,
    },
    barContainer: {
      marginBottom: theme.spacing.xs,
    },
    barBackground: {
      height: 4,
      backgroundColor: theme.colors.border,
      borderRadius: 2,
      overflow: 'hidden',
    },
    barFill: {
      height: '100%',
      borderRadius: 2,
    },
    label: {
      fontSize: theme.fontSizes.sm,
      fontWeight: '500',
      textAlign: 'right',
    },
  });
