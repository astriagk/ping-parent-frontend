import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

export default function Logo({ size = 80 }: { size?: number }) {
  // Placeholder image. Replace with real asset/svg later.
  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <Image
        source={{
          uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=',
        }}
        style={{ width: size, height: size }}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', justifyContent: 'center' },
});
