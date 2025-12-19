import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import { t } from '@locales';
import { ProfileDetailsSchema } from '@schemas';
import { Input, LoadingSpinner } from '@components';
import type { ProfileStepFormValues } from '../types';
import type { Tokens } from '@theme/tokens';
import type { StyleSheet as StyleSheetType } from 'react-native';

interface ProfileStepProps {
  onSubmit: (values: ProfileStepFormValues, helpers: any) => Promise<void>;
  onSkip: () => Promise<void>;
  styles: ReturnType<(theme: Tokens) => StyleSheetType.NamedStyles<any>>;
}

export default function ProfileStep({
  onSubmit,
  onSkip,
  styles,
}: ProfileStepProps) {
  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>{t('REGISTER_OTP.STEP_3_TITLE')}</Text>
      <Text style={styles.subtitle}>{t('REGISTER_OTP.STEP_3_SUBTITLE')}</Text>

      <Formik<ProfileStepFormValues>
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          address: '',
        }}
        validationSchema={ProfileDetailsSchema}
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
              value={values.firstName}
              onChangeText={handleChange('firstName')}
              placeholder={t('REGISTER_OTP.FIRST_NAME_PLACEHOLDER')}
              error={touched.firstName ? errors.firstName : undefined}
              touched={touched.firstName}
              editable={!isSubmitting}
              testID="register-firstName-input"
            />

            <Input
              value={values.lastName}
              onChangeText={handleChange('lastName')}
              placeholder={t('REGISTER_OTP.LAST_NAME_PLACEHOLDER')}
              error={touched.lastName ? errors.lastName : undefined}
              touched={touched.lastName}
              editable={!isSubmitting}
              testID="register-lastName-input"
            />

            <Input
              value={values.email}
              onChangeText={handleChange('email')}
              placeholder={t('REGISTER_OTP.EMAIL_PLACEHOLDER')}
              keyboardType="email-address"
              autoCapitalize="none"
              error={touched.email ? errors.email : undefined}
              touched={touched.email}
              editable={!isSubmitting}
              testID="register-email-input"
            />

            <Input
              value={values.address || ''}
              onChangeText={handleChange('address')}
              placeholder={t('REGISTER_OTP.ADDRESS_PLACEHOLDER')}
              error={touched.address ? errors.address : undefined}
              touched={touched.address}
              editable={!isSubmitting}
              testID="register-address-input"
            />

            <TouchableOpacity
              style={[
                styles.submitButton,
                isSubmitting && styles.submitButtonDisabled,
              ]}
              onPress={() => handleSubmit()}
              disabled={isSubmitting}
              testID="register-complete-button"
            >
              {isSubmitting ? (
                <LoadingSpinner animating size={20} color="#fff" />
              ) : (
                <Text style={styles.submitButtonText}>
                  {t('REGISTER_OTP.COMPLETE_BUTTON')}
                </Text>
              )}
            </TouchableOpacity>

            {/* Skip Button */}
            <TouchableOpacity
              style={styles.skipButton}
              onPress={onSkip}
              disabled={isSubmitting}
              testID="register-skip-button"
            >
              <Text style={styles.skipButtonText}>
                {t('REGISTER_OTP.SKIP_BUTTON')}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}
