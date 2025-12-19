import type { RootState } from '../store';

// App selectors
export const selectApp = (state: RootState) => state.app;
export const selectAppTheme = (state: RootState) => state.app?.theme;
export const selectAppLanguage = (state: RootState) => state.app?.language;
export const selectIsOnline = (state: RootState) => state.app?.isOnline;
export const selectNotificationsEnabled = (state: RootState) =>
  state.app?.notificationsEnabled;
