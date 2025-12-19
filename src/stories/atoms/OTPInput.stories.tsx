import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import OTPInput from '../../../components/atoms/OTPInput';
import { ThemeProvider } from '../../../theme/ThemeProvider';

const meta: Meta<typeof OTPInput> = {
  title: 'Atoms/OTPInput',
  component: OTPInput,
  decorators: [
    Story => (
      <ThemeProvider>
        <View style={styles.container}>
          <Story />
        </View>
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof OTPInput>;

/**
 * Default OTP Input
 * Standard 6-digit OTP entry
 */
export const Default: Story = {
  render: () => {
    const [otp, setOtp] = useState('');
    return (
      <View style={styles.wrapper}>
        <Text style={styles.label}>Enter OTP</Text>
        <OTPInput
          length={6}
          value={otp}
          onChangeText={setOtp}
          onComplete={code => console.log('OTP Complete:', code)}
        />
        <Text style={styles.info}>Current value: {otp || '(empty)'}</Text>
      </View>
    );
  },
};

/**
 * With Error
 * OTP input showing validation error
 */
export const WithError: Story = {
  render: () => {
    const [otp, setOtp] = useState('123');
    return (
      <View style={styles.wrapper}>
        <Text style={styles.label}>Enter OTP</Text>
        <OTPInput
          length={6}
          value={otp}
          onChangeText={setOtp}
          error="Invalid OTP code"
          touched={true}
        />
      </View>
    );
  },
};

/**
 * Disabled State
 * OTP input in disabled state
 */
export const Disabled: Story = {
  render: () => {
    const [otp, setOtp] = useState('1234');
    return (
      <View style={styles.wrapper}>
        <Text style={styles.label}>Enter OTP (Disabled)</Text>
        <OTPInput
          length={6}
          value={otp}
          onChangeText={setOtp}
          disabled={true}
        />
      </View>
    );
  },
};

/**
 * 4-Digit OTP
 * Shorter OTP code
 */
export const FourDigit: Story = {
  render: () => {
    const [otp, setOtp] = useState('');
    return (
      <View style={styles.wrapper}>
        <Text style={styles.label}>Enter 4-Digit PIN</Text>
        <OTPInput length={4} value={otp} onChangeText={setOtp} />
      </View>
    );
  },
};

/**
 * Pre-filled
 * OTP with initial value
 */
export const PreFilled: Story = {
  render: () => {
    const [otp, setOtp] = useState('123456');
    return (
      <View style={styles.wrapper}>
        <Text style={styles.label}>Verify OTP</Text>
        <OTPInput length={6} value={otp} onChangeText={setOtp} />
      </View>
    );
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  wrapper: {
    width: '100%',
    maxWidth: 400,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
    color: '#111827',
  },
  info: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 8,
  },
});
