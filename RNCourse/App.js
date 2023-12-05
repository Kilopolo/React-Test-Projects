import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import styles from "./AppStyles";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
  }

  return (
    // <View style={styles.container}>
    //   <View style={styles.inputContainer}>
    //     <TextInput onChangeText={goalInputHandler} style={styles.textInput}>
    //       ...
    //     </TextInput>
    //     <Button onPress={addGoalHandler} title="Add"></Button>
    //   </View>
    //   <View style={styles.listContainer}>
    //     {courseGoals.map((goal, index) => (
    //       <Text key={goal}>{goal}</Text>

    //     ))}
    //   </View>
    // </View>
    <View style={styles.mainContainer}>
      <View style={styles.headContainer}>

      </View>
      <View style={styles.enemyContainer}>
        <View style={styles.enemyContainerLeft}></View>
        <View style={styles.enemyContainerRight}></View>
      </View>
      <View style={styles.playerContainer}>
        <View style={styles.playerContainerLeft}></View>
        <View style={styles.playerContainerRight}></View>
      </View>
      <View style={styles.footerContainer}></View>
    </View>
  );
}
