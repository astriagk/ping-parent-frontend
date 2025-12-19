import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useTheme } from '@theme/ThemeProvider';
import type { IconProps } from './types';

/**
 * Icon Atom
 *
 * Wrapper for Feather icons from react-native-vector-icons.
 * Provides consistent theming and easy-to-use API.
 *
 * Icon library: Feather Icons - Clean, minimal, and beautiful
 * Browse icons: https://feathericons.com/
 *
 * @example
 * // Basic usage
 * <Icon name="menu" size={24} />
 *
 * @example
 * // With custom color
 * <Icon name="search" size={22} color="#007AFF" />
 *
 * @example
 * // Common icons
 * <Icon name="home" />
 * <Icon name="user" />
 * <Icon name="settings" />
 * <Icon name="bell" />
 * <Icon name="check" />
 * <Icon name="x" />
 * <Icon name="chevron-right" />
 */
export default function Icon({ name, size = 24, color, testID }: IconProps) {
  const theme = useTheme();
  const iconColor = color || theme.colors.text.primary;

  return (
    <FeatherIcon name={name} size={size} color={iconColor} testID={testID} />
  );
}
