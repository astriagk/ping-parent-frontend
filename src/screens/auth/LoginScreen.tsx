import React from "react";
import { LoginForm } from "@app/components/forms/LoginForm";
import { AuthLayout } from "@app/components/layouts/AuthLayout";

export const LoginScreen = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};
