import React from 'react';
import { View, StyleSheet } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import Icon from '../../../components/atoms/Icon';
import { ThemeProvider } from '../../../theme/ThemeProvider';

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
  decorators: [
    Story => (
      <ThemeProvider>
        <View style={styles.container}>
          <Story />
        </View>
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Icon>;

/**
 * Common Icons Gallery
 * Displays frequently used Feather icons
 */
export const Gallery: Story = {
  render: () => (
    <View style={styles.gallery}>
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <Icon name="menu" size={24} />
        </View>
        <View style={styles.iconContainer}>
          <Icon name="search" size={24} />
        </View>
        <View style={styles.iconContainer}>
          <Icon name="user" size={24} />
        </View>
        <View style={styles.iconContainer}>
          <Icon name="bell" size={24} />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <Icon name="settings" size={24} />
        </View>
        <View style={styles.iconContainer}>
          <Icon name="home" size={24} />
        </View>
        <View style={styles.iconContainer}>
          <Icon name="mail" size={24} />
        </View>
        <View style={styles.iconContainer}>
          <Icon name="phone" size={24} />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <Icon name="chevron-right" size={24} />
        </View>
        <View style={styles.iconContainer}>
          <Icon name="chevron-down" size={24} />
        </View>
        <View style={styles.iconContainer}>
          <Icon name="plus" size={24} />
        </View>
        <View style={styles.iconContainer}>
          <Icon name="check" size={24} />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <Icon name="x" size={24} />
        </View>
        <View style={styles.iconContainer}>
          <Icon name="alert-circle" size={24} />
        </View>
        <View style={styles.iconContainer}>
          <Icon name="info" size={24} />
        </View>
        <View style={styles.iconContainer}>
          <Icon name="edit" size={24} />
        </View>
      </View>
    </View>
  ),
};

/**
 * Default Size
 * Standard 24px icon (default)
 */
export const Default: Story = {
  args: {
    name: 'menu',
    size: 24,
  },
};

/**
 * Small Size
 * 20px icon for compact areas
 */
export const Small: Story = {
  args: {
    name: 'search',
    size: 20,
  },
};

/**
 * Large Size
 * 32px icon for emphasis
 */
export const Large: Story = {
  args: {
    name: 'user',
    size: 32,
  },
};

/**
 * Custom Color
 * Icon with custom color
 */
export const CustomColor: Story = {
  args: {
    name: 'bell',
    size: 24,
    color: '#007AFF',
  },
};

/**
 * Navigation Icons
 * Common navigation icons
 */
export const Navigation: Story = {
  render: () => (
    <View style={styles.row}>
      <View style={styles.iconContainer}>
        <Icon name="home" size={24} />
      </View>
      <View style={styles.iconContainer}>
        <Icon name="search" size={24} />
      </View>
      <View style={styles.iconContainer}>
        <Icon name="user" size={24} />
      </View>
      <View style={styles.iconContainer}>
        <Icon name="settings" size={24} />
      </View>
    </View>
  ),
};

/**
 * Action Icons
 * Common action icons
 */
export const Actions: Story = {
  render: () => (
    <View style={styles.row}>
      <View style={styles.iconContainer}>
        <Icon name="plus" size={24} />
      </View>
      <View style={styles.iconContainer}>
        <Icon name="edit" size={24} />
      </View>
      <View style={styles.iconContainer}>
        <Icon name="trash" size={24} />
      </View>
      <View style={styles.iconContainer}>
        <Icon name="send" size={24} />
      </View>
    </View>
  ),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  gallery: {
    gap: 16,
  },
  row: {
    flexDirection: 'row',
    gap: 16,
  },
  iconContainer: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
  },
});
