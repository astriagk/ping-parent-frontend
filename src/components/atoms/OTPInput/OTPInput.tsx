import React, { useRef, useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { useTheme } from '@theme/ThemeProvider';
import type { OTPInputProps } from './types';
import { makeStyles } from './styles';

/**
 * OTPInput Atom
 *
 * A component for entering OTP (One-Time Password) codes.
 * Displays individual boxes for each digit with auto-focus behavior.
 *
 * @example
 * <OTPInput
 *   length={6}
 *   value={otp}
 *   onChangeText={setOtp}
 *   onComplete={(code) => verifyOTP(code)}
 * />
 */
export default function OTPInput({
  length = 6,
  value,
  onChangeText,
  onComplete,
  disabled = false,
  error,
  touched = false,
  containerStyle,
  testID = 'otp-input',
}: OTPInputProps) {
  const theme = useTheme();
  const styles = makeStyles(theme);
  const inputRef = useRef<TextInput>(null);
  const [isFocused, setIsFocused] = useState(false);

  const hasError = touched && error;

  // Auto-focus on mount
  useEffect(() => {
    if (!disabled) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [disabled]);

  // Call onComplete when OTP is fully entered
  useEffect(() => {
    if (value.length === length && onComplete) {
      onComplete(value);
    }
  }, [value, length, onComplete]);

  const handleChangeText = (text: string) => {
    // Only allow numbers
    const cleaned = text.replace(/[^0-9]/g, '');
    // Limit to specified length
    const limited = cleaned.slice(0, length);
    onChangeText(limited);
  };

  const handlePress = () => {
    if (!disabled) {
      inputRef.current?.focus();
    }
  };

  const digits = value.split('');

  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity
        style={styles.inputContainer}
        onPress={handlePress}
        activeOpacity={0.7}
        disabled={disabled}
      >
        {Array.from({ length }).map((_, index) => {
          const digit = digits[index];
          const isActive = isFocused && index === value.length;

          return (
            <View
              key={index}
              style={[
                styles.digitBox,
                isActive && styles.digitBoxFocused,
                hasError && styles.digitBoxError,
                disabled && styles.digitBoxDisabled,
              ]}
              testID={`${testID}-digit-${index}`}
            >
              <Text
                style={[
                  styles.digitText,
                  !digit && styles.digitTextPlaceholder,
                ]}
              >
                {digit || '•'}
              </Text>
            </View>
          );
        })}
      </TouchableOpacity>

      {/* Hidden input for keyboard */}
      <TextInput
        ref={inputRef}
        style={styles.hiddenInput}
        value={value}
        onChangeText={handleChangeText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        keyboardType="number-pad"
        maxLength={length}
        editable={!disabled}
        autoComplete="one-time-code"
        textContentType="oneTimeCode"
        testID={`${testID}-hidden-input`}
      />

      {hasError && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText} testID={`${testID}-error`}>
            {error}
          </Text>
        </View>
      )}
    </View>
  );
}
