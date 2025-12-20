import React, { useState } from "react";
import { View, Text } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Input } from "@components/ui/Input";
import { Button } from "@components/ui/Button";
import { useSendOTP } from "@api/mutations/useSendOTP";
import { useVerifyOTP } from "@api/mutations/useVerifyOTP";
import { useTranslation } from "@hooks/useTranslation";

interface LoginFormData {
  phone: string;
  otp: string;
}

export const LoginForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<LoginFormData>();
  const sendOTPMutation = useSendOTP();
  const verifyOTPMutation = useVerifyOTP();
  const { t } = useTranslation();
  const [otpSent, setOtpSent] = useState(false);
  const [devOTP, setDevOTP] = useState<string>("");

  const phone = watch("phone");

  const onSendOTP = () => {
    if (!phone) {
      return;
    }

    sendOTPMutation.mutate(
      { phone },
      {
        onSuccess: (data) => {
          setOtpSent(true);
          // Store dev OTP for display
          if (data.otp) {
            setDevOTP(data.otp);
          }
        },
      }
    );
  };

  const onVerifyOTP = (data: LoginFormData) => {
    verifyOTPMutation.mutate({
      phone: data.phone,
      otp: data.otp,
    });
  };

  return (
    <View className="w-full">
      <Text className="text-3xl font-bold mb-8 text-center">
        {t("auth.login.title")}
      </Text>

      <View className="mb-4">
        <Controller
          control={control}
          name="phone"
          rules={{
            required: t("errors.phoneRequired"),
            pattern: {
              value: /^\+?[1-9]\d{1,14}$/,
              message: t("errors.phoneInvalid"),
            },
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              value={value}
              onChangeText={onChange}
              placeholder={t("auth.login.phone")}
              error={errors.phone?.message}
              editable={!otpSent}
            />
          )}
        />
        {errors.phone && (
          <Text className="text-red-500 text-sm mt-1">
            {errors.phone.message}
          </Text>
        )}
      </View>

      {!otpSent ? (
        <Button
          onPress={onSendOTP}
          title={t("auth.login.sendOTP")}
          isLoading={sendOTPMutation.isPending}
          isDisabled={!phone || !!errors.phone}
        />
      ) : (
        <>
          {devOTP && (
            <View className="mb-4 p-3 bg-yellow-100 rounded">
              <Text className="text-sm text-yellow-800 font-medium">
                {t("auth.login.devOTP")}: {devOTP}
              </Text>
            </View>
          )}

          <View className="mb-6">
            <Controller
              control={control}
              name="otp"
              rules={{
                required: t("errors.otpRequired"),
                pattern: {
                  value: /^\d{6}$/,
                  message: t("errors.otpInvalid"),
                },
              }}
              render={({ field: { onChange, value } }) => (
                <Input
                  value={value}
                  onChangeText={onChange}
                  placeholder={t("auth.login.otp")}
                  error={errors.otp?.message}
                  keyboardType="number-pad"
                  maxLength={6}
                />
              )}
            />
            {errors.otp && (
              <Text className="text-red-500 text-sm mt-1">
                {errors.otp.message}
              </Text>
            )}
          </View>

          <Button
            onPress={handleSubmit(onVerifyOTP)}
            title={t("auth.login.verifyOTP")}
            isLoading={verifyOTPMutation.isPending}
          />

          <Button
            onPress={() => {
              setOtpSent(false);
              setDevOTP("");
            }}
            title={t("auth.login.resendOTP")}
            variant="outline"
            isDisabled={
              sendOTPMutation.isPending || verifyOTPMutation.isPending
            }
          />
        </>
      )}
    </View>
  );
};
