# Templates Stories

This folder contains Storybook stories for Template components.

## About Templates

Templates are page-level objects that place components into a layout and demonstrate the design's underlying content structure.

## What to Include

Add stories for:

- Layout templates (AuthLayout, MainLayout, etc.)
- Different template variants
- Template with placeholder content (content skeleton)

## Example Story Structure

```tsx
import React from 'react';
import { AuthLayout } from '@components';

export default {
  title: 'Templates/AuthLayout',
  component: AuthLayout,
};

export const Default = () => (
  <AuthLayout>{/* Placeholder content */}</AuthLayout>
);
```

## Note

Templates should focus on structure, not final content. Use placeholder or skeleton content to demonstrate the layout.
