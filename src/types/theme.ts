// Theme-related types
import type { Tokens } from '../theme/tokens';

export type { Tokens };

// Theme provider types
export type ThemeContextType = {
  theme: Tokens;
  updateTheme?: (updates: Partial<Tokens>) => void;
};
