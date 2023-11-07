import { View, Text, StyleSheet } from "react-native";
import React from "react";
import TodoButton from "./TodoButton";

const Todo=({todo, toggleComplete, deleteTodo} ) => (
    <View style={styles.todoContainer}>
        <Text style={styles.todoText}>{todo.title}</Text>
        <View style={styles.buttons}>
            <TodoButton name='Done' onPress={()=>toggleComplete(todo.todoIndex)} complete={todo.complete}/>
            <TodoButton name='Delete' onPress={()=>deleteTodo.todoIndex}/>
        </View>
    </View>
)

export default Todo;

const styles = StyleSheet.create({
    todoContainer: {
      marginLeft: 20,
      marginRight: 20,
      backgroundColor: '#ffffff',
      borderTopWidth: 1,
      borderRightWidth: 1,
      borderLeftWidth: 1,
      borderColor: '#ededed',
      paddingLeft: 14,
      paddingTop: 7,
      paddingBottom: 7,
      shadowOpacity: 0.2,
      shadowRadius: 3,
      shadowColor: '#000000',
      shadowOffset: { width: 2, height: 2 },
      flexDirection: 'row',
      alignItems: 'center'
    },
    todoText: {
      fontSize: 17
    },
    buttons: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center'
    }
  })