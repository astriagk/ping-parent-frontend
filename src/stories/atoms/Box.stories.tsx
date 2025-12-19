import React from 'react';
import { Box } from '@components';
import { Text } from 'react-native';

export default {
  title: 'Atoms/Box',
  component: Box,
};

export const Default = () => (
  <Box style={{ padding: 16, backgroundColor: '#f0f0f0' }}>
    <Text>Box Component - Basic container</Text>
  </Box>
);

export const WithCustomStyle = () => (
  <Box
    style={{
      padding: 20,
      backgroundColor: '#e3f2fd',
      borderRadius: 8,
      margin: 16,
    }}
  >
    <Text>Box with custom styling</Text>
  </Box>
);

export const Nested = () => (
  <Box style={{ padding: 16, backgroundColor: '#f5f5f5' }}>
    <Text style={{ marginBottom: 8 }}>Outer Box</Text>
    <Box style={{ padding: 12, backgroundColor: '#e0e0e0' }}>
      <Text>Inner Box</Text>
    </Box>
  </Box>
);
