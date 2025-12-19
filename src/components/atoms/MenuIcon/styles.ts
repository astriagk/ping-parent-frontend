import { StyleSheet } from 'react-native';
import type { Tokens } from '@theme/tokens';

export const makeStyles = (theme: Tokens, size: number, color: string) =>
  StyleSheet.create({
    container: {
      width: size,
      height: size,
      justifyContent: 'space-between',
    },
    line: {
      width: '100%',
      height: 2,
      backgroundColor: color,
      borderRadius: 1,
    },
  });
