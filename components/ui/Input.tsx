import { useThemeColor } from "@/hooks/useThemeColor";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  type TextInputProps,
} from "react-native";

export type InputProps = TextInputProps & {
  label?: string;
  error?: string;
  variant?: "default" | "outline";
  size?: "small" | "medium" | "large";
  lightColor?: string;
  darkColor?: string;
  lightTextColor?: string;
  darkTextColor?: string;
  lightBorderColor?: string;
  darkBorderColor?: string;
};

export function Input({
  label,
  error,
  variant = "outline",
  size = "medium",
  style,
  lightColor,
  darkColor,
  lightTextColor,
  darkTextColor,
  lightBorderColor,
  darkBorderColor,
  ...otherProps
}: InputProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  const textColor = useThemeColor(
    { light: lightTextColor, dark: darkTextColor },
    "text"
  );

  const borderColor = useThemeColor(
    { light: lightBorderColor, dark: darkBorderColor },
    "icon"
  );

  const inputStyle = {
    ...styles.input,
    ...styles[size],
    backgroundColor: variant === "default" ? backgroundColor : "transparent",
    borderColor: error ? "#ff4444" : borderColor,
    color: textColor,
  };

  return (
    <View style={styles.container}>
      {label && (
        <Text style={[styles.label, { color: textColor }]}>{label}</Text>
      )}
      <TextInput
        style={[inputStyle, style]}
        placeholderTextColor={useThemeColor({}, "icon")}
        {...otherProps}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  input: {
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 12,
    fontWeight: "400",
  },
  small: {
    paddingVertical: 6,
    minHeight: 32,
    fontSize: 14,
  },
  medium: {
    paddingVertical: 10,
    minHeight: 40,
    fontSize: 16,
  },
  large: {
    paddingVertical: 14,
    minHeight: 48,
    fontSize: 18,
  },
  label: {
    marginBottom: 6,
    fontSize: 16,
    fontWeight: "500",
  },
  error: {
    marginTop: 4,
    fontSize: 14,
    color: "#ff4444",
  },
});
