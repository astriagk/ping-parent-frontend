import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';
import SearchIcon from '../../components/atoms/SearchIcon/SearchIcon';
import { ThemeProvider } from '@theme/ThemeProvider';

const meta: Meta<typeof SearchIcon> = {
  title: 'Atoms/SearchIcon',
  component: SearchIcon,
  decorators: [
    Story => (
      <ThemeProvider>
        <View style={{ padding: 16, backgroundColor: '#fff' }}>
          <Story />
        </View>
      </ThemeProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof SearchIcon>;

export const Default: Story = {
  args: {},
};

export const Large: Story = {
  args: {
    size: 32,
  },
};

export const Small: Story = {
  args: {
    size: 16,
  },
};

export const CustomColor: Story = {
  args: {
    size: 22,
    color: '#007AFF',
  },
};
