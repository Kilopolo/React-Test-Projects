// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput}>Text here...</TextInput>
        <Button title="Add"></Button>
      </View>
      <View>
        <Text>List of goals</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    // flex: 1,
    padding:50 
    
  },
  inputContainer:{
    flexDirection: "row",
    justifyContent:'space-between',

  },
  textInput:{
    borderColor: '#cccccc',
    borderWidth: 2,
    width: '80%',
    marginRight: 8

  }
});
