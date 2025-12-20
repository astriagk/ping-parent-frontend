import React from "react";
import { Button as GluestackButton, ButtonText } from "@gluestack-ui/themed";

interface ButtonProps {
  onPress: () => void;
  title: string;
  variant?: "solid" | "outline";
  isLoading?: boolean;
  isDisabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  onPress,
  title,
  variant = "solid",
  isLoading = false,
  isDisabled = false,
}) => {
  return (
    <GluestackButton
      onPress={onPress}
      variant={variant}
      isDisabled={isDisabled || isLoading}
    >
      <ButtonText>{isLoading ? "Loading..." : title}</ButtonText>
    </GluestackButton>
  );
};
