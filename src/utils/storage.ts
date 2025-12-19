import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Storage utility functions for AsyncStorage operations
 * Centralizes storage keys and operations for consistency
 */

// Storage Keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'auth_token',
  REMEMBER_ME: 'remember_me',
  USER_DATA: 'user_data',
  THEME_PREFERENCE: 'theme_preference',
  LANGUAGE: 'language',
} as const;

/**
 * Set a value in storage
 */
export async function setStorageItem(
  key: string,
  value: string,
): Promise<void> {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.error(`Error setting storage item ${key}:`, error);
    throw error;
  }
}

/**
 * Get a value from storage
 */
export async function getStorageItem(key: string): Promise<string | null> {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    console.error(`Error getting storage item ${key}:`, error);
    return null;
  }
}

/**
 * Remove a value from storage
 */
export async function removeStorageItem(key: string): Promise<void> {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error(`Error removing storage item ${key}:`, error);
    throw error;
  }
}

/**
 * Clear all storage
 */
export async function clearStorage(): Promise<void> {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.error('Error clearing storage:', error);
    throw error;
  }
}

/**
 * Set multiple items in storage
 */
export async function setMultipleStorageItems(
  items: Array<[string, string]>,
): Promise<void> {
  try {
    await AsyncStorage.multiSet(items);
  } catch (error) {
    console.error('Error setting multiple storage items:', error);
    throw error;
  }
}

/**
 * Get multiple items from storage
 */
export async function getMultipleStorageItems(
  keys: string[],
): Promise<readonly [string, string | null][]> {
  try {
    return await AsyncStorage.multiGet(keys);
  } catch (error) {
    console.error('Error getting multiple storage items:', error);
    return [];
  }
}

/**
 * Remove multiple items from storage
 */
export async function removeMultipleStorageItems(
  keys: string[],
): Promise<void> {
  try {
    await AsyncStorage.multiRemove(keys);
  } catch (error) {
    console.error('Error removing multiple storage items:', error);
    throw error;
  }
}

// Auth-specific utilities
export const authStorage = {
  async setToken(token: string): Promise<void> {
    await setStorageItem(STORAGE_KEYS.AUTH_TOKEN, token);
  },

  async getToken(): Promise<string | null> {
    return await getStorageItem(STORAGE_KEYS.AUTH_TOKEN);
  },

  async removeToken(): Promise<void> {
    await removeStorageItem(STORAGE_KEYS.AUTH_TOKEN);
  },

  async setRememberMe(value: boolean): Promise<void> {
    await setStorageItem(STORAGE_KEYS.REMEMBER_ME, value ? '1' : '0');
  },

  async getRememberMe(): Promise<boolean> {
    const value = await getStorageItem(STORAGE_KEYS.REMEMBER_ME);
    return value === '1';
  },

  async clearAuth(): Promise<void> {
    await removeMultipleStorageItems([
      STORAGE_KEYS.AUTH_TOKEN,
      STORAGE_KEYS.REMEMBER_ME,
    ]);
  },
};

// User data utilities
export const userStorage = {
  async setUserData(data: object): Promise<void> {
    await setStorageItem(STORAGE_KEYS.USER_DATA, JSON.stringify(data));
  },

  async getUserData<T = any>(): Promise<T | null> {
    const data = await getStorageItem(STORAGE_KEYS.USER_DATA);
    return data ? JSON.parse(data) : null;
  },

  async removeUserData(): Promise<void> {
    await removeStorageItem(STORAGE_KEYS.USER_DATA);
  },
};

// Preferences utilities
export const preferencesStorage = {
  async setTheme(theme: string): Promise<void> {
    await setStorageItem(STORAGE_KEYS.THEME_PREFERENCE, theme);
  },

  async getTheme(): Promise<string | null> {
    return await getStorageItem(STORAGE_KEYS.THEME_PREFERENCE);
  },

  async setLanguage(language: string): Promise<void> {
    await setStorageItem(STORAGE_KEYS.LANGUAGE, language);
  },

  async getLanguage(): Promise<string | null> {
    return await getStorageItem(STORAGE_KEYS.LANGUAGE);
  },
};
