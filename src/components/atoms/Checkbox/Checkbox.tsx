import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { useTheme } from '@theme/ThemeProvider';
import type { CheckboxProps } from './types';
import { makeStyles } from './styles';

export default function Checkbox({
  checked,
  onChange,
  label,
  disabled = false,
  error = false,
  testID,
  containerStyle,
}: CheckboxProps) {
  const theme = useTheme();
  const styles = makeStyles(theme);

  const handlePress = () => {
    if (!disabled) {
      onChange(!checked);
    }
  };

  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={handlePress}
      disabled={disabled}
      activeOpacity={0.7}
      testID={testID}
    >
      <View
        style={[
          styles.checkbox,
          checked && styles.checkboxChecked,
          error && styles.checkboxError,
          disabled && styles.checkboxDisabled,
        ]}
      >
        {checked && <Text style={styles.checkmark}>✓</Text>}
      </View>
      {label && (
        <Text
          style={[
            styles.label,
            disabled && styles.labelDisabled,
            error && styles.labelError,
          ]}
        >
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
}
