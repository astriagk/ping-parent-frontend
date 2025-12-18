import React, { createContext, useContext } from 'react';
import tokens, { Tokens } from './tokens';

const ThemeContext = createContext<Tokens>(tokens);

export const ThemeProvider = ({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme?: Partial<Tokens>;
}) => {
  const merged = { ...tokens, ...(theme || {}) } as Tokens;
  return (
    <ThemeContext.Provider value={merged}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
