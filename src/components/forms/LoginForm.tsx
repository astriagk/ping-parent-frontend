import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  VStack,
  Box,
  Text,
  Input,
  InputField,
  Button,
  ButtonText,
} from "@app/components/ui";
import { useSendOTP } from "@app/api/mutations/useSendOTP";
import { useVerifyOTP } from "@app/api/mutations/useVerifyOTP";
import { useTranslation } from "@app/hooks/useTranslation";

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
    <VStack space="md" className="w-full">
      <Text className="text-2xl font-bold mb-8 text-center">
        {t("auth.login.title")}
      </Text>

      <Box className="mb-4">
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
            <Input size="lg" className={errors.phone ? "border-error-500" : ""}>
              <InputField
                value={value}
                onChangeText={onChange}
                placeholder={t("auth.login.phone")}
                editable={!otpSent}
              />
            </Input>
          )}
        />
        {errors.phone && (
          <Text className="text-error-500 text-sm mt-1">
            {errors.phone.message}
          </Text>
        )}
      </Box>

      {!otpSent ? (
        <Button
          size="lg"
          onPress={onSendOTP}
          isDisabled={!phone || !!errors.phone || sendOTPMutation.isPending}
        >
          <ButtonText>
            {sendOTPMutation.isPending ? "Loading..." : t("auth.login.sendOTP")}
          </ButtonText>
        </Button>
      ) : (
        <>
          {devOTP && (
            <Box className="mb-4 p-3 bg-yellow-100 rounded-lg">
              <Text className="text-sm text-yellow-800 font-medium">
                {t("auth.login.devOTP")}: {devOTP}
              </Text>
            </Box>
          )}

          <Box className="mb-6">
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
                  size="lg"
                  className={errors.otp ? "border-error-500" : ""}
                >
                  <InputField
                    value={value}
                    onChangeText={onChange}
                    placeholder={t("auth.login.otp")}
                    keyboardType="number-pad"
                    maxLength={6}
                  />
                </Input>
              )}
            />
            {errors.otp && (
              <Text className="text-error-500 text-sm mt-1">
                {errors.otp.message}
              </Text>
            )}
          </Box>

          <Button
            size="lg"
            onPress={handleSubmit(onVerifyOTP)}
            isDisabled={verifyOTPMutation.isPending}
          >
            <ButtonText>
              {verifyOTPMutation.isPending
                ? "Loading..."
                : t("auth.login.verifyOTP")}
            </ButtonText>
          </Button>

          <Button
            size="lg"
            onPress={() => {
              setOtpSent(false);
              setDevOTP("");
            }}
            variant="outline"
            isDisabled={
              sendOTPMutation.isPending || verifyOTPMutation.isPending
            }
            className="border"
          >
            <ButtonText>{t("auth.login.resendOTP")}</ButtonText>
          </Button>
        </>
      )}
    </VStack>
  );
};
