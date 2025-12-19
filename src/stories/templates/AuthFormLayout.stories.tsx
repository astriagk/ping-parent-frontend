import React from 'react';
import { Text } from 'react-native';
import { AuthFormLayout } from '@components';

export default {
  title: 'Templates/AuthFormLayout',
  component: AuthFormLayout,
};

export const Default = () => (
  <AuthFormLayout>
    <Text style={{ fontSize: 24, marginBottom: 16 }}>Login</Text>
    <Text>
      Template for authentication forms (login, register, reset password)
    </Text>
    <Text style={{ marginTop: 16 }}>
      Automatically handles keyboard avoidance for form inputs.
    </Text>
  </AuthFormLayout>
);

export const WithCustomStyles = () => (
  <AuthFormLayout
    contentContainerStyle={{ padding: 24, backgroundColor: '#f5f5f5' }}
    innerStyle={{ alignItems: 'center' }}
  >
    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Register</Text>
    <Text>Custom styled authentication form</Text>
  </AuthFormLayout>
);

export const LoginExample = () => (
  <AuthFormLayout contentContainerStyle={{ padding: 20 }}>
    <Text style={{ fontSize: 24, marginBottom: 20 }}>Sign In</Text>
    <Text style={{ marginBottom: 10 }}>
      This layout is used in login, register, forgot password, and reset
      password pages.
    </Text>
    <Text>
      Tap on form fields and the keyboard will appear without covering the
      content.
    </Text>
  </AuthFormLayout>
);

export const RegisterExample = () => (
  <AuthFormLayout contentContainerStyle={{ padding: 20 }}>
    <Text style={{ fontSize: 24, marginBottom: 20 }}>Create Account</Text>
    <Text>Perfect for longer registration forms with multiple fields.</Text>
    <Text style={{ marginTop: 10 }}>
      Scrollable content ensures all fields remain accessible.
    </Text>
  </AuthFormLayout>
);
