import React from 'react';
import { View } from 'react-native';
import { useTheme } from '@theme/ThemeProvider';
import type { SearchIconProps } from './types';
import { makeStyles } from './styles';

/**
 * SearchIcon Atom
 *
 * Magnifying glass search icon.
 * Fully customizable size and color.
 *
 * @example
 * <SearchIcon size={22} color="#000" />
 */
export default function SearchIcon({
  size = 22,
  color,
  containerStyle,
  testID = 'search-icon',
}: SearchIconProps) {
  const theme = useTheme();
  const iconColor = color || theme.colors.text.primary;
  const styles = makeStyles(theme, size, iconColor);

  return (
    <View style={[styles.container, containerStyle]} testID={testID}>
      <View style={styles.circle} />
      <View style={styles.handle} />
    </View>
  );
}
