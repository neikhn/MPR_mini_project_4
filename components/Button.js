import { View, Text, Pressable, StyleSheet } from "react-native";
import { useState } from "react";

export default function Button({ children }) {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={styles.innerContainer}   
      >
        <Text>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 20,
    margin: 20
  },
  innerContainer: {
    backgroundColor: "#F6A747"
  },
});
