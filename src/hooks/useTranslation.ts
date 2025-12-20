import { useCallback } from "react";
import en from "../locales/en.json";

/**
 * Simple translation hook
 * Usage: const { t } = useTranslation();
 * t('app.name') => 'Ping Parent'
 */
export const useTranslation = () => {
  const t = useCallback((key: string): string => {
    const keys = key.split(".");
    let value: any = en;

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }

    return typeof value === "string" ? value : key;
  }, []);

  return { t };
};
