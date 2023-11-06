import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  // state es un atributo de la clase
  constructor(){
    super();
    this.state = {
      tasks: ['Pablo','Patricia','JESUCRISTO EN MOTO']
    }
      }

  render =()=>{
    return(
    <View style={styles.container}>
    {this.state.tasks.map((task,index)=> (
      <Text key={index} style={styles.text}>{task}</Text>
    ))
    }
    <WarningText style={styles.text}>Advertencia</WarningText>
  </View>)
  };
}

const WarningText =({style,...otherProps})=>(
  <Text style={[style, {color:'orange'}]} {...otherProps}/>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    paddiing: '10%',
    justifyContent: 'flex-start',
    width: '100%',
  },
  text:{
    marginTop: '5%',
    fontWeight: 'bold',
    fontSize: 40
  }
  
});
