import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text } from "./ui/text";

interface HeaderProps {
  title: string;
  actions?: React.ReactNode[];
}

export function Header({ title, actions }: HeaderProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      className="px-6"
      style={{
        paddingTop: insets.top,
      }}
    >
      <View className="flex-row items-center justify-between h-11">
        {/* Left side */}
        <View className="flex-row items-center"></View>

        {/* Center - Title */}
        <Text className="text-xl font-semibold">{title}</Text>

        {/* Right side */}
        <View className="flex-row items-center">
          <Text>Right</Text>
        </View>
      </View>
    </View>
  );
}
