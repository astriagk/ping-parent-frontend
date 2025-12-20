import { useThemeStore } from "@app/store/useThemeStore";
import { lightTheme, darkTheme } from "@app/config/gluestack-ui.config";

export const useTheme = () => {
  const { theme, colorScheme, setTheme, toggleTheme } = useThemeStore();

  const colors = colorScheme === "dark" ? darkTheme : lightTheme;
  const isDark = colorScheme === "dark";

  return {
    theme,
    colorScheme,
    colors,
    isDark,
    setTheme,
    toggleTheme,
  };
};
