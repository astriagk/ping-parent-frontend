import { ViewStyle } from 'react-native';

export interface OTPInputProps {
  /**
   * Number of OTP digits
   * @default 6
   */
  length?: number;

  /**
   * Current OTP value
   */
  value: string;

  /**
   * Callback when OTP changes
   */
  onChangeText: (otp: string) => void;

  /**
   * Callback when OTP is complete
   */
  onComplete?: (otp: string) => void;

  /**
   * Disable input
   */
  disabled?: boolean;

  /**
   * Error message
   */
  error?: string;

  /**
   * Whether field has been touched
   */
  touched?: boolean;

  /**
   * Custom container style
   */
  containerStyle?: ViewStyle;

  /**
   * Test ID for testing
   */
  testID?: string;
}
