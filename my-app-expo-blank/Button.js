import { TouchableHighlight, View, Text, StyleSheet } from "react-native";
import React from "react";

const Button=({submitTodo})=>(   
    <View style={styles.buttonContainer}>
    <TouchableHighlight 
    underlayColor='#efefef' 
    onPress={submitTodo}
    style={[styles.button]}>
        <Text style={styles.submit}>Submit</Text>
    </TouchableHighlight>
    </View>
)


export default Button;

const styles = StyleSheet.create({
    buttonContainer: {
      alignItems: 'flex-end'
    },
    button: {
      height: 50,
      paddingLeft: 20,
      paddingRight: 20,
      backgroundColor: '#ffffff',
      width: 200,
      marginRight: 20,
      marginTop: 15,
      borderWidth: 1,
      borderColor: 'rgba(0,0,0,.1)',
      justifyContent: 'center',
      alignItems: 'center'
    },
    submit: {
      color: '#666666',
      fontWeight: '600'
    }
  })