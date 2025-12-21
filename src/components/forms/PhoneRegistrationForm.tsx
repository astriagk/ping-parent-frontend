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
  FormControl,
  Heading,
} from "@app/components/ui";
import { useRegisterSendOTP } from "@app/api/mutations/useRegisterSendOTP";
import { useRegisterVerifyOTP } from "@app/api/mutations/useRegisterVerifyOTP";
import { useCompleteRegistration } from "@app/api/mutations/useCompleteRegistration";
import { useTranslation } from "@app/hooks/useTranslation";
import { useAuthStore } from "@app/store/useAuthStore";
import { getErrorMessage } from "@app/utils/helpers";
import { useNavigation } from "@react-navigation/native";
import type { AuthNavigationProp } from "@app/navigation/types";
import { ROUTES } from "@app/navigation/routes";

interface PhoneStepData {
  phone: string;
}

interface OTPStepData {
  otp: string;
}

interface DetailsStepData {
  email: string;
  firstName: string;
  lastName: string;
}

type RegistrationStep = "phone" | "otp" | "details";

export const PhoneRegistrationForm: React.FC = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<AuthNavigationProp>();
  const [currentStep, setCurrentStep] = useState<RegistrationStep>("phone");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [devOTP, setDevOTP] = useState<string>("");

  const sendOTPMutation = useRegisterSendOTP();
  const verifyOTPMutation = useRegisterVerifyOTP();
  const completeRegistrationMutation = useCompleteRegistration();
  const { setAuth } = useAuthStore();

  // Step 1: Phone number form
  const {
    control: phoneControl,
    handleSubmit: handlePhoneSubmit,
    formState: { errors: phoneErrors },
  } = useForm<PhoneStepData>();

  // Step 2: OTP verification form
  const {
    control: otpControl,
    handleSubmit: handleOTPSubmit,
    formState: { errors: otpErrors },
  } = useForm<OTPStepData>();

  // Step 3: User details form
  const {
    control: detailsControl,
    handleSubmit: handleDetailsSubmit,
    formState: { errors: detailsErrors },
  } = useForm<DetailsStepData>();

  // Step 1: Send OTP to phone
  const onSendOTP = (data: PhoneStepData) => {
    sendOTPMutation.mutate(
      { phone: data.phone },
      {
        onSuccess: (response) => {
          setPhoneNumber(data.phone);
          setCurrentStep("otp");
          if (response.otp) {
            setDevOTP(response.otp);
          }
        },
      }
    );
  };

  // Step 2: Verify OTP
  const onVerifyOTP = (data: OTPStepData) => {
    verifyOTPMutation.mutate(
      { phone: phoneNumber, otp: data.otp },
      {
        onSuccess: () => {
          setCurrentStep("details");
        },
      }
    );
  };

  // Step 3: Complete registration
  const onCompleteRegistration = (data: DetailsStepData) => {
    completeRegistrationMutation.mutate(
      {
        phone: phoneNumber,
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
      },
      {
        onSuccess: (response) => {
          setAuth(response.data.token, response.data.user);
        },
      }
    );
  };

  // Skip step 3 and complete with just phone number
  const onSkipDetails = () => {
    completeRegistrationMutation.mutate(
      {
        phone: phoneNumber,
      },
      {
        onSuccess: (response) => {
          setAuth(response.data.token, response.data.user);
        },
      }
    );
  };

  return (
    <VStack space="lg" className="w-full">
      <Heading size="xl" className="text-center mb-4">
        {t("auth.register.title")}
      </Heading>

      {/* Step 1: Phone Number */}
      {currentStep === "phone" && (
        <VStack space="md">
          <Text className="text-center text-typography-700 mb-4">
            {t("auth.register.enterPhone")}
          </Text>

          <FormControl isInvalid={!!phoneErrors.phone}>
            <Controller
              control={phoneControl}
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
                  size="lg"
                  className={phoneErrors.phone ? "border-error-500" : ""}
                >
                  <InputField
                    placeholder={t("auth.register.phonePlaceholder")}
                    value={value}
                    onChangeText={onChange}
                    keyboardType="phone-pad"
                    autoComplete="tel"
                  />
                </Input>
              )}
            />
            {phoneErrors.phone && (
              <Text className="text-error-500 text-sm mt-1">
                {phoneErrors.phone.message}
              </Text>
            )}
          </FormControl>

          {sendOTPMutation.isError && (
            <Text className="text-error-500 text-sm text-center">
              {getErrorMessage(
                sendOTPMutation.error,
                t("errors.sendOTPFailed")
              )}
            </Text>
          )}

          <Button
            size="lg"
            onPress={handlePhoneSubmit(onSendOTP)}
            isDisabled={sendOTPMutation.isPending}
            className="mt-4"
          >
            <ButtonText>
              {sendOTPMutation.isPending
                ? t("common.loading")
                : t("auth.register.sendOTP")}
            </ButtonText>
          </Button>
        </VStack>
      )}

      {/* Step 2: OTP Verification */}
      {currentStep === "otp" && (
        <VStack space="md">
          <Text className="text-center text-typography-700 mb-2">
            {t("auth.register.enterOTP")}
          </Text>
          <Text className="text-center text-typography-500 text-sm mb-4">
            {t("auth.register.otpSentTo")} {phoneNumber}
          </Text>

          {devOTP && (
            <Box className="bg-warning-100 p-3 rounded-lg mb-4">
              <Text className="text-warning-800 text-sm font-semibold">
                Dev Mode: Your OTP is {devOTP}
              </Text>
            </Box>
          )}

          <FormControl isInvalid={!!otpErrors.otp}>
            <Controller
              control={otpControl}
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
                  className={otpErrors.otp ? "border-error-500" : ""}
                >
                  <InputField
                    placeholder={t("auth.register.otpPlaceholder")}
                    value={value}
                    onChangeText={onChange}
                    keyboardType="number-pad"
                    maxLength={6}
                  />
                </Input>
              )}
            />
            {otpErrors.otp && (
              <Text className="text-error-500 text-sm mt-1">
                {otpErrors.otp.message}
              </Text>
            )}
          </FormControl>

          {verifyOTPMutation.isError && (
            <Text className="text-error-500 text-sm text-center">
              {getErrorMessage(
                verifyOTPMutation.error,
                t("errors.verifyOTPFailed")
              )}
            </Text>
          )}

          <Button
            size="lg"
            onPress={handleOTPSubmit(onVerifyOTP)}
            isDisabled={verifyOTPMutation.isPending}
            className="mt-4"
          >
            <ButtonText>
              {verifyOTPMutation.isPending
                ? t("common.loading")
                : t("auth.register.verifyOTP")}
            </ButtonText>
          </Button>

          <Button
            variant="link"
            size="sm"
            onPress={() => setCurrentStep("phone")}
            className="mt-2"
          >
            <ButtonText>{t("auth.register.changePhone")}</ButtonText>
          </Button>
        </VStack>
      )}

      {/* Step 3: User Details */}
      {currentStep === "details" && (
        <VStack space="md">
          <Text className="text-center text-typography-700 mb-4">
            {t("auth.register.completeProfile")}
          </Text>

          <FormControl isInvalid={!!detailsErrors.firstName}>
            <Controller
              control={detailsControl}
              name="firstName"
              rules={{
                minLength: {
                  value: 2,
                  message: t("errors.firstNameTooShort"),
                },
              }}
              render={({ field: { onChange, value } }) => (
                <Input
                  size="lg"
                  className={detailsErrors.firstName ? "border-error-500" : ""}
                >
                  <InputField
                    placeholder={t("auth.register.firstNamePlaceholder")}
                    value={value}
                    onChangeText={onChange}
                    autoComplete="given-name"
                  />
                </Input>
              )}
            />
            {detailsErrors.firstName && (
              <Text className="text-error-500 text-sm mt-1">
                {detailsErrors.firstName.message}
              </Text>
            )}
          </FormControl>

          <FormControl isInvalid={!!detailsErrors.lastName}>
            <Controller
              control={detailsControl}
              name="lastName"
              rules={{
                minLength: {
                  value: 2,
                  message: t("errors.lastNameTooShort"),
                },
              }}
              render={({ field: { onChange, value } }) => (
                <Input
                  size="lg"
                  className={detailsErrors.lastName ? "border-error-500" : ""}
                >
                  <InputField
                    placeholder={t("auth.register.lastNamePlaceholder")}
                    value={value}
                    onChangeText={onChange}
                    autoComplete="family-name"
                  />
                </Input>
              )}
            />
            {detailsErrors.lastName && (
              <Text className="text-error-500 text-sm mt-1">
                {detailsErrors.lastName.message}
              </Text>
            )}
          </FormControl>

          <FormControl isInvalid={!!detailsErrors.email}>
            <Controller
              control={detailsControl}
              name="email"
              rules={{
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: t("errors.emailInvalid"),
                },
              }}
              render={({ field: { onChange, value } }) => (
                <Input
                  size="lg"
                  className={detailsErrors.email ? "border-error-500" : ""}
                >
                  <InputField
                    placeholder={t("auth.register.emailPlaceholder")}
                    value={value}
                    onChangeText={onChange}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoComplete="email"
                  />
                </Input>
              )}
            />
            {detailsErrors.email && (
              <Text className="text-error-500 text-sm mt-1">
                {detailsErrors.email.message}
              </Text>
            )}
          </FormControl>

          {completeRegistrationMutation.isError && (
            <Text className="text-error-500 text-sm text-center">
              {getErrorMessage(
                completeRegistrationMutation.error,
                t("errors.registrationFailed")
              )}
            </Text>
          )}

          <Button
            size="lg"
            onPress={handleDetailsSubmit(onCompleteRegistration)}
            isDisabled={completeRegistrationMutation.isPending}
            className="mt-4"
          >
            <ButtonText>
              {completeRegistrationMutation.isPending
                ? t("common.loading")
                : t("auth.register.complete")}
            </ButtonText>
          </Button>

          <Button
            variant="outline"
            size="lg"
            onPress={onSkipDetails}
            isDisabled={completeRegistrationMutation.isPending}
            className="mt-2"
          >
            <ButtonText>{t("auth.register.skipForNow")}</ButtonText>
          </Button>
        </VStack>
      )}

      {/* Navigation to Login */}
      <Box className="mt-6">
        <Text className="text-center text-typography-600">
          {t("auth.register.alreadyHaveAccount")}{" "}
          <Text
            onPress={() => navigation.navigate(ROUTES.AUTH.LOGIN)}
            className="text-primary-600 font-semibold"
          >
            {t("auth.register.loginLink")}
          </Text>
        </Text>
      </Box>
    </VStack>
  );
};
