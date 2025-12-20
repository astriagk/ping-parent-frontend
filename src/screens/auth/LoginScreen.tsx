import React from "react";
import { LoginForm } from "@app/components/forms/LoginForm";
import { ScreenLayout } from "@app/components/layouts/ScreenLayout";

export const LoginScreen = () => {
  return (
    <ScreenLayout>
      <LoginForm />
    </ScreenLayout>
  );
};
