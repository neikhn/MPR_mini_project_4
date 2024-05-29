import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "./components/Button.js";
import Row from "./components/Row.js";
import DisplayContainer from "./components/DisplayContainer.js";

export default function App() {
  const [displayValue, setDisplayValue] = useState("");
  const [previousInput, setPreviousInput] = useState("")
  
  const handlePress = (value) => {
    setDisplayValue((previous) => {
      const isPreviousEmpty = previousInput === "";
      const isDifferentType = isNaN(previousInput) !== isNaN(value);
      const isCurrentNumber = !isNaN(value);

      allowed = (isPreviousEmpty && isCurrentNumber) || (isDifferentType && !isPreviousEmpty);

      if (allowed) {
        setPreviousInput(value);
        return previous === "" ? String(value) : previous + value;
      }
      return previous;
    });
  };

  return (
    <View style={styles.container}>
      <DisplayContainer>{displayValue}</DisplayContainer>
      <Row>
        {['7', '82', '+', '-'].map((item) => (
          <Button key={item} onPress={handlePress} type={isNaN(item) ? 'operator' : 'integer'}>{item}</Button>
        ))}
      </Row>
      <Row>
        {['4', '5', '×', '/'].map((item) => (
        <Button key={item} onPress={handlePress} type={isNaN(item) ? 'operator' : 'integer'}>{item}</Button>
        ))}
      </Row>
      <Row>
        {['7', '82', '2', '1'].map((item) => (
          <Button key={item} onPress={handlePress} type={isNaN(item) ? 'operator' : 'integer'}>{item}</Button>
        ))}
      </Row>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 2,
    backgroundColor: "#EEEEEE",
  },

  titleContainer: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    textAlign: "center",
  },
  descriptionContainer: {
    padding: 20,
  },
  description: {
    fontSize: 15,
    textAlign: "center",
    fontWeight: "400",
  },
  displayValue: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  independentValueContainer: {
    padding: 20,
  },
  valueContainer: {
    marginTop: 5,
    padding: 5,
    backgroundColor: "#F4F1F1",
    borderRadius: 5,
  },
  valueText: {
    color: "black",
    textAlign: "center",
  },
  inputContainer: {
    width: "70%",
    backgroundColor: "#F4F1F1",
    borderRadius: 5,
    margin: 10,
    padding: 10,
  },
  inputText: {
    color: "black",
    textAlign: "right",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "70%",
    margin: 20,
  },
  gridItem: {
    width: "21%",
    height: "25%",
    backgroundColor: "#F6A747",
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  gridText: {
    color: "white",
  },
});
