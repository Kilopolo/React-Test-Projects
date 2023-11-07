
const TodoButton=({onPress, complete, name})=>(

    <TouchableHighlight 
    underlayColor='#efefef' 
    onPress={onPress}
    style={[styles.button]}>
        <Text style={[
            styles.text,  
            complete ? styles.complete : null,
            name === 'Delete' ? styles.deleteButton : null
            ]}>{name}</Text>
    </TouchableHighlight>
)
export default TodoButton;

const styles = StyleSheet.create({
    button: {
      alignSelf: 'flex-end',
      padding: 7,
      borderColor: '#ededed',
      borderWidth: 1,
      borderRadius:4,
      marginRight:5
    },
    text:{
        color: '#666666'
    },
    complete: {
        color: 'green',
        fontWeight: 'bold'
    },
    deleteButton: {
        color: 'rgb(175,47,47,1)'
    }
  });