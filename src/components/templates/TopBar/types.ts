import { ViewStyle, ImageSourcePropType } from 'react-native';

export interface TopBarProps {
  /**
   * Callback when menu icon is pressed
   */
  onMenuPress?: () => void;

  /**
   * Callback when search icon is pressed
   */
  onSearchPress?: () => void;

  /**
   * Callback when profile avatar is pressed
   */
  onProfilePress?: () => void;

  /**
   * Avatar image source (URL or local require)
   */
  avatarSource?: ImageSourcePropType;

  /**
   * Show search icon
   * @default true
   */
  showSearch?: boolean;

  /**
   * Show menu icon
   * @default true
   */
  showMenu?: boolean;

  /**
   * Show profile avatar
   * @default true
   */
  showProfile?: boolean;

  /**
   * Custom container style
   */
  containerStyle?: ViewStyle;

  /**
   * Test ID for testing
   */
  testID?: string;
}
