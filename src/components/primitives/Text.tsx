import React from 'react';
import { Text as RNText, TextProps, TextStyle } from 'react-native';
import { useTheme } from '../../theme/ThemeProvider';

type Variant = 'body' | 'title' | 'caption';

type Props = TextProps & { variant?: Variant; style?: TextStyle };

const Text: React.FC<Props> = ({
  children,
  variant = 'body',
  style,
  ...rest
}) => {
  const theme = useTheme();
  const baseStyle: TextStyle = {
    color: theme.colors.text.primary,
    fontSize: theme.fontSizes.md,
  };

  if (variant === 'title') baseStyle.fontSize = theme.fontSizes.xl;
  if (variant === 'caption') baseStyle.fontSize = theme.fontSizes.sm;

  return (
    <RNText style={[baseStyle, style]} {...rest}>
      {children}
    </RNText>
  );
};

export default Text;
