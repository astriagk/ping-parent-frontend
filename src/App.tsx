import React, { useEffect } from "react";
import "@/global.css";
import { GluestackUIProvider } from "@app/components/ui";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useColorScheme } from "react-native";
import { RootNavigator } from "@app/navigation/RootNavigator";
import { useThemeStore } from "@app/store/useThemeStore";

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
        <GluestackUIProvider mode={colorScheme as "light" | "dark"}>
          <RootNavigator />
        </GluestackUIProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
