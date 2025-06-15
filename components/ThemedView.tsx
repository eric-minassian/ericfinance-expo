import { useThemeColor } from "@/hooks/useThemeColor";
import { View } from "react-native";
import {
  SafeAreaViewProps,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export type ThemedViewProps = SafeAreaViewProps & {
  lightColor?: string;
  darkColor?: string;
  safe?: boolean;
};

export function ThemedView({
  style,
  lightColor,
  darkColor,
  safe = false,
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );
  const insets = useSafeAreaInsets();

  if (!safe) {
    return <View style={[{ backgroundColor }, style]} {...otherProps} />;
  }

  return (
    <View
      style={[
        {
          backgroundColor,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
        style,
      ]}
      {...otherProps}
    />
  );
}
