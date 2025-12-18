import React, { useEffect, useRef } from 'react';
import { Animated, View, StyleSheet } from 'react-native';

export default function LoadingSpinner({
  animating = true,
}: {
  animating?: boolean;
}) {
  const scale = useRef(new Animated.Value(1)).current;

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

  return <Animated.View style={[styles.dot, { transform: [{ scale }] }]} />;
}

const styles = StyleSheet.create({
  dot: { width: 18, height: 18, borderRadius: 9, backgroundColor: '#fff' },
});
