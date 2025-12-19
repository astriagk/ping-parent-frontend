import { ViewStyle } from 'react-native';

export interface Country {
  code: string;
  name: string;
  dialCode: string;
  flag: string;
}

export interface PhoneInputProps {
  value: string;
  onChangeText: (text: string) => void;
  onChangeCountry?: (country: Country) => void;
  placeholder?: string;
  error?: string;
  touched?: boolean;
  disabled?: boolean;
  testID?: string;
  containerStyle?: ViewStyle;
  defaultCountry?: string;
}
