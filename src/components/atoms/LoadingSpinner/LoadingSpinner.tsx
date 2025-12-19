import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { useTheme } from '@theme/ThemeProvider';
import { SPINNER_SIZES } from '@constants';
import type { LoadingSpinnerProps } from './types';
import { styles } from './styles';

export default function LoadingSpinner({
  animating = true,
  color,
  size = SPINNER_SIZES.small,
}: LoadingSpinnerProps) {
  const theme = useTheme();
  const scale = useRef(new Animated.Value(1)).current;
  const spinnerColor = color || theme.colors.primary;

  useEffect(() => {
    if (!animating) return;
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(scale, {
          toValue: 1.2,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 1.0,
          duration: 600,
          useNativeDriver: true,
        }),
      ]),
    );
    loop.start();
    return () => loop.stop();
  }, [animating, scale]);

  return (
    <Animated.View
      style={[
        styles.dot,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: spinnerColor,
          transform: [{ scale }],
        },
      ]}
    />
  );
}
