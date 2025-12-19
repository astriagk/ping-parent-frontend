import { Alert, AlertButton, Platform } from 'react-native';
import { t } from '@locales';

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
        text: t('ALERTS.OK'),
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
        text: t('ALERTS.OK'),
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
  confirmText: string = t('ALERTS.YES'),
  cancelText: string = t('ALERTS.NO'),
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
        text: t('ALERTS.OK'),
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
  confirmText: string = t('ALERTS.DELETE'),
  cancelText: string = t('ALERTS.CANCEL'),
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
  buttonText: string = t('ALERTS.OK'),
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
        buttons: [{ text: t('ALERTS.OK'), onPress: onOk }],
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
        buttons: [{ text: t('ALERTS.OK'), onPress: onOk }],
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
      t('ALERTS.CONNECTION_ERROR.TITLE'),
      t('ALERTS.CONNECTION_ERROR.MESSAGE'),
      onRetry,
    );
  },

  /**
   * Session expired alert
   */
  sessionExpired(onLogin?: () => void): void {
    showAlert({
      title: t('ALERTS.SESSION_EXPIRED.TITLE'),
      message: t('ALERTS.SESSION_EXPIRED.MESSAGE'),
      buttons: [
        {
          text: t('ALERTS.LOG_IN'),
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
      t('ALERTS.LOGOUT_CONFIRM.TITLE'),
      t('ALERTS.LOGOUT_CONFIRM.MESSAGE'),
      onConfirm,
      onCancel,
      t('ALERTS.LOGOUT'),
      t('ALERTS.CANCEL'),
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
      t('ALERTS.DELETE_CONFIRM.TITLE'),
      `${t('ALERTS.DELETE_CONFIRM.MESSAGE')} ${itemName}?`,
      onConfirm,
      onCancel,
      t('ALERTS.DELETE'),
      t('ALERTS.CANCEL'),
    );
  },

  /**
   * Coming soon alert
   */
  comingSoon(): void {
    showInfoAlert(
      t('ALERTS.COMING_SOON.TITLE'),
      t('ALERTS.COMING_SOON.MESSAGE'),
    );
  },

  /**
   * Unsaved changes warning
   */
  unsavedChanges(onDiscard?: () => void, onCancel?: () => void): void {
    showDestructiveAlert(
      t('ALERTS.UNSAVED_CHANGES.TITLE'),
      t('ALERTS.UNSAVED_CHANGES.MESSAGE'),
      onDiscard,
      onCancel,
      t('ALERTS.DISCARD'),
      t('ALERTS.CANCEL'),
    );
  },
};
