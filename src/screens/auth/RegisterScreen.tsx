import React from "react";
import { AuthLayout } from "@app/components/layouts/AuthLayout";
import { PhoneRegistrationForm } from "@app/components/forms/PhoneRegistrationForm";
import { useTranslation } from "@app/hooks/useTranslation";

export const RegisterScreen = () => {
  const { t } = useTranslation();

  return (
    <AuthLayout>
      <PhoneRegistrationForm />
    </AuthLayout>
  );
};
