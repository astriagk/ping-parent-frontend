import React from "react";
import { Input as GluestackInput, InputField } from "@gluestack-ui/themed";
import type { KeyboardTypeOptions } from "react-native";

interface InputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  error?: string;
  editable?: boolean;
  keyboardType?: KeyboardTypeOptions;
  maxLength?: number;
}

export const Input: React.FC<InputProps> = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  error,
  editable = true,
  keyboardType = "default",
  maxLength,
}) => {
  return (
    <GluestackInput isInvalid={!!error}>
      <InputField
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        editable={editable}
        keyboardType={keyboardType}
        maxLength={maxLength}
      />
    </GluestackInput>
  );
};
