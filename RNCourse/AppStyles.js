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
  mainContainer:{
    flex: 1,
    flexDirection: "column",

  },
  headContainer:{
    flex: 1,
    borderWidth: 1,
    borderColor: '#00000',
    marginTop: 20,
  },
  enemyContainer:{
    flex: 3,
    borderWidth: 1,
    flexDirection: "row",
    borderColor: '#00000',
    margin: 10,
  },
  playerContainer:{
    flex: 3,
    borderWidth: 1,
    flexDirection: "row",
    borderColor: '#00000',
    margin: 10,
  },
  enemyContainerLeft:{
    flex: 3,
    borderWidth: 1,
    borderColor: '#00000',
    margin: 10,
  },
  playerContainerLeft:{
    flex: 3,
    borderWidth: 1,
    borderColor: '#00000',
    margin: 10,
  },
  enemyContainerRight:{
    flex: 3,
    borderWidth: 1,
    borderColor: '#00000',
    margin: 10,
  },
  playerContainerRight:{
    flex: 3,
    borderWidth: 1,
    borderColor: '#00000',
    margin: 10,
  },
  footerContainer:{
    flex: 2,
    borderWidth: 1,
    borderColor: '#00000',
    marginBottom: 20,
  },
});
