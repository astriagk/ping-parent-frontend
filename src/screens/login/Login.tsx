import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login as loginService } from '../../services/auth';
import LoadingSpinner from '../../components/LoadingSpinner';
import { useDispatch } from 'react-redux';
import { setToken } from '../../store/authSlice';
import { useTheme } from '../../theme/ThemeProvider';
import makeStyles from './styles';

const LoginSchema = Yup.object().shape({
  emailOrPhone: Yup.string()
    .required('Email or phone is required')
    .test(
      'email-or-phone',
      'Please enter a valid email address or phone number',
      (value: string | undefined) => {
        if (!value) return false;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9+\-() ]{6,20}$/;
        return emailRegex.test(value) || phoneRegex.test(value);
      },
    ),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
});

export default function Login() {
  const theme = useTheme();
  const navigation: any = useNavigation();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
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
        await AsyncStorage.setItem('auth_token', token);
        if (rememberMe) await AsyncStorage.setItem('remember_me', '1');
        dispatch(setToken(token));
        Alert.alert('Success', 'Logged in successfully', [
          {
            text: 'Continue',
            onPress: () =>
              navigation.reset({ index: 0, routes: [{ name: 'Home' }] }),
          },
        ]);
      } else {
        const err = res.error;
        const msg =
          err?.message ||
          (typeof err === 'string'
            ? err
            : 'Invalid credentials. Please try again.');
        helpers.setFieldError('general', msg);
      }
    } catch (e: any) {
      helpers.setFieldError(
        'general',
        e?.message || 'Unable to connect. Please check your internet.',
      );
    } finally {
      helpers.setSubmitting(false);
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.inner}>
          <Text style={styles.title}>Welcome Back</Text>

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
                  <TextInput
                    placeholder="Email or Phone Number"
                    placeholderTextColor={theme.colors.text.placeholder}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    style={styles.input}
                    onChangeText={handleChange('emailOrPhone')}
                    onBlur={handleBlur('emailOrPhone')}
                    value={values.emailOrPhone}
                    editable={!isSubmitting}
                    accessibilityLabel="Email or Phone"
                  />
                  {touched.emailOrPhone && errors.emailOrPhone ? (
                    <Text style={styles.error}>{errors.emailOrPhone}</Text>
                  ) : null}

                  <View style={styles.passwordRow}>
                    <TextInput
                      placeholder="Password"
                      placeholderTextColor={theme.colors.text.placeholder}
                      secureTextEntry={!showPassword}
                      style={styles.inputFlex}
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                      editable={!isSubmitting}
                      accessibilityLabel="Password"
                    />
                    <TouchableOpacity
                      onPress={() => setShowPassword(s => !s)}
                      style={styles.eye}
                      accessibilityLabel={
                        showPassword ? 'Hide password' : 'Show password'
                      }
                    >
                      <Text style={styles.eyeText}>
                        {showPassword ? '🙈' : '👁️'}
                      </Text>
                    </TouchableOpacity>
                  </View>
                  {touched.password && errors.password ? (
                    <Text style={styles.error}>{errors.password}</Text>
                  ) : null}

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
                        Remember me on this device
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => navigation.navigate('ForgotPassword')}
                    >
                      <Text style={styles.link}>Forgot Password?</Text>
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
                      <Text style={styles.buttonText}>Login</Text>
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
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
