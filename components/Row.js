  import { View, StyleSheet } from "react-native";

  export default function Row({ children }) {
    return (
      <View style={styles.container}>{children}</View>
    )
  };

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row"
    }
  });