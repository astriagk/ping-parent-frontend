import { appSlice } from './slice';

export { appSlice };
export const {
  setTheme,
  setLanguage,
  setOnlineStatus,
  setNotificationsEnabled,
} = appSlice.actions;
