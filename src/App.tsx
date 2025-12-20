import React from "react";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useColorScheme } from "react-native";
import { RootNavigator } from "./navigation/RootNavigator";
import { config } from "./config/gluestack-ui.config";
import { useThemeStore } from "./store/useThemeStore";
import { useEffect } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

export default function App() {
  const systemColorScheme = useColorScheme();
  const { theme, colorScheme, setColorScheme } = useThemeStore();

  useEffect(() => {
    if (theme === "system") {
      setColorScheme(systemColorScheme || "light");
    } else {
      setColorScheme(theme);
    }
  }, [theme, systemColorScheme, setColorScheme]);

  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <GluestackUIProvider config={config} colorMode={colorScheme}>
          <RootNavigator />
        </GluestackUIProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
