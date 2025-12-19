import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import { t } from '@locales';
import { PhoneSchema } from '@schemas';
import { PhoneInput, LoadingSpinner } from '@components';
import type { PhoneStepFormValues } from '../types';
import type { Tokens } from '@theme/tokens';
import type { StyleSheet as StyleSheetType } from 'react-native';

interface PhoneStepProps {
  onSubmit: (values: PhoneStepFormValues, helpers: any) => Promise<void>;
  onNavigateToLogin: () => void;
  styles: ReturnType<(theme: Tokens) => StyleSheetType.NamedStyles<any>>;
}

export default function PhoneStep({
  onSubmit,
  onNavigateToLogin,
  styles,
}: PhoneStepProps) {
  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>{t('REGISTER_OTP.STEP_1_TITLE')}</Text>
      <Text style={styles.subtitle}>{t('REGISTER_OTP.STEP_1_SUBTITLE')}</Text>

      <Formik<PhoneStepFormValues>
        initialValues={{ phone: '' }}
        validationSchema={PhoneSchema}
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
            <PhoneInput
              value={values.phone}
              onChangeText={handleChange('phone')}
              placeholder={t('REGISTER_OTP.PHONE_PLACEHOLDER')}
              error={touched.phone ? errors.phone : undefined}
              touched={touched.phone}
              disabled={isSubmitting}
              testID="register-phone-input"
            />

            <TouchableOpacity
              style={[
                styles.submitButton,
                isSubmitting && styles.submitButtonDisabled,
              ]}
              onPress={() => handleSubmit()}
              disabled={isSubmitting}
              testID="register-send-code-button"
            >
              {isSubmitting ? (
                <LoadingSpinner animating size={20} color="#fff" />
              ) : (
                <Text style={styles.submitButtonText}>
                  {t('REGISTER_OTP.SEND_CODE_BUTTON')}
                </Text>
              )}
            </TouchableOpacity>
          </View>
        )}
      </Formik>

      {/* Login Link */}
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>
          {t('REGISTER_OTP.ALREADY_HAVE_ACCOUNT')}
        </Text>
        <TouchableOpacity
          onPress={onNavigateToLogin}
          testID="register-login-link"
        >
          <Text style={styles.loginLink}>{t('REGISTER_OTP.LOGIN_LINK')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
