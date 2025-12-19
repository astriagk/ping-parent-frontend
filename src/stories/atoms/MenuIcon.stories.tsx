import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';
import MenuIcon from '../../components/atoms/MenuIcon/MenuIcon';
import { ThemeProvider } from '@theme/ThemeProvider';

const meta: Meta<typeof MenuIcon> = {
  title: 'Atoms/MenuIcon',
  component: MenuIcon,
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

type Story = StoryObj<typeof MenuIcon>;

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
    size: 24,
    color: '#007AFF',
  },
};
