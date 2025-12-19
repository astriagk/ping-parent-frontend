import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import { login as loginService } from '@services/auth';
import {
  LoadingSpinner,
  Input,
  PasswordInput,
  AuthFormLayout,
} from '@components';
import { authStorage, showSuccessAlert } from '@utils';
import { useDispatch } from 'react-redux';
import { authActions } from '@store';
import { useTheme } from '@theme/ThemeProvider';
import makeStyles from './styles';
import { LoginSchema } from '@schemas';
import { t } from '@locales';

export default function Login() {
  const theme = useTheme();
  const navigation: any = useNavigation();
  const dispatch = useDispatch();
  const [rememberMe, setRememberMe] = useState(false);
  const styles = makeStyles(theme);

  async function handleLogin(
    values: { emailOrPhone: string; password: string },
    helpers: any,
  ) {
    helpers.setSubmitting(true);
    try {
      const res = await loginService(values.emailOrPhone, values.password);
      if (res.success) {
        const token = res.data.token;
        await authStorage.setToken(token);
        if (rememberMe) await authStorage.setRememberMe(true);
        dispatch(authActions.setToken(token));
        showSuccessAlert(
          t('LOGIN.SUCCESS_TITLE'),
          t('LOGIN.SUCCESS_MESSAGE'),
          () => navigation.reset({ index: 0, routes: [{ name: 'Home' }] }),
        );
      } else {
        const err = res.error;
        const msg =
          err?.message ||
          (typeof err === 'string' ? err : t('LOGIN.INVALID_CREDENTIALS'));
        helpers.setFieldError('general', msg);
      }
    } catch (e: any) {
      helpers.setFieldError(
        'general',
        e?.message || t('LOGIN.CONNECTION_ERROR'),
      );
    } finally {
      helpers.setSubmitting(false);
    }
  }

  return (
    <AuthFormLayout
      contentContainerStyle={styles.container}
      innerStyle={styles.inner}
    >
      <Text style={styles.title}>{t('LOGIN.TITLE')}</Text>

      <Formik
        initialValues={{ emailOrPhone: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={handleLogin}
      >
        {(props: any) => {
          const {
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            isSubmitting,
          } = props;
          const errorCount = Object.keys(errors || {}).length;

          return (
            <View style={styles.fullWidth}>
              <Input
                value={values.emailOrPhone}
                onChangeText={handleChange('emailOrPhone')}
                onBlur={handleBlur('emailOrPhone')}
                placeholder={t('LOGIN.EMAIL_OR_PHONE_PLACEHOLDER')}
                keyboardType="email-address"
                autoCapitalize="none"
                editable={!isSubmitting}
                error={errors.emailOrPhone}
                touched={touched.emailOrPhone}
                accessibilityLabel="Email or Phone"
              />

              <PasswordInput
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                placeholder={t('LOGIN.PASSWORD_PLACEHOLDER')}
                editable={!isSubmitting}
                error={errors.password}
                touched={touched.password}
                accessibilityLabel="Password"
              />
              <View style={styles.rowBetween}>
                <TouchableOpacity
                  onPress={() => setRememberMe(r => !r)}
                  style={styles.rememberRow}
                  accessibilityRole="checkbox"
                  accessibilityState={{ checked: rememberMe }}
                >
                  <View
                    style={[
                      styles.checkbox,
                      rememberMe
                        ? styles.checkboxChecked
                        : styles.checkboxBorder,
                    ]}
                  >
                    {rememberMe ? (
                      <Text style={styles.checkboxCheck}>✓</Text>
                    ) : null}
                  </View>
                  <Text style={styles.rememberText}>
                    {t('LOGIN.REMEMBER_ME')}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => navigation.navigate('ForgotPassword')}
                >
                  <Text style={styles.link}>{t('LOGIN.FORGOT_PASSWORD')}</Text>
                </TouchableOpacity>
              </View>

              {errors.general ? (
                <Text style={styles.error}>{errors.general as any}</Text>
              ) : null}

              <TouchableOpacity
                style={
                  isSubmitting
                    ? styles.buttonSubmitting
                    : errorCount > 0
                    ? styles.buttonDisabled
                    : styles.button
                }
                onPress={handleSubmit as any}
                disabled={isSubmitting}
                accessibilityLabel="Login"
              >
                {isSubmitting ? (
                  <LoadingSpinner />
                ) : (
                  <Text style={styles.buttonText}>
                    {t('LOGIN.LOGIN_BUTTON')}
                  </Text>
                )}
              </TouchableOpacity>

              <View style={styles.registerRow}>
                <Text style={styles.mutedText}>{t('LOGIN.NO_ACCOUNT')}</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Register')}
                >
                  <Text style={styles.registerLink}>{t('LOGIN.REGISTER')}</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      </Formik>
    </AuthFormLayout>
  );
}
