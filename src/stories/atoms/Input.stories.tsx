import React from 'react';
import { View } from 'react-native';
import { Input } from '@components';
import { ThemeProvider } from '@theme/ThemeProvider';
import { inlineStyles } from '../common/styles';

export default {
  title: 'Atoms/Input',
  component: Input,
};

export const Default = () => (
  <ThemeProvider>
    <View style={inlineStyles.default}>
      <Input value="" onChangeText={() => {}} placeholder="Enter text" />
    </View>
  </ThemeProvider>
);

export const WithValue = () => (
  <ThemeProvider>
    <View style={inlineStyles.default}>
      <Input
        value="John Doe"
        onChangeText={() => {}}
        placeholder="Enter text"
      />
    </View>
  </ThemeProvider>
);

export const WithError = () => (
  <ThemeProvider>
    <View style={inlineStyles.default}>
      <Input
        value="invalid@"
        onChangeText={() => {}}
        placeholder="Email"
        error="Please enter a valid email address"
        touched={true}
      />
    </View>
  </ThemeProvider>
);

export const EmailType = () => (
  <ThemeProvider>
    <View style={inlineStyles.default}>
      <Input
        value=""
        onChangeText={() => {}}
        placeholder="Email address"
        keyboardType="email-address"
        autoCapitalize="none"
      />
    </View>
  </ThemeProvider>
);

export const Disabled = () => (
  <ThemeProvider>
    <View style={inlineStyles.default}>
      <Input
        value="Cannot edit"
        onChangeText={() => {}}
        placeholder="Disabled"
        editable={false}
      />
    </View>
  </ThemeProvider>
);

export const Multiline = () => (
  <ThemeProvider>
    <View style={inlineStyles.default}>
      <Input
        value=""
        onChangeText={() => {}}
        placeholder="Enter multiple lines"
        multiline={true}
        numberOfLines={4}
      />
    </View>
  </ThemeProvider>
);
