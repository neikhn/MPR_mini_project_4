import { StyleSheet, Text, View } from "react-native";
import Button from "./components/Button.js"

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Button>Test</Button>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>EXPRESSION BUILDING</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            In this game, you will create an expression that gives the target
            value.
          </Text>
        </View>
        <View>
          <View style={styles.displayValue}>
            <View style={styles.independentValueContainer}>
              <Text>YOUR VALUE</Text>
              <View style={styles.valueContainer}>
                <Text style={styles.valueText}>0</Text>
              </View>
            </View>
            <View style={styles.independentValueContainer}>
              <Text>TARGET VALUE</Text>
              <View style={styles.valueContainer}>
                <Text style={styles.valueText}>0</Text>
              </View>
            </View>
            <View style={styles.independentValueContainer}>
              <Text>TIMES</Text>
              <View style={styles.valueContainer}>
                <Text style={styles.valueText}>0</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>USER INPUT HERE</Text>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 2,
    backgroundColor: "#F4F1F1",
  },
  innerContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: "80%",
    backgroundColor: "white",
    borderRadius: 5,
    // iOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Android
    elevation: 10,
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
