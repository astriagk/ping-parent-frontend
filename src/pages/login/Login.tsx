import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import {
  sendLoginOTP as sendLoginOTPService,
  verifyLoginOTP as verifyLoginOTPService,
} from '@services/auth';
import {
  LoadingSpinner,
  PhoneInput,
  OTPInput,
  AuthFormLayout,
} from '@components';
import { authStorage, showSuccessAlert } from '@utils';
import { useDispatch } from 'react-redux';
import { authActions } from '@store';
import { useTheme } from '@theme/ThemeProvider';
import makeStyles from './styles';
import * as Yup from 'yup';
import type { Country } from '@components/atoms/PhoneInput/types';

// Validation schemas
const PhoneSchema = Yup.object().shape({
  phone: Yup.string()
    .required('Phone number is required')
    .test(
      'phone-format',
      'Phone number is invalid',
      (value: string | undefined) => {
        if (!value) return false;
        const cleaned = value.replace(/\D/g, '');
        return cleaned.length >= 10;
      },
    ),
});

const OTPSchema = Yup.object().shape({
  otp: Yup.string()
    .required('OTP is required')
    .length(6, 'OTP must be 6 digits'),
});

export default function Login() {
  const theme = useTheme();
  const navigation: any = useNavigation();
  const dispatch = useDispatch();
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+1');
  const [devOTP, setDevOTP] = useState(''); // Store dev OTP for display
  const styles = makeStyles(theme);

  async function handleSendOTP(values: { phone: string }, helpers: any) {
    helpers.setSubmitting(true);
    try {
      const fullPhone = `${countryCode}${values.phone.replace(/\D/g, '')}`;
      const res = await sendLoginOTPService(fullPhone);

      if (res.success) {
        setPhoneNumber(fullPhone);
        if (res.otp) {
          setDevOTP(res.otp); // Store dev OTP
        }
        setStep('otp');
      } else {
        const err = res.error;
        // Check if phone is not registered
        if (err?.code === 'PHONE_NOT_REGISTERED') {
          helpers.setFieldError(
            'general',
            'Phone number not registered. Redirecting to registration...',
          );
          // Redirect to register after 2 seconds
          setTimeout(() => {
            navigation.navigate('Register', { phone: fullPhone });
          }, 2000);
        } else {
          const msg =
            err?.message ||
            (typeof err === 'string' ? err : 'Failed to send OTP');
          helpers.setFieldError('general', msg);
        }
      }
    } catch (e: any) {
      helpers.setFieldError(
        'general',
        e?.message || 'Connection error. Please try again.',
      );
    } finally {
      helpers.setSubmitting(false);
    }
  }

  async function handleVerifyOTP(values: { otp: string }, helpers: any) {
    helpers.setSubmitting(true);
    try {
      const res = await verifyLoginOTPService(phoneNumber, values.otp);

      if (res.success) {
        const token = res.data.token;
        await authStorage.setToken(token);
        dispatch(authActions.setToken(token));
        showSuccessAlert(
          'Login Successful',
          `Welcome back, ${res.data.user.firstName}!`,
          () => navigation.reset({ index: 0, routes: [{ name: 'Home' }] }),
        );
      } else {
        const err = res.error;
        const msg =
          err?.message ||
          (typeof err === 'string' ? err : 'Invalid or expired OTP');
        helpers.setFieldError('general', msg);
      }
    } catch (e: any) {
      helpers.setFieldError(
        'general',
        e?.message || 'Connection error. Please try again.',
      );
    } finally {
      helpers.setSubmitting(false);
    }
  }

  const handleResendOTP = async () => {
    try {
      const res = await sendLoginOTPService(phoneNumber);
      if (res.success) {
        if (res.otp) {
          setDevOTP(res.otp);
        }
        showSuccessAlert(
          'OTP Resent',
          'A new OTP has been sent to your phone.',
        );
      }
    } catch {
      // Silent fail for resend
    }
  };

  return (
    <AuthFormLayout
      contentContainerStyle={styles.container}
      innerStyle={styles.inner}
    >
      <Text style={styles.title}>
        {step === 'phone' ? 'Login with Phone' : 'Enter OTP'}
      </Text>

      {step === 'phone' ? (
        <Formik
          initialValues={{ phone: '' }}
          validationSchema={PhoneSchema}
          onSubmit={handleSendOTP}
        >
          {(props: any) => {
            const {
              handleChange,
              handleSubmit,
              values,
              errors,
              touched,
              isSubmitting,
            } = props;

            return (
              <View style={styles.fullWidth}>
                <PhoneInput
                  value={values.phone}
                  onChangeText={handleChange('phone')}
                  placeholder="Phone number"
                  error={errors.phone}
                  touched={touched.phone}
                  disabled={isSubmitting}
                  onChangeCountry={(country: Country) =>
                    setCountryCode(country.dialCode)
                  }
                  testID="login-phone-input"
                />

                {errors.general && (
                  <Text style={styles.error}>{errors.general as any}</Text>
                )}

                <TouchableOpacity
                  style={isSubmitting ? styles.buttonSubmitting : styles.button}
                  onPress={handleSubmit as any}
                  disabled={isSubmitting}
                  accessibilityLabel="Send OTP"
                >
                  {isSubmitting ? (
                    <LoadingSpinner />
                  ) : (
                    <Text style={styles.buttonText}>Send OTP</Text>
                  )}
                </TouchableOpacity>

                <View style={styles.registerRow}>
                  <Text style={styles.mutedText}>Don't have an account?</Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Register')}
                  >
                    <Text style={styles.registerLink}>Register</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        </Formik>
      ) : (
        <Formik
          initialValues={{ otp: '' }}
          validationSchema={OTPSchema}
          onSubmit={handleVerifyOTP}
        >
          {(props: any) => {
            const {
              handleChange,
              handleSubmit,
              values,
              errors,
              touched,
              isSubmitting,
              setFieldTouched,
            } = props;

            return (
              <View style={styles.fullWidth}>
                <Text style={styles.otpDescription}>
                  Enter the 6-digit code sent to {phoneNumber}
                </Text>

                {devOTP && (
                  <View style={styles.devOTPContainer}>
                    <Text style={styles.devOTPLabel}>Dev OTP:</Text>
                    <Text style={styles.devOTPText}>{devOTP}</Text>
                  </View>
                )}

                <OTPInput
                  length={6}
                  value={values.otp}
                  onChangeText={otp => {
                    handleChange('otp')(otp);
                    if (otp.length > 0) {
                      setFieldTouched('otp', true);
                    }
                  }}
                  onComplete={handleSubmit}
                  error={errors.otp}
                  touched={touched.otp}
                  disabled={isSubmitting}
                  testID="login-otp-input"
                />

                {errors.general && (
                  <Text style={styles.error}>{errors.general as any}</Text>
                )}

                <TouchableOpacity
                  style={isSubmitting ? styles.buttonSubmitting : styles.button}
                  onPress={handleSubmit as any}
                  disabled={isSubmitting || values.otp.length !== 6}
                  accessibilityLabel="Verify OTP"
                >
                  {isSubmitting ? (
                    <LoadingSpinner />
                  ) : (
                    <Text style={styles.buttonText}>Verify & Login</Text>
                  )}
                </TouchableOpacity>

                <View style={styles.otpActions}>
                  <TouchableOpacity onPress={handleResendOTP}>
                    <Text style={styles.link}>Resend OTP</Text>
                  </TouchableOpacity>
                  <Text style={styles.mutedText}> • </Text>
                  <TouchableOpacity onPress={() => setStep('phone')}>
                    <Text style={styles.link}>Change Number</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        </Formik>
      )}
    </AuthFormLayout>
  );
}
