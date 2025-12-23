import React from "react";
import { Text } from "@app/components/ui";
import { useAuthStore } from "@app/store/useAuthStore";
import { MainLayout } from "@app/components/layouts/MainLayout";
import {
  Toast,
  ToastTitle,
  ToastDescription,
  useToast,
} from "@/src/components/ui/toast";
import { Button, ButtonText } from "@/src/components/ui/button";
import { Alert, AlertIcon, AlertText } from "@/src/components/ui/alert";
import { InfoIcon } from "lucide-react-native";

export const HomeScreen = () => {
  const user = useAuthStore((state) => state.user);
  const toast = useToast();
  const [toastId, setToastId] = React.useState("");
  const handleToast = () => {
    if (!toast.isActive(toastId)) {
      showNewToast();
    }
  };
  const showNewToast = () => {
    console.log("Showing new toast");
    const newId = Math.random().toString();
    setToastId(newId);
    toast.show({
      id: newId,
      placement: "top",
      duration: 3000,
      render: ({ id }) => {
        const uniqueToastId = "toast-" + id;
        return (
          <Toast nativeID={uniqueToastId} action="success" variant="outline">
            <ToastTitle>Hello!</ToastTitle>
            <ToastDescription>
              This is a customized toast message.
            </ToastDescription>
          </Toast>
        );
      },
    });
  };

  return (
    <MainLayout title="Home">
      <Text className="text-2xl font-bold">
        Welcome, {user?.name || "User"}!
      </Text>
      <Button onPress={handleToast}>
        <ButtonText>Press Me</ButtonText>
      </Button>
      <Alert action="success" variant="solid">
        <AlertIcon as={InfoIcon} />
        <AlertText>Description of alert!</AlertText>
      </Alert>
    </MainLayout>
  );
};
