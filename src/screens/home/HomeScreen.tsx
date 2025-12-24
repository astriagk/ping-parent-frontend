import React, { useState, useCallback } from "react";
import { Text, VStack, Button, ButtonText } from "@app/components/ui";
import { Alert, AlertText, AlertIcon } from "@app/components/ui/alert";
import { Info } from "lucide-react-native";
import { MainLayout } from "@app/components/layouts/MainLayout";
import { useParentProfile } from "@app/api/queries/useParentProfile";
import { useParentAddress } from "@app/api/queries/useParentAddress";
import { useNavigation } from "@react-navigation/native";
import type { MainNavigationProp } from "@app/navigation/types";
import { ROUTES } from "@app/navigation/routes";
import { ScrollView, RefreshControl } from "react-native";

export const HomeScreen = () => {
  const navigation = useNavigation<MainNavigationProp>();

  const {
    data: profile,
    isLoading: profileLoading,
    refetch: refetchProfile,
  } = useParentProfile();
  const {
    data: address,
    isLoading: addressLoading,
    refetch: refetchAddress,
  } = useParentAddress();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await Promise.all([refetchProfile(), refetchAddress()]);
    setRefreshing(false);
  }, [refetchProfile, refetchAddress]);

  const getProfileIncompleteReason = () => {
    if (profileLoading || addressLoading) return null;
    if (!address) return "address";
    if (!profile?.firstName) return "profile";
    return null;
  };

  const handleCompleteProfile = () => {
    navigation.navigate(ROUTES.MAIN.PROFILE, {});
  };

  return (
    <MainLayout title="Home">
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <VStack space="lg">
          <Text className="text-2xl font-bold">
            Welcome, {profile?.firstName || "User"}!
          </Text>

          {getProfileIncompleteReason() === "address" && (
            <Alert action="info" variant="outline" className="mb-2">
              <AlertIcon as={Info} />
              <VStack space="md" className="flex-1">
                <AlertText className="font-semibold">Address Missing</AlertText>
                <AlertText>
                  Please add your address to continue using the app.
                </AlertText>
                <Button
                  size="sm"
                  onPress={handleCompleteProfile}
                  className="mt-2 self-start"
                >
                  <ButtonText>Update Profile</ButtonText>
                </Button>
              </VStack>
            </Alert>
          )}
          {getProfileIncompleteReason() === "profile" && (
            <Alert action="info" variant="outline">
              <AlertIcon as={Info} />
              <VStack space="md" className="flex-1">
                <AlertText className="font-semibold">Profile Missing</AlertText>
                <AlertText>
                  Please add your profile details to continue using the app.
                </AlertText>
                <Button
                  size="sm"
                  onPress={handleCompleteProfile}
                  className="mt-2 self-start"
                >
                  <ButtonText>Update Profile</ButtonText>
                </Button>
              </VStack>
            </Alert>
          )}
        </VStack>
      </ScrollView>
    </MainLayout>
  );
};
