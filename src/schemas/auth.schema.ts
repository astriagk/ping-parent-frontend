import * as Yup from 'yup';
import { t } from '@locales';

export const LoginSchema = Yup.object().shape({
  emailOrPhone: Yup.string()
    .required(t('LOGIN.VALIDATIONS.EMAIL_OR_PHONE_REQUIRED'))
    .test(
      'email-or-phone',
      t('LOGIN.VALIDATIONS.EMAIL_OR_PHONE_INVALID'),
      (value: string | undefined) => {
        if (!value) return false;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9+\-() ]{6,20}$/;
        return emailRegex.test(value) || phoneRegex.test(value);
      },
    ),
  password: Yup.string()
    .required(t('LOGIN.VALIDATIONS.PASSWORD_REQUIRED'))
    .min(6, t('LOGIN.VALIDATIONS.PASSWORD_MIN_LENGTH')),
});

export const RegisterSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('First name is required')
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name must be less than 50 characters'),
  lastName: Yup.string()
    .required('Last name is required')
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name must be less than 50 characters'),
  email: Yup.string()
    .required('Please enter a valid email address')
    .email('Please enter a valid email address')
    .matches(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      'Please enter a valid email address',
    ),
  phone: Yup.string()
    .required('Phone number is invalid')
    .test(
      'phone-format',
      'Phone number is invalid',
      (value: string | undefined) => {
        if (!value) return false;
        const cleaned = value.replace(/\D/g, '');
        return cleaned.length >= 10;
      },
    ),
  password: Yup.string()
    .required('Password must be at least 8 characters')
    .min(8, 'Password must be at least 8 characters')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number'),
  confirmPassword: Yup.string()
    .required('Passwords do not match')
    .oneOf([Yup.ref('password')], 'Passwords do not match'),
  acceptTerms: Yup.boolean()
    .required('You must agree to the Terms & Conditions')
    .oneOf([true], 'You must agree to the Terms & Conditions'),
});

// Phone-based registration schemas
export const PhoneSchema = Yup.object().shape({
  phone: Yup.string()
    .required(t('REGISTER_OTP.VALIDATIONS.PHONE_REQUIRED'))
    .test(
      'phone-format',
      t('REGISTER_OTP.VALIDATIONS.PHONE_INVALID'),
      (value: string | undefined) => {
        if (!value) return false;
        const cleaned = value.replace(/\D/g, '');
        return cleaned.length >= 10;
      },
    ),
});

export const OTPSchema = Yup.object().shape({
  otp: Yup.string()
    .required(t('REGISTER_OTP.VALIDATIONS.OTP_REQUIRED'))
    .matches(/^\d{6}$/, t('REGISTER_OTP.VALIDATIONS.OTP_INVALID')),
});

export const ProfileDetailsSchema = Yup.object().shape({
  firstName: Yup.string()
    .required(t('REGISTER_OTP.VALIDATIONS.FIRST_NAME_REQUIRED'))
    .min(2, t('REGISTER_OTP.VALIDATIONS.FIRST_NAME_MIN'))
    .max(50, t('REGISTER_OTP.VALIDATIONS.FIRST_NAME_MAX')),
  lastName: Yup.string()
    .required(t('REGISTER_OTP.VALIDATIONS.LAST_NAME_REQUIRED'))
    .min(2, t('REGISTER_OTP.VALIDATIONS.LAST_NAME_MIN'))
    .max(50, t('REGISTER_OTP.VALIDATIONS.LAST_NAME_MAX')),
  email: Yup.string()
    .required(t('REGISTER_OTP.VALIDATIONS.EMAIL_REQUIRED'))
    .email(t('REGISTER_OTP.VALIDATIONS.EMAIL_INVALID'))
    .matches(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      t('REGISTER_OTP.VALIDATIONS.EMAIL_INVALID'),
    ),
  address: Yup.string().optional(),
});
