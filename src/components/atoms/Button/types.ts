import {
  TouchableOpacityProps,
  TextStyle,
  StyleProp,
  ViewStyle,
} from 'react-native';

export type ButtonVariant = 'primary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export type ButtonProps = TouchableOpacityProps & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  title: string;
  textStyle?: TextStyle;
  containerStyle?: StyleProp<ViewStyle>;
};
