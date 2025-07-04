import { useThemeColor } from "@/hooks/useThemeColor";
import { Pressable, StyleSheet, Text, type PressableProps } from "react-native";

export type ButtonProps = PressableProps & {
  title: string;
  variant?: "default" | "outline" | "ghost";
  size?: "small" | "medium" | "large";
  lightColor?: string;
  darkColor?: string;
  lightTextColor?: string;
  darkTextColor?: string;
};

export function Button({
  title,
  variant = "default",
  size = "medium",
  style,
  lightColor,
  darkColor,
  lightTextColor,
  darkTextColor,
  disabled,
  ...otherProps
}: ButtonProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    variant === "ghost" ? "background" : "tint"
  );

  const textColor = useThemeColor(
    { light: lightTextColor, dark: darkTextColor },
    variant === "outline" || variant === "ghost" ? "text" : "background"
  );

  return (
    <Pressable
      style={({ pressed }) => ({
        ...styles.button,
        ...styles[size],
        backgroundColor:
          variant === "outline" || variant === "ghost"
            ? "transparent"
            : backgroundColor,
        borderColor: variant === "outline" ? backgroundColor : "transparent",
        opacity: pressed && !disabled ? 0.8 : disabled ? 0.5 : 1,
        ...(style as object),
      })}
      disabled={disabled}
      {...otherProps}
    >
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
  small: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    minHeight: 32,
  },
  medium: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    minHeight: 40,
  },
  large: {
    paddingHorizontal: 20,
    paddingVertical: 14,
    minHeight: 48,
  },
  text: {
    fontWeight: "600",
    fontSize: 16,
  },
});
