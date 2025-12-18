import React from 'react';
import { View } from 'react-native';
import Button from '../components/atoms/Button';
import { ThemeProvider } from '../theme/ThemeProvider';

export default {
  title: 'Atoms/Button',
  component: Button,
};

export const Primary = () => (
  <ThemeProvider>
    <View style={{ padding: 16 }}>
      <Button title="Primary button" />
    </View>
  </ThemeProvider>
);

export const Ghost = () => (
  <ThemeProvider>
    <View style={{ padding: 16 }}>
      <Button variant="ghost" title="Ghost button" />
    </View>
  </ThemeProvider>
);
