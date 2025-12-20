import React from "react";
import { LoginForm } from "@components/forms/LoginForm";
import { AuthLayout } from "@components/layouts/AuthLayout";

export const LoginScreen = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};
