import React from "react";
import { Text } from "@app/components/ui";
import { MainLayout } from "@/src/components/layouts/MainLayout";

export const ProfileScreen = () => {
  return (
    <MainLayout title="Profile">
      <Text className="text-2xl font-bold">Profile Screen</Text>
    </MainLayout>
  );
};
