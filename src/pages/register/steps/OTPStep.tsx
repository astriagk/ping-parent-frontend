import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import { t } from '@locales';
import { OTPSchema } from '@schemas';
import { Input, LoadingSpinner } from '@components';
import type { OTPStepFormValues } from '../types';
import type { Tokens } from '@theme/tokens';
import type { StyleSheet as StyleSheetType } from 'react-native';

interface OTPStepProps {
  phoneNumber: string;
  resendTimer: number;
  onSubmit: (values: OTPStepFormValues, helpers: any) => Promise<void>;
  onResendOTP: () => Promise<void>;
  styles: ReturnType<(theme: Tokens) => StyleSheetType.NamedStyles<any>>;
}

export default function OTPStep({
  phoneNumber,
  resendTimer,
  onSubmit,
  onResendOTP,
  styles,
}: OTPStepProps) {
  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>{t('REGISTER_OTP.STEP_2_TITLE')}</Text>
      <Text style={styles.subtitle}>
        {t('REGISTER_OTP.STEP_2_SUBTITLE')} {phoneNumber}
      </Text>

      <Formik<OTPStepFormValues>
        initialValues={{ otp: '' }}
        validationSchema={OTPSchema}
        onSubmit={onSubmit}
      >
        {({
          handleChange,
          handleSubmit,
          values,
          errors,
          touched,
          isSubmitting,
        }) => (
          <View>
            <Input
              value={values.otp}
              onChangeText={handleChange('otp')}
              placeholder={t('REGISTER_OTP.OTP_PLACEHOLDER')}
              keyboardType="number-pad"
              maxLength={6}
              error={touched.otp ? errors.otp : undefined}
              touched={touched.otp}
              editable={!isSubmitting}
              testID="register-otp-input"
            />

            {/* Resend OTP */}
            {resendTimer > 0 ? (
              <Text style={styles.resendTimer}>
                {t('REGISTER_OTP.RESEND_CODE_IN')} {resendTimer}{' '}
                {t('REGISTER_OTP.SECONDS')}
              </Text>
            ) : (
              <TouchableOpacity
                onPress={onResendOTP}
                style={styles.resendButton}
              >
                <Text style={styles.resendButtonText}>
                  {t('REGISTER_OTP.RESEND_CODE')}
                </Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity
              style={[
                styles.submitButton,
                isSubmitting && styles.submitButtonDisabled,
              ]}
              onPress={() => handleSubmit()}
              disabled={isSubmitting}
              testID="register-verify-button"
            >
              {isSubmitting ? (
                <LoadingSpinner animating size={20} color="#fff" />
              ) : (
                <Text style={styles.submitButtonText}>
                  {t('REGISTER_OTP.VERIFY_BUTTON')}
                </Text>
              )}
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}
