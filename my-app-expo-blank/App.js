import { View, StyleSheet, ScrollView } from "react-native";
import React, { Component } from "react";
import Heading from './Heading';
import Input from './Input';
import Button from './Button';
import TodoList from "./TodoList";
import TabBar from "./TabBar";

let todoIndex = 0;

class App extends Component{
constructor(){
  super() 
  this.state={
    inputValue:'',
    todos:[],
    type:'All'
  }

  this.toggleComplete=this.toggleComplete.bind(this)
  this.deleteTodo=this.deleteTodo.bind(this)
  this.setType=this.setType.bind(this)
  this.submitTodo=this.submitTodo.bind(this)
}

inputChange(inputValue){
  this.setState({inputValue})
}

setType(type){
  this.setState({ type});
}

submitTodo(){
  // validacion del tipeo, comparando con una expresion regular
  if(this.state.inputValue.match(/^\s*$/)) return 
  let todo={title: this.state.inputValue, 
            todoIndex: todoIndex, 
            complete: false }
  todoIndex++;
  this.state.todos.push(todo)
  this.setState({todos: this.state.todos, inputValue:''}, () =>{ console.log('State: ' , this.state)})

}

deleteTodo(todoIndex){
  let {todos} = this.state
  todos= this.state.todos.filter((todo) => {
    return todo.todoIndex !== todoIndex
  })
  this.setState({todos})
}

toggleComplete(todoIndex){
  let {todos} = this.state
  todos.forEach((todo) => {
    if(todo.todoIndex === todoIndex){
      todo.complete=!todo.complete
    }
  })
  this.setState({todos})
}


render(){
const {todos, inputValue, type} = this.state
return(
  <View style={styles.container}>
    <ScrollView style={styles.content} keyboardShouldPersistTaps='always'>
      <Heading/>
      <Input inputValue={inputValue} inputChange={(text)=> this.inputChange(text)}/>
      <TodoList type={type} toggleComplete={this.toggleComplete} deleteTodo={this.deleteTodo} todos={todos}/>
      <Button submitTodo={this.submitTodo}/>
    </ScrollView>
    <TabBar type={type} setType={this.setType}/>
  </View>
)


}

}
export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1
  },
  content: {
    flex: 1
  }
})