import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { useTheme } from '@theme/ThemeProvider';
import { makeStyles } from './styles';
import type { InputProps } from './types';

export default function Input({
  value,
  onChangeText,
  onBlur,
  placeholder,
  secureTextEntry = false,
  keyboardType = 'default',
  autoCapitalize = 'none',
  editable = true,
  error,
  touched = false,
  accessibilityLabel,
  testID,
  multiline,
  numberOfLines,
  maxLength,
}: InputProps) {
  const theme = useTheme();
  const styles = makeStyles(theme);

  const hasError = touched && error;
  const inputStyle = [
    styles.input,
    hasError && styles.inputError,
    !editable && styles.inputDisabled,
  ];

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.text.placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        editable={editable}
        style={inputStyle}
        accessibilityLabel={accessibilityLabel}
        testID={testID}
        multiline={multiline}
        numberOfLines={numberOfLines}
        maxLength={maxLength}
      />
      {hasError ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
}
