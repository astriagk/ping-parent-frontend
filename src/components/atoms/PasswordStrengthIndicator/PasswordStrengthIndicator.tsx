import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '@theme/ThemeProvider';
import { t } from '@locales';
import type { PasswordStrengthIndicatorProps, PasswordStrength } from './types';
import { makeStyles } from './styles';
import { calculatePasswordStrength } from './utils';

export default function PasswordStrengthIndicator({
  password,
  containerStyle,
  showLabel = true,
}: PasswordStrengthIndicatorProps) {
  const theme = useTheme();
  const styles = makeStyles(theme);

  const strength = calculatePasswordStrength(password);

  if (!password) return null;

  const getStrengthColor = (): string => {
    switch (strength) {
      case 'weak':
        return '#FF3B30'; // Red
      case 'medium':
        return '#FF9500'; // Orange
      case 'strong':
        return '#34C759'; // Green
      default:
        return theme.colors.border;
    }
  };

  const getStrengthLabel = (): string => {
    switch (strength) {
      case 'weak':
        return t('PASSWORD.STRENGTH.WEAK');
      case 'medium':
        return t('PASSWORD.STRENGTH.MEDIUM');
      case 'strong':
        return t('PASSWORD.STRENGTH.STRONG');
      default:
        return '';
    }
  };

  const fillPercentage =
    strength === 'weak' ? 33 : strength === 'medium' ? 66 : 100;
  const color = getStrengthColor();
  const label = getStrengthLabel();

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.barContainer}>
        <View style={styles.barBackground}>
          <View
            style={[
              styles.barFill,
              {
                width: `${fillPercentage}%`,
                backgroundColor: color,
              },
            ]}
          />
        </View>
      </View>

      {showLabel && strength && (
        <Text style={[styles.label, { color }]}>{label}</Text>
      )}
    </View>
  );
}
