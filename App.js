import { useState, useEffect } from "react";
import { StyleSheet, View} from "react-native";
import InputButton from "./components/Button/InputButton.js";
import Row from "./components/Row.js";
import DisplayContainer from "./components/DisplayContainer.js";
import HelperButton from "./components/Button/HelperButton.js";
import FeedbackContainer from "./components/FeedbackContainer.js";
import NotifyModal from "./components/NotifyModal.js";

export default function App() {
  const [displayValue, setDisplayValue] = useState("");
  const [yourValue, setYourValue] = useState("");
  const [targetValue, setTargetValue] = useState(9)
  const [previousInput, setPreviousInput] = useState("");
  const [usedNumber, setUsedNumber] = useState([]);
  const [trial, setTrial] = useState(3);
  const [notifyVisible, setNotifyVisible] = useState(false);
  const [notifyMessage, setNotifyMessage] = useState("");
  const [notifyButtonStatus, setNotifyButtonStatus] = useState("")

  const handlePress = (value) => {
    setDisplayValue((previous) => {
      const isPreviousEmpty = previousInput === "";
      const isDifferentType = isNaN(previousInput) !== isNaN(value);
      const isCurrentNumber = !isNaN(value);

      allowed = (isPreviousEmpty && isCurrentNumber) || (isDifferentType && !isPreviousEmpty);

      if (allowed) {
        setPreviousInput(value);
        setUsedNumber([...usedNumber, value]);
        return previous === "" ? String(value) : previous + value;
      }
      return previous;
    });
  };

  const handleReset = () => {
    setDisplayValue("");
    setPreviousInput("");
    setUsedNumber([]);
  };

  useEffect(() => {
    if (yourValue !== "") {
      console.log("Current result is now: " + yourValue);
      console.log("Target value is: " + targetValue);

      if (targetValue === yourValue) {
        setNotifyMessage("Congrattulation!\nYou won the game. Tap the button to start a new game.");
        setNotifyButtonStatus("New Game");
      } else {
        setTrial((prevTrial) => prevTrial - 1);
        setNotifyMessage("Your expression is incorrect!\nTap the button to try again.");
        setNotifyButtonStatus("Reset");
      }
      setNotifyVisible(true);
    }
  }, [yourValue, targetValue]);

  const handleCheck = (expression) => {
    try {
      const result = eval(expression);
      setYourValue(result);
      return result;
    } catch (error) {
      setNotifyMessage("INVALID EXPRESSION");
      setNotifyButtonStatus("RE-TRY");
      setNotifyVisible(true);
    }
  };

  const closeModal = () => {
    setNotifyVisible(false);
    if (notifyButtonStatus === "Reset") {
      handleReset();
    }
  };

  return (
    <View style={styles.container}>
      <Row>
        <FeedbackContainer value={yourValue}>YOUR VALUE</FeedbackContainer>
        <FeedbackContainer value={targetValue}>TARGET VALUE</FeedbackContainer>
        <FeedbackContainer value={trial}>TRIALS</FeedbackContainer>
      </Row>
      <Row>
        <DisplayContainer>{displayValue}</DisplayContainer>
      </Row>
      <Row>
        {['24', '34', '+', '-'].map((item) => (
          <InputButton
            key={item}
            onPress={() => handlePress(item)}
            type={isNaN(item) ? 'operator' : 'number'}
            disabled={!isNaN(item) ? usedNumber.includes(item) : null}
          >
            {item}
          </InputButton>
        ))}
      </Row>
      <Row>
        {['4', '5', '*', '/'].map((item) => (
          <InputButton
            key={item}
            onPress={() => handlePress(item)}
            type={isNaN(item) ? 'operator' : 'number'}
            disabled={!isNaN(item) ? usedNumber.includes(item) : null}
          >
            {item}
          </InputButton>
        ))}
      </Row>
      <Row>
        <HelperButton onPress={handleReset}>Reset</HelperButton>
        <HelperButton onPress={() => handleCheck(displayValue)}>Check</HelperButton>
      </Row>
      <NotifyModal
        visible={notifyVisible}
        buttonContent={notifyButtonStatus}
        onClose={closeModal}
      >
        {notifyMessage}
      </NotifyModal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#EEEEEE",
  },
});