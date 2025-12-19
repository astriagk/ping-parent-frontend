import type { InputProps } from '../Input/types';

export type PasswordInputProps = Omit<InputProps, 'secureTextEntry'> & {
  showPasswordLabel?: string;
  hidePasswordLabel?: string;
};
