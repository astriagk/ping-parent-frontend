# Toast Notifications

This directory contains toast notification components for displaying success and error messages at the bottom of the screen.

## Components

### SuccessToast

Bottom toast notification for success messages with green background.

### ErrorToast

Bottom toast notification for error messages with red background.

## Usage

### In Your App Root (App.tsx or similar)

To use toasts, you need to set up a toast provider in your app root:

```tsx
import React, { useState, useEffect } from 'react';
import { setToastHandler } from '@utils/toast';
import { SuccessToast, ErrorToast } from '@components';

export default function App() {
  const [toast, setToast] = useState<{
    message: string;
    type: 'success' | 'error';
  } | null>(null);

  useEffect(() => {
    // Register the toast handler
    setToastHandler((message: string, type: 'success' | 'error') => {
      setToast({ message, type });

      // Auto-dismiss after 3 seconds
      setTimeout(() => {
        setToast(null);
      }, 3000);
    });
  }, []);

  return (
    <>
      {/* Your app content */}
      <NavigationContainer>{/* Your navigation */}</NavigationContainer>

      {/* Toast overlay */}
      {toast &&
        (toast.type === 'success' ? (
          <SuccessToast
            message={toast.message}
            onClose={() => setToast(null)}
          />
        ) : (
          <ErrorToast message={toast.message} onClose={() => setToast(null)} />
        ))}
    </>
  );
}
```

### In Your Components

Once set up, use the toast utilities anywhere in your app:

```tsx
import { showSuccessToast, showErrorToast } from '@utils';

// Show success toast
showSuccessToast('Registration successful!');

// Show error toast
showErrorToast('Failed to send OTP. Please try again.');
```

## API

### `setToastHandler(callback)`

Registers the toast handler function. Should be called once in your app root.

### `showSuccessToast(message: string)`

Displays a success toast with the given message.

### `showErrorToast(message: string)`

Displays an error toast with the given message.

### `showToast(message: string, type: 'success' | 'error')`

Generic toast display function. Prefer using `showSuccessToast` or `showErrorToast` instead.

## Toast vs Alert

**Use Toasts for:**

- Non-critical notifications
- Success confirmations
- Brief status updates
- Auto-dismissible messages

**Use Alerts for:**

- Critical errors requiring acknowledgment
- Confirmation dialogs
- Destructive actions
- Important warnings that need user attention

## Auto-dismiss

Toasts automatically dismiss after 3 seconds by default. Users can also manually dismiss by tapping the × button.

## Styling

Toast styles are defined in each component's `styles.ts` file and use the theme system. You can customize:

- Background color
- Text color
- Border radius
- Shadow
- Positioning
- Padding
