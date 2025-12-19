import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { AppState, AppTheme, AppLanguage } from './types';

const initialState: AppState = {
  theme: 'system',
  language: 'en',
  isOnline: true,
  notificationsEnabled: true,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<AppTheme>) {
      state.theme = action.payload;
    },
    setLanguage(state, action: PayloadAction<AppLanguage>) {
      state.language = action.payload;
    },
    setOnlineStatus(state, action: PayloadAction<boolean>) {
      state.isOnline = action.payload;
    },
    setNotificationsEnabled(state, action: PayloadAction<boolean>) {
      state.notificationsEnabled = action.payload;
    },
  },
});
