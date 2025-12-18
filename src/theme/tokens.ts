export const tokens = {
  colors: {
    primary: '#007AFF',
    background: '#FFFFFF',
    surface: '#FFFFFF',
    text: {
      primary: '#111827',
      muted: '#6B7280',
      error: '#FF3B30',
      placeholder: '#8E8E93',
    },
    border: '#E5E7EB',
    success: '#10B981',
    warning: '#F59E0B',
    splash: { background: '#0b1220', text: '#FFFFFF', version: '#aaaaaa' },
  },
  spacing: { xs: 4, sm: 8, md: 12, lg: 16, xl: 24 },
  radii: { sm: 4, md: 8, lg: 12 },
  fonts: { body: 'System', medium: 'System' },
  fontSizes: { sm: 12, md: 14, lg: 18, xl: 24 },
} as const;

export type Tokens = typeof tokens;

export default tokens;
