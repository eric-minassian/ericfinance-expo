import Auth from "@/components/Auth";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet } from "react-native";

export default function AuthScreen() {
  return (
    <ThemedView style={styles.container}>
      <Auth />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
