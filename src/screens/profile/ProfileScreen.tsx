import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import {
  Avatar,
  AvatarImage,
  AvatarFallbackText,
  Text,
  VStack,
  Button,
  Box,
  Heading,
  ButtonText,
} from "@app/components/ui";
import { Phone } from "lucide-react-native";
import { COLORS } from "@app/config/design-tokens";
import { MainLayout } from "@app/components/layouts/MainLayout";
import { useParentProfile } from "@app/api/queries/useParentProfile";
import { useParentAddress } from "@app/api/queries/useParentAddress";
import { useAuthStore } from "@app/store/useAuthStore";
import { ScrollView, ActivityIndicator } from "react-native";

export const ProfileScreen = () => {
  const { data: profile, isLoading: profileLoading } = useParentProfile();
  const { data: address, isLoading: addressLoading } = useParentAddress();
  const logout = useAuthStore((state) => state.logout);

  // Profile form state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [profileImageUrl, setProfileImageUrl] = useState("");

  // Initialize form with existing data
  useEffect(() => {
    if (profile) {
      setFirstName(profile.firstName || "");
      setLastName(profile.lastName || "");
      setPhone(profile.phone || "");
      setProfileImageUrl(profile.profileImageUrl || "");
    }
  }, [profile]);

  if (profileLoading || addressLoading) {
    return (
      <MainLayout title="Profile">
        <Box className="flex-1 justify-center items-center">
          <ActivityIndicator size="large" />
        </Box>
      </MainLayout>
    );
  }

  return (
    <MainLayout title="Profile">
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space="md">
          <Box className="flex-row items-center gap-4">
            <Avatar size="lg">
              {profileImageUrl ? (
                <AvatarImage source={{ uri: profileImageUrl }} />
              ) : (
                <AvatarFallbackText>{firstName?.[0] || "U"}</AvatarFallbackText>
              )}
            </Avatar>
            <VStack>
              <Text className="font-bold text-2xl">
                {firstName} {lastName}
              </Text>
              <Box className="flex-row items-center gap-1">
                <Phone size={16} color={COLORS.gray} />
                <Text className="text-gray-500 text-lg">{phone}</Text>
              </Box>
            </VStack>
          </Box>
        </VStack>
        {/* Address Section */}
        <Box className="mt-4">
          {address ? (
            <>
              <Box className="flex-row items-center justify-between mb-4">
                <Heading size="lg">Address</Heading>
                <TouchableOpacity onPress={() => {}}>
                  <Text className="underline text-sm font-bold">Edit</Text>
                </TouchableOpacity>
              </Box>
              <VStack space="md">
                <Text>
                  {address.street}, {address.city}, {address.state}{" "}
                  {address.zipCode}
                </Text>
              </VStack>
            </>
          ) : (
            <Button onPress={() => {}}>
              <ButtonText>Update Address</ButtonText>
            </Button>
          )}
        </Box>
        {/* Logout Button */}
        <Box className="mt-4">
          <Button
            variant="solid"
            onPress={() => {
              logout();
            }}
          >
            <ButtonText>Logout</ButtonText>
          </Button>
        </Box>
      </ScrollView>
    </MainLayout>
  );
};
