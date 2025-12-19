import React, { ReactNode } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
  StyleSheet,
  ViewStyle,
} from 'react-native';

export interface AuthFormLayoutProps {
  children: ReactNode;
  contentContainerStyle?: ViewStyle;
  innerStyle?: ViewStyle;
  scrollEnabled?: boolean;
  keyboardShouldPersistTaps?: 'always' | 'never' | 'handled';
}

/**
 * AuthFormLayout Template
 *
 * Reusable layout template for authentication pages (login, register, password reset, etc.)
 * Handles keyboard avoidance and provides consistent structure for auth forms.
 *
 * Features:
 * - Automatic keyboard avoidance for form inputs
 * - Platform-specific behavior (iOS/Android)
 * - Scrollable content for long forms
 * - Customizable styling
 *
 * @example
 * <AuthFormLayout>
 *   <Text>Login</Text>
 *   <Input ... />
 *   <Button ... />
 * </AuthFormLayout>
 */
export default function AuthFormLayout({
  children,
  contentContainerStyle,
  innerStyle,
  scrollEnabled = true,
  keyboardShouldPersistTaps = 'handled',
}: AuthFormLayoutProps) {
  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={[styles.scrollContent, contentContainerStyle]}
        keyboardShouldPersistTaps={keyboardShouldPersistTaps}
        scrollEnabled={scrollEnabled}
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.inner, innerStyle]}>{children}</View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner: {
    width: '100%',
    maxWidth: 440,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
});
