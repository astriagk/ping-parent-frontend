import { ViewStyle } from 'react-native';

export interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  error?: boolean;
  testID?: string;
  containerStyle?: ViewStyle;
}
