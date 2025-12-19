import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '@theme/ThemeProvider';
import { t } from '@locales';
import type { PasswordRequirementsProps } from './types';
import { makeStyles } from './styles';
import { checkPasswordRequirements } from '@components/atoms/PasswordStrengthIndicator';

export default function PasswordRequirements({
  password,
  containerStyle,
}: PasswordRequirementsProps) {
  const theme = useTheme();
  const styles = makeStyles(theme);

  const requirements = checkPasswordRequirements(password);

  const renderRequirement = (label: string, met: boolean) => (
    <View style={styles.requirementRow} key={label}>
      <Text style={[styles.checkmark, met && styles.checkmarkMet]}>
        {met ? '✓' : '○'}
      </Text>
      <Text style={[styles.requirementText, met && styles.requirementMet]}>
        {label}
      </Text>
    </View>
  );

  return (
    <View style={[styles.container, containerStyle]}>
      {renderRequirement(
        t('PASSWORD.REQUIREMENTS.MIN_LENGTH'),
        requirements.minLength,
      )}
      {renderRequirement(
        t('PASSWORD.REQUIREMENTS.UPPERCASE'),
        requirements.hasUppercase,
      )}
      {renderRequirement(
        t('PASSWORD.REQUIREMENTS.LOWERCASE'),
        requirements.hasLowercase,
      )}
      {renderRequirement(
        t('PASSWORD.REQUIREMENTS.NUMBER'),
        requirements.hasNumber,
      )}
    </View>
  );
}
