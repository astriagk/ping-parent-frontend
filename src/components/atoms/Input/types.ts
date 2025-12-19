import type { TextInputProps, KeyboardTypeOptions } from 'react-native';

export type InputVariant = 'default' | 'error';

export type InputProps = {
  value: string;
  onChangeText: (text: string) => void;
  onBlur?: () => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  editable?: boolean;
  error?: string;
  touched?: boolean;
  variant?: InputVariant;
  accessibilityLabel?: string;
  testID?: string;
} & Pick<TextInputProps, 'multiline' | 'numberOfLines' | 'maxLength'>;
