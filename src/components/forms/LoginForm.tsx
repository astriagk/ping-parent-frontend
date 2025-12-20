import React from "react";
import { View, Text } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { useLogin } from "../../api/mutations/useLogin";

interface LoginFormData {
  email: string;
  password: string;
}

export const LoginForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();
  const loginMutation = useLogin();

  const onSubmit = (data: LoginFormData) => {
    loginMutation.mutate(data);
  };

  return (
    <View className="w-full">
      <Text className="text-3xl font-bold mb-8 text-center">Login</Text>

      <View className="mb-4">
        <Controller
          control={control}
          name="email"
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              value={value}
              onChangeText={onChange}
              placeholder="Email"
              error={errors.email?.message}
            />
          )}
        />
        {errors.email && (
          <Text className="text-red-500 text-sm mt-1">
            {errors.email.message}
          </Text>
        )}
      </View>

      <View className="mb-6">
        <Controller
          control={control}
          name="password"
          rules={{ required: "Password is required" }}
          render={({ field: { onChange, value } }) => (
            <Input
              value={value}
              onChangeText={onChange}
              placeholder="Password"
              secureTextEntry
              error={errors.password?.message}
            />
          )}
        />
        {errors.password && (
          <Text className="text-red-500 text-sm mt-1">
            {errors.password.message}
          </Text>
        )}
      </View>

      <Button
        onPress={handleSubmit(onSubmit)}
        title="Login"
        isLoading={loginMutation.isPending}
      />
    </View>
  );
};
