import React from 'react';
import {
  TouchableOpacity,
  ActivityIndicator,
  Text as RNText,
} from 'react-native';
import { useTheme } from '@theme/ThemeProvider';
import type { ButtonProps } from './types';
import { getButtonStyles, styles } from './styles';

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  title,
  containerStyle,
  textStyle,
  ...rest
}) => {
  const theme = useTheme();
  const buttonStyles = getButtonStyles(theme, variant, size);

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      style={[
        styles.button,
        {
          backgroundColor: buttonStyles.backgroundColor,
          padding: buttonStyles.padding,
          borderRadius: buttonStyles.borderRadius,
        },
        containerStyle,
      ]}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator color={buttonStyles.textColor} />
      ) : (
        <RNText
          style={[styles.text, { color: buttonStyles.textColor }, textStyle]}
        >
          {title}
        </RNText>
      )}
    </TouchableOpacity>
  );
};

export default Button;
