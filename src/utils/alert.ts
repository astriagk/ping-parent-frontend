import { Alert, AlertButton, Platform } from 'react-native';

/**
 * Alert utility functions for consistent user notifications
 * Provides standardized alert patterns across the app
 */

export interface AlertOptions {
  title: string;
  message?: string;
  buttons?: AlertButton[];
  cancelable?: boolean;
}

/**
 * Show a basic alert
 */
export function showAlert(options: AlertOptions): void {
  const { title, message, buttons, cancelable = false } = options;
  Alert.alert(title, message, buttons, { cancelable });
}

/**
 * Show a success alert with OK button
 */
export function showSuccessAlert(
  title: string,
  message?: string,
  onOk?: () => void,
): void {
  Alert.alert(
    title,
    message,
    [
      {
        text: 'OK',
        onPress: onOk,
      },
    ],
    { cancelable: false },
  );
}

/**
 * Show an error alert with OK button
 */
export function showErrorAlert(
  title: string,
  message?: string,
  onOk?: () => void,
): void {
  Alert.alert(
    title,
    message,
    [
      {
        text: 'OK',
        onPress: onOk,
        style: 'cancel',
      },
    ],
    { cancelable: false },
  );
}

/**
 * Show a confirmation dialog with Yes/No buttons
 */
export function showConfirmAlert(
  title: string,
  message?: string,
  onConfirm?: () => void,
  onCancel?: () => void,
  confirmText: string = 'Yes',
  cancelText: string = 'No',
): void {
  Alert.alert(
    title,
    message,
    [
      {
        text: cancelText,
        onPress: onCancel,
        style: 'cancel',
      },
      {
        text: confirmText,
        onPress: onConfirm,
      },
    ],
    { cancelable: false },
  );
}

/**
 * Show a warning alert with OK button
 */
export function showWarningAlert(
  title: string,
  message?: string,
  onOk?: () => void,
): void {
  Alert.alert(
    title,
    message,
    [
      {
        text: 'OK',
        onPress: onOk,
      },
    ],
    { cancelable: true },
  );
}

/**
 * Show a destructive action confirmation
 */
export function showDestructiveAlert(
  title: string,
  message?: string,
  onConfirm?: () => void,
  onCancel?: () => void,
  confirmText: string = 'Delete',
  cancelText: string = 'Cancel',
): void {
  Alert.alert(
    title,
    message,
    [
      {
        text: cancelText,
        onPress: onCancel,
        style: 'cancel',
      },
      {
        text: confirmText,
        onPress: onConfirm,
        style: 'destructive',
      },
    ],
    { cancelable: false },
  );
}

/**
 * Show an info alert with custom button text
 */
export function showInfoAlert(
  title: string,
  message?: string,
  buttonText: string = 'OK',
  onPress?: () => void,
): void {
  Alert.alert(
    title,
    message,
    [
      {
        text: buttonText,
        onPress,
      },
    ],
    { cancelable: true },
  );
}

/**
 * Show a custom alert with multiple buttons
 */
export function showCustomAlert(
  title: string,
  message: string,
  buttons: AlertButton[],
  cancelable: boolean = true,
): void {
  Alert.alert(title, message, buttons, { cancelable });
}

/**
 * Platform-specific alert helpers
 */
export const platformAlert = {
  /**
   * Show alert optimized for iOS
   */
  ios(title: string, message?: string, onOk?: () => void): void {
    if (Platform.OS === 'ios') {
      showAlert({
        title,
        message,
        buttons: [{ text: 'OK', onPress: onOk }],
      });
    }
  },

  /**
   * Show alert optimized for Android
   */
  android(title: string, message?: string, onOk?: () => void): void {
    if (Platform.OS === 'android') {
      showAlert({
        title,
        message,
        buttons: [{ text: 'OK', onPress: onOk }],
      });
    }
  },
};

/**
 * Common alert patterns
 */
export const commonAlerts = {
  /**
   * Network error alert
   */
  networkError(onRetry?: () => void): void {
    showErrorAlert(
      'Connection Error',
      'Unable to connect to the server. Please check your internet connection.',
      onRetry,
    );
  },

  /**
   * Session expired alert
   */
  sessionExpired(onLogin?: () => void): void {
    showAlert({
      title: 'Session Expired',
      message: 'Your session has expired. Please log in again.',
      buttons: [
        {
          text: 'Log In',
          onPress: onLogin,
        },
      ],
      cancelable: false,
    });
  },

  /**
   * Logout confirmation
   */
  logoutConfirm(onConfirm?: () => void, onCancel?: () => void): void {
    showConfirmAlert(
      'Logout',
      'Are you sure you want to log out?',
      onConfirm,
      onCancel,
      'Logout',
      'Cancel',
    );
  },

  /**
   * Delete confirmation
   */
  deleteConfirm(
    itemName: string,
    onConfirm?: () => void,
    onCancel?: () => void,
  ): void {
    showDestructiveAlert(
      'Delete',
      `Are you sure you want to delete ${itemName}?`,
      onConfirm,
      onCancel,
      'Delete',
      'Cancel',
    );
  },

  /**
   * Coming soon alert
   */
  comingSoon(): void {
    showInfoAlert('Coming Soon', 'This feature is coming soon!');
  },

  /**
   * Unsaved changes warning
   */
  unsavedChanges(onDiscard?: () => void, onCancel?: () => void): void {
    showDestructiveAlert(
      'Unsaved Changes',
      'You have unsaved changes. Are you sure you want to leave?',
      onDiscard,
      onCancel,
      'Discard',
      'Cancel',
    );
  },
};
