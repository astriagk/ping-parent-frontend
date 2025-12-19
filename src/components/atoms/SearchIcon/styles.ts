import { StyleSheet } from 'react-native';
import type { Tokens } from '@theme/tokens';

export const makeStyles = (theme: Tokens, size: number, color: string) =>
  StyleSheet.create({
    container: {
      width: size,
      height: size,
      justifyContent: 'center',
      alignItems: 'center',
    },
    circle: {
      width: size * 0.7,
      height: size * 0.7,
      borderRadius: (size * 0.7) / 2,
      borderWidth: 2,
      borderColor: color,
    },
    handle: {
      width: size * 0.3,
      height: 2,
      backgroundColor: color,
      position: 'absolute',
      bottom: 0,
      right: 0,
      transform: [{ rotate: '45deg' }],
      borderRadius: 1,
    },
  });
