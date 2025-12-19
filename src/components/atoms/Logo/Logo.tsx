import React from 'react';
import { Image, View } from 'react-native';
import type { LogoProps } from './types';
import { styles } from './styles';

export default function Logo({ size = 80 }: LogoProps) {
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
