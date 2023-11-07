// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import styles from "./AppStyles"

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput}>Text here...</TextInput>
        <Button title="Add"></Button>
      </View>
      <View style={styles.listContainer}>
        <Text >List of goals</Text>
      </View>
    </View>
  );
}

