import { StyleSheet } from 'react-native';
import type { Tokens } from '@types';
import type { ButtonVariant, ButtonSize } from './types';

export function getButtonStyles(
  theme: Tokens,
  variant: ButtonVariant,
  size: ButtonSize,
) {
  const backgroundColor =
    variant === 'primary' ? theme.colors.primary : 'transparent';
  const padding = size === 'sm' ? 8 : size === 'lg' ? 18 : 12;
  const textColor = variant === 'primary' ? '#FFFFFF' : theme.colors.primary;

  return {
    backgroundColor,
    padding,
    textColor,
    borderRadius: theme.radii.md,
  };
}

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: '600',
  },
});
