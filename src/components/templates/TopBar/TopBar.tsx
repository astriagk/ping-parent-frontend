import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { useTheme } from '@theme/ThemeProvider';
import { Icon } from '@components';
import type { TopBarProps } from './types';
import { makeStyles } from './styles';

/**
 * TopBar Template
 *
 * Reusable top navigation bar with menu, search, and profile actions.
 * Can be customized to show/hide specific elements.
 *
 * Features:
 * - Hamburger menu icon (left)
 * - Search icon (right)
 * - Profile avatar (far right)
 * - Customizable callbacks for each action
 * - Theme-aware styling
 * - Optional avatar image or placeholder
 *
 * @example
 * <TopBar
 *   onMenuPress={() => navigation.openDrawer()}
 *   onSearchPress={() => navigation.navigate('Search')}
 *   onProfilePress={() => navigation.navigate('Profile')}
 *   avatarSource={{ uri: user.avatarUrl }}
 * />
 */
export default function TopBar({
  onMenuPress,
  onSearchPress,
  onProfilePress,
  avatarSource,
  showSearch = true,
  showMenu = true,
  showProfile = true,
  containerStyle,
  testID = 'top-bar',
}: TopBarProps) {
  const theme = useTheme();
  const styles = makeStyles(theme);

  return (
    <View style={[styles.container, containerStyle]} testID={testID}>
      {/* Left Section - Menu */}
      <View style={styles.leftSection}>
        {showMenu && (
          <TouchableOpacity
            style={styles.iconButton}
            onPress={onMenuPress}
            accessibilityLabel="Menu"
            accessibilityRole="button"
            testID={`${testID}-menu-button`}
          >
            <Icon name="menu" size={24} />
          </TouchableOpacity>
        )}
      </View>

      {/* Right Section - Search & Profile */}
      <View style={styles.rightSection}>
        {showSearch && (
          <TouchableOpacity
            style={styles.iconButton}
            onPress={onSearchPress}
            accessibilityLabel="Search"
            accessibilityRole="button"
            testID={`${testID}-search-button`}
          >
            <Icon name="search" size={22} />
          </TouchableOpacity>
        )}

        {showProfile && (
          <TouchableOpacity
            onPress={onProfilePress}
            accessibilityLabel="Profile"
            accessibilityRole="button"
            testID={`${testID}-profile-button`}
          >
            {avatarSource ? (
              <Image source={avatarSource} style={styles.avatar} />
            ) : (
              <View style={styles.avatarPlaceholder}>
                <Text style={styles.avatarText}>U</Text>
              </View>
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
