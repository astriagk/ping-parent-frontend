import React from 'react';
import { View, ViewProps, StyleProp, ViewStyle } from 'react-native';
import { useTheme } from '@theme/ThemeProvider';

type Props = ViewProps & { style?: StyleProp<ViewStyle> };

export default function Box({ style, children, ...rest }: Props) {
  useTheme(); // keep theme accessible for consumers
  return (
    <View style={style} {...rest}>
      {children}
    </View>
  );
}
