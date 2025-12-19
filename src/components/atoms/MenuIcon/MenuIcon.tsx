import React from 'react';
import { View } from 'react-native';
import { useTheme } from '@theme/ThemeProvider';
import type { MenuIconProps } from './types';
import { makeStyles } from './styles';

/**
 * MenuIcon Atom
 *
 * Hamburger menu icon with three horizontal lines.
 * Fully customizable size and color.
 *
 * @example
 * <MenuIcon size={24} color="#000" />
 */
export default function MenuIcon({
  size = 24,
  color,
  containerStyle,
  testID = 'menu-icon',
}: MenuIconProps) {
  const theme = useTheme();
  const iconColor = color || theme.colors.text.primary;
  const styles = makeStyles(theme, size, iconColor);

  return (
    <View style={[styles.container, containerStyle]} testID={testID}>
      <View style={styles.line} />
      <View style={styles.line} />
      <View style={styles.line} />
    </View>
  );
}
