import { StyleSheet, Text, View } from "react-native";

export default function ChatSettingsScreen() {
  return (
    <View style={styles.container}>
      <Text>Chat Settings Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 20,
    fontFamily: "regular",
  },
});
