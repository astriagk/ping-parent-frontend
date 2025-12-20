import React from "react";
import { Box } from "@app/components/ui";

interface ScreenLayoutProps {
  children: React.ReactNode;
}

export const ScreenLayout: React.FC<ScreenLayoutProps> = ({ children }) => {
  return <Box className="flex-1 px-4 py-4">{children}</Box>;
};
