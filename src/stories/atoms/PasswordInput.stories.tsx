import React from 'react';
import { View } from 'react-native';
import { PasswordInput } from '@components';
import { ThemeProvider } from '@theme/ThemeProvider';
import { inlineStyles } from '../common/styles';

export default {
  title: 'Atoms/PasswordInput',
  component: PasswordInput,
};

export const Default = () => (
  <ThemeProvider>
    <View style={inlineStyles.default}>
      <PasswordInput value="" onChangeText={() => {}} placeholder="Password" />
    </View>
  </ThemeProvider>
);

export const WithValue = () => (
  <ThemeProvider>
    <View style={inlineStyles.default}>
      <PasswordInput
        value="MySecretPassword123"
        onChangeText={() => {}}
        placeholder="Password"
      />
    </View>
  </ThemeProvider>
);

export const WithError = () => (
  <ThemeProvider>
    <View style={inlineStyles.default}>
      <PasswordInput
        value="short"
        onChangeText={() => {}}
        placeholder="Password"
        error="Password must be at least 6 characters"
        touched={true}
      />
    </View>
  </ThemeProvider>
);

export const Disabled = () => (
  <ThemeProvider>
    <View style={inlineStyles.default}>
      <PasswordInput
        value="CannotEdit123"
        onChangeText={() => {}}
        placeholder="Password"
        editable={false}
      />
    </View>
  </ThemeProvider>
);

export const CustomLabels = () => (
  <ThemeProvider>
    <View style={inlineStyles.default}>
      <PasswordInput
        value="MyPassword"
        onChangeText={() => {}}
        placeholder="Password"
        showPasswordLabel="Reveal"
        hidePasswordLabel="Hide"
      />
    </View>
  </ThemeProvider>
);
