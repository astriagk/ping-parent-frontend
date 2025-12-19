// App slice state types
export type AppTheme = 'light' | 'dark' | 'system';
export type AppLanguage = 'en' | 'es' | 'fr' | 'de';

export type AppState = {
  theme: AppTheme;
  language: AppLanguage;
  isOnline: boolean;
  notificationsEnabled: boolean;
};
