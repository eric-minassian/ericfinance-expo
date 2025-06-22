import React from "react";
import { View } from "react-native";
import { Text } from "~/components/ui/text";
import { Colors } from "~/constants/Colors";
import { useColorScheme } from "~/hooks/useColorScheme";

export default function DashboardScreen() {
  const { colorScheme } = useColorScheme();
  const colors = Colors[colorScheme];

  return (
    <View style={{ backgroundColor: colors.background }} className="flex-1 p-4">
      <Text style={{ color: colors.text }}>Dashboard content will go here</Text>
    </View>
  );
}
