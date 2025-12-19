import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '@theme/ThemeProvider';
import { makeStyles } from './styles';
import type { PasswordInputProps } from './types';
import { t } from '@locales';

export default function PasswordInput({
  value,
  onChangeText,
  onBlur,
  placeholder,
  editable = true,
  error,
  touched = false,
  accessibilityLabel,
  testID,
  showPasswordLabel,
  hidePasswordLabel,
}: PasswordInputProps) {
  const theme = useTheme();
  const styles = makeStyles(theme);
  const [showPassword, setShowPassword] = useState(false);

  const hasError = touched && error;
  const containerStyle = [
    styles.inputContainer,
    hasError && styles.inputContainerError,
    !editable && styles.inputContainerDisabled,
  ];

  return (
    <View style={styles.container}>
      <View style={containerStyle}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          onBlur={onBlur}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.text.placeholder}
          secureTextEntry={!showPassword}
          autoCapitalize="none"
          editable={editable}
          style={styles.input}
          accessibilityLabel={accessibilityLabel}
          testID={testID}
        />
        <TouchableOpacity
          onPress={() => setShowPassword(s => !s)}
          style={styles.eyeButton}
          accessibilityLabel={
            showPassword
              ? hidePasswordLabel || t('LOGIN.HIDE_PASSWORD')
              : showPasswordLabel || t('LOGIN.SHOW_PASSWORD')
          }
        >
          <Text style={styles.eyeText}>{showPassword ? '🙈' : '👁️'}</Text>
        </TouchableOpacity>
      </View>
      {hasError ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
}
