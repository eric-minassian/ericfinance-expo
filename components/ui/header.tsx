import { Bell, Menu, MoreHorizontal, Plus } from "lucide-react-native";
import React from "react";
import { StatusBar, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors } from "~/constants/Colors";
import { useColorScheme } from "~/hooks/useColorScheme";
import { Text } from "./text";

interface HeaderProps {
  title: string;
  showNotification?: boolean;
  showMenu?: boolean;
  showAdd?: boolean;
  onMenuPress?: () => void;
  onNotificationPress?: () => void;
  onMorePress?: () => void;
  onAddPress?: () => void;
}

export function Header({
  title,
  showNotification = true,
  showMenu = true,
  showAdd = true,
  onMenuPress,
  onNotificationPress,
  onMorePress,
  onAddPress,
}: HeaderProps) {
  const insets = useSafeAreaInsets();
  const { colorScheme } = useColorScheme();
  const colors = Colors[colorScheme];

  return (
    <>
      <StatusBar
        barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
      />
      <View
        style={{
          paddingTop: insets.top,
          backgroundColor: colors.background,
          borderBottomWidth: 1,
          borderBottomColor: colors.border,
        }}
        className="px-6 pb-4"
      >
        <View className="flex-row items-center justify-between h-11">
          {/* Left side */}
          <View className="flex-row items-center">
            {showMenu && (
              <TouchableOpacity onPress={onMenuPress} className="mr-4 p-1">
                <Menu size={22} color={colors.text} />
              </TouchableOpacity>
            )}
            {showNotification && (
              <TouchableOpacity
                onPress={onNotificationPress}
                className="relative p-1"
              >
                <Bell size={22} color={colors.text} />
                <View className="absolute top-0 right-0 w-2.5 h-2.5 rounded-full bg-red-500 border border-white" />
              </TouchableOpacity>
            )}
          </View>

          {/* Center - Title */}
          <Text
            className="text-xl font-semibold"
            style={{ color: colors.text }}
          >
            {title}
          </Text>

          {/* Right side */}
          <View className="flex-row items-center">
            <TouchableOpacity onPress={onMorePress} className="mr-4 p-1">
              <MoreHorizontal size={22} color={colors.text} />
            </TouchableOpacity>
            {showAdd && (
              <TouchableOpacity onPress={onAddPress} className="p-1">
                <Plus size={22} color={colors.text} />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </>
  );
}
