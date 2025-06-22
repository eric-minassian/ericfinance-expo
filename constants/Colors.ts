/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
    cardBackground: "#F5F5F5",
    sectionBackground: "#FFFFFF",
    border: "#E5E5E5",
    success: "#34C759",
    warning: "#FF9500",
    subtitle: "#666666",
  },
  dark: {
    text: "#FFFFFF",
    background: "#000000",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#666666",
    tabIconSelected: tintColorDark,
    cardBackground: "#1A1A1A",
    sectionBackground: "#0A0A0A",
    border: "#333333",
    success: "#34C759",
    warning: "#FF9500",
    subtitle: "#999999",
  },
};
