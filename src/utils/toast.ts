import { Alert } from 'react-native';

// Toast state manager
let toastCallback:
  | ((message: string, type: 'success' | 'error') => void)
  | null = null;

export const setToastHandler = (
  callback: (message: string, type: 'success' | 'error') => void,
) => {
  toastCallback = callback;
};

export const showToast = (
  message: string,
  type: 'success' | 'error' = 'success',
) => {
  if (toastCallback) {
    toastCallback(message, type);
  } else {
    // Fallback to alert if toast handler not set up
    Alert.alert(type === 'success' ? 'Success' : 'Error', message);
  }
};

export const showSuccessToast = (message: string) => {
  showToast(message, 'success');
};

export const showErrorToast = (message: string) => {
  showToast(message, 'error');
};
