import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import TopBar from '../../components/templates/TopBar/TopBar';
import { ThemeProvider } from '@theme/ThemeProvider';

const meta: Meta<typeof TopBar> = {
  title: 'Templates/TopBar',
  component: TopBar,
  decorators: [
    Story => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof TopBar>;

export const Default: Story = {
  args: {
    onMenuPress: () => console.log('Menu pressed'),
    onSearchPress: () => console.log('Search pressed'),
    onProfilePress: () => console.log('Profile pressed'),
  },
};

export const WithAvatar: Story = {
  args: {
    onMenuPress: () => console.log('Menu pressed'),
    onSearchPress: () => console.log('Search pressed'),
    onProfilePress: () => console.log('Profile pressed'),
    avatarSource: { uri: 'https://i.pravatar.cc/150?img=12' },
  },
};

export const WithoutSearch: Story = {
  args: {
    onMenuPress: () => console.log('Menu pressed'),
    onProfilePress: () => console.log('Profile pressed'),
    showSearch: false,
  },
};

export const WithoutMenu: Story = {
  args: {
    onSearchPress: () => console.log('Search pressed'),
    onProfilePress: () => console.log('Profile pressed'),
    showMenu: false,
  },
};

export const MinimalView: Story = {
  args: {
    onProfilePress: () => console.log('Profile pressed'),
    showMenu: false,
    showSearch: false,
  },
};
