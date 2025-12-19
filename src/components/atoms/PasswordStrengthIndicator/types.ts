import { ViewStyle } from 'react-native';

export type PasswordStrength = 'weak' | 'medium' | 'strong' | null;

export interface PasswordStrengthIndicatorProps {
  password: string;
  containerStyle?: ViewStyle;
  showLabel?: boolean;
}
