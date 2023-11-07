// import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container:{
    flex: 1,
    padding:50 
  },
  inputContainer:{
    flex: 1,
    flexDirection: "row",
    justifyContent:'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',

  },
  textInput:{
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8

  },
  listContainer:{
    flex: 4,
    flexDirection: "row",
    justifyContent:'space-between',

  },
});
