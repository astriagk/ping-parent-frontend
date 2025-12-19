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
