import React from 'react';
import {
  TouchableOpacity,
  ActivityIndicator,
  TouchableOpacityProps,
  StyleProp,
  ViewStyle,
  Text as RNText,
  TextStyle,
} from 'react-native';
import { useTheme } from '../../theme/ThemeProvider';

type Variant = 'primary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

type Props = TouchableOpacityProps & {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  title: string;
  textStyle?: TextStyle;
  containerStyle?: StyleProp<ViewStyle>;
};

const Button: React.FC<Props> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  title,
  containerStyle,
  textStyle,
  ...rest
}) => {
  const theme = useTheme();
  const backgroundColor =
    variant === 'primary' ? theme.colors.primary : 'transparent';
  const padding = size === 'sm' ? 8 : size === 'lg' ? 18 : 12;
  const textColor = variant === 'primary' ? '#FFFFFF' : theme.colors.primary;

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      style={[
        {
          backgroundColor,
          padding,
          borderRadius: theme.radii.md,
          alignItems: 'center',
          justifyContent: 'center',
        },
        containerStyle,
      ]}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator color={textColor} />
      ) : (
        <RNText style={[{ color: textColor, fontWeight: '600' }, textStyle]}>
          {title}
        </RNText>
      )}
    </TouchableOpacity>
  );
};

export default Button;
