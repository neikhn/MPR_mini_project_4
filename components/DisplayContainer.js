import { View, Text, StyleSheet } from "react-native";

export default function DisplayContainer({ children }) {
  return (
    <View style={styles.displayContainer}>
      <Text style={styles.displayText}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  displayContainer: {
    width: "90%",
    height: 70,
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "#D1D8C5",
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },
  displayText: {
    fontSize: 25
  }
});