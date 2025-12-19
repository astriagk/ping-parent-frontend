import React from 'react';
import { View } from 'react-native';
import { Logo } from '@components';
import { ThemeProvider } from '@theme/ThemeProvider';
import { inlineStyles } from '../common/styles';

export default {
  title: 'Atoms/Logo',
  component: Logo,
};

export const Default = () => (
  <ThemeProvider>
    <View style={inlineStyles.darkBackground}>
      <Logo />
    </View>
  </ThemeProvider>
);

export const Small = () => (
  <ThemeProvider>
    <View style={inlineStyles.darkBackground}>
      <Logo size={40} />
    </View>
  </ThemeProvider>
);

export const Large = () => (
  <ThemeProvider>
    <View style={inlineStyles.darkBackground}>
      <Logo size={120} />
    </View>
  </ThemeProvider>
);
