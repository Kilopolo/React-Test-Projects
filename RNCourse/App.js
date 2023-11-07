import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import styles from "./AppStyles";

export default function App() {
  function goalInputHandler(enteredText) {
    console.log(enteredText);
  }
  function addGoalHandler() {}

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput onChangeText={goalInputHandler} style={styles.textInput}>Text here...</TextInput>
        <Button onPress={addGoalHandler} title="Add"></Button>
      </View>
      <View style={styles.listContainer}>
        <Text>List of goals</Text>
      </View>
    </View>
  );
}
