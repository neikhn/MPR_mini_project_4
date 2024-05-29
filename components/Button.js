import { useState } from "react";
import PropTypes from "prop-types";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function Button({ children, onPress, type }) {
  const [disabled, setDisabled] = useState(false);

  const handlePress = () => {
    if (type === "integer") {
      setDisabled(true);
    }
    onPress(children)
  };

  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.innerContainer,
          pressed && !disabled ? styles.feedbackFlash : null, //feedbackFlash only when button is not disabled
          disabled ? styles.disabledContainer : null
        ]}
        onPress={handlePress}
        disabled={disabled}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired, 
  onPress: PropTypes.func.isRequired, 
  type: PropTypes.oneOf(['integer', 'operator']).isRequired, 
};

const styles = StyleSheet.create({
  outerContainer: {
    margin: 10
  },
  innerContainer: {
    width: 70,
    aspectRatio: 1,
    justifyContent: "center",
    backgroundColor: "#FC5E5E",
    borderRadius: 20
  },
  disabledContainer: {
    backgroundColor: "#C4C4C4"
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "800",
    color: "white",
    textAlign: "center"
  },
  feedbackFlash: {
    backgroundColor: "#C73659"
  }
});
