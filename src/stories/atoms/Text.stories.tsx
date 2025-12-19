import React from 'react';
import { Text } from '@components';

export default {
  title: 'Atoms/Text',
  component: Text,
};

export const Body = () => <Text variant="body">Body text variant</Text>;

export const Title = () => <Text variant="title">Title text variant</Text>;

export const Caption = () => (
  <Text variant="caption">Caption text variant</Text>
);

export const AllVariants = () => (
  <>
    <Text variant="title" style={{ marginBottom: 8 }}>
      Title Variant
    </Text>
    <Text variant="body" style={{ marginBottom: 8 }}>
      Body Variant
    </Text>
    <Text variant="caption">Caption Variant</Text>
  </>
);

export const CustomStyle = () => (
  <Text
    variant="body"
    style={{ color: '#2196F3', fontWeight: 'bold', fontSize: 18 }}
  >
    Custom styled text
  </Text>
);
