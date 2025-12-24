import React from "react";
import { Box } from "@app/components/ui";
import { Header } from "@app/components/common/Header";

interface MainLayoutProps {
  title: string;
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ title, children }) => {
  return (
    <Box className="flex-1 bg-background-0">
      {/* <Header title={title} /> */}
      <Box className="flex-1 p-4">{children}</Box>
    </Box>
  );
};
