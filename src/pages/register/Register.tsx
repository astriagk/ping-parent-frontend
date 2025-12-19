import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { useTheme } from '@theme/ThemeProvider';
import { t } from '@locales';
import { sendOTP, verifyOTP, completeRegistration } from '@services/auth';
import { authStorage, showSuccessToast, showErrorAlert } from '@utils';
import { authActions } from '@store';
import { AuthFormLayout } from '@components';
import { PhoneStep, OTPStep, ProfileStep } from './steps';
import type {
  PhoneStepFormValues,
  OTPStepFormValues,
  ProfileStepFormValues,
} from './types';
import { makeStyles } from './styles';

type RegistrationStep = 1 | 2 | 3;

export default function Register() {
  const theme = useTheme();
  const styles = makeStyles(theme);
  const navigation: any = useNavigation();
  const dispatch = useDispatch();

  const [step, setStep] = useState<RegistrationStep>(1);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [_devOtp, setDevOtp] = useState<string | undefined>();
  const [resendTimer, setResendTimer] = useState(0);

  // Resend timer countdown
  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  const handleSendOTP = async (
    values: PhoneStepFormValues,
    { setSubmitting, setFieldError }: any,
  ) => {
    try {
      const result = await sendOTP(values.phone);

      if (result.success) {
        setPhoneNumber(values.phone);
        setDevOtp(result.otp); // Will be undefined in production
        setResendTimer(60); // 60 seconds countdown
        setStep(2);

        // Show toast with OTP in dev mode
        const message = result.otp
          ? `${t('REGISTER_OTP.CODE_SENT')} - ${t(
              'REGISTER_OTP.DEV_OTP_SHOWN',
            )}: ${result.otp}`
          : t('REGISTER_OTP.CODE_SENT');
        showSuccessToast(message);
      } else {
        if (result.error?.code === 'PHONE_EXISTS') {
          setFieldError('phone', t('REGISTER_OTP.ERRORS.PHONE_EXISTS'));
        } else {
          showErrorAlert(
            t('COMMON.ERROR'),
            result.error?.message || t('REGISTER_OTP.ERRORS.NETWORK_ERROR'),
          );
        }
      }
    } catch {
      showErrorAlert(t('COMMON.ERROR'), t('REGISTER_OTP.ERRORS.NETWORK_ERROR'));
    } finally {
      setSubmitting(false);
    }
  };

  const handleVerifyOTP = async (
    values: OTPStepFormValues,
    { setSubmitting, setFieldError }: any,
  ) => {
    try {
      const result = await verifyOTP(phoneNumber, values.otp);

      if (result.success) {
        setStep(3);
        showSuccessToast(t('REGISTER_OTP.CODE_VERIFIED'));
      } else {
        if (result.error?.code === 'INVALID_OTP') {
          setFieldError('otp', t('REGISTER_OTP.ERRORS.INVALID_OTP'));
        } else {
          showErrorAlert(
            t('COMMON.ERROR'),
            result.error?.message || t('REGISTER_OTP.ERRORS.NETWORK_ERROR'),
          );
        }
      }
    } catch {
      showErrorAlert(t('COMMON.ERROR'), t('REGISTER_OTP.ERRORS.NETWORK_ERROR'));
    } finally {
      setSubmitting(false);
    }
  };

  const handleCompleteRegistration = async (
    values: ProfileStepFormValues,
    { setSubmitting }: any,
  ) => {
    try {
      const result = await completeRegistration({
        phone: phoneNumber,
        email: values.email,
        firstName: values.firstName,
        lastName: values.lastName,
        address: values.address || undefined,
      });

      if (result.success && result.data) {
        // Save token
        await authStorage.setToken(result.data.token);
        dispatch(authActions.setToken(result.data.token));

        // Navigate to home
        navigation.reset({ index: 0, routes: [{ name: 'Home' }] });

        // Show success toast after navigation
        setTimeout(() => {
          showSuccessToast(t('REGISTER.SUCCESS_MESSAGE'));
        }, 500);
      } else {
        showErrorAlert(
          t('COMMON.ERROR'),
          result.error?.message || t('REGISTER.ERROR_REGISTRATION_FAILED'),
        );
      }
    } catch {
      showErrorAlert(t('COMMON.ERROR'), t('REGISTER.ERROR_NETWORK'));
    } finally {
      setSubmitting(false);
    }
  };

  const handleSkipProfile = async () => {
    // Complete registration with minimal data
    try {
      const result = await completeRegistration({
        phone: phoneNumber,
        email: `${phoneNumber.replace(/\D/g, '')}@temp.com`, // Temporary email
        firstName: 'User',
        lastName: phoneNumber.substring(phoneNumber.length - 4),
      });

      if (result.success && result.data) {
        await authStorage.setToken(result.data.token);
        dispatch(authActions.setToken(result.data.token));
        navigation.reset({ index: 0, routes: [{ name: 'Home' }] });
      } else {
        showErrorAlert(
          t('COMMON.ERROR'),
          result.error?.message || t('REGISTER.ERROR_REGISTRATION_FAILED'),
        );
      }
    } catch {
      showErrorAlert(t('COMMON.ERROR'), t('REGISTER.ERROR_NETWORK'));
    }
  };

  const handleResendOTP = async () => {
    try {
      const result = await sendOTP(phoneNumber);
      if (result.success) {
        setDevOtp(result.otp);
        setResendTimer(60);

        const message = result.otp
          ? `${t('REGISTER_OTP.CODE_SENT')} - ${t(
              'REGISTER_OTP.DEV_OTP_SHOWN',
            )}: ${result.otp}`
          : t('REGISTER_OTP.CODE_SENT');
        showSuccessToast(message);
      }
    } catch {
      showErrorAlert(t('COMMON.ERROR'), t('REGISTER_OTP.ERRORS.NETWORK_ERROR'));
    }
  };

  return (
    <AuthFormLayout
      contentContainerStyle={styles.container}
      innerStyle={styles.inner}
    >
      {step === 1 && (
        <PhoneStep
          onSubmit={handleSendOTP}
          onNavigateToLogin={() => navigation.navigate('Login')}
          styles={styles}
        />
      )}

      {step === 2 && (
        <OTPStep
          phoneNumber={phoneNumber}
          resendTimer={resendTimer}
          onSubmit={handleVerifyOTP}
          onResendOTP={handleResendOTP}
          styles={styles}
        />
      )}

      {step === 3 && (
        <ProfileStep
          onSubmit={handleCompleteRegistration}
          onSkip={handleSkipProfile}
          styles={styles}
        />
      )}
    </AuthFormLayout>
  );
}
