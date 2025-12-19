import React from 'react';
import { View } from 'react-native';
import { Button } from '@components';
import { ThemeProvider } from '@theme/ThemeProvider';
import { inlineStyles } from '../common/styles';

export default {
  title: 'Atoms/Button',
  component: Button,
};

export const Primary = () => (
  <ThemeProvider>
    <View style={inlineStyles.default}>
      <Button title="Primary button" />
    </View>
  </ThemeProvider>
);

export const Ghost = () => (
  <ThemeProvider>
    <View style={inlineStyles.default}>
      <Button variant="ghost" title="Ghost button" />
    </View>
  </ThemeProvider>
);
