import { TouchableHighlight, Text, StyleSheet } from "react-native";
import React from "react";

const TabBarItem=({border, title, selected, setType, type}) => (

    <TouchableHighlight 
    underlayColor='#efefef' 
    onPress={setType}
    style={[styles.item, 
            selected ? styles.selected : null,
            border ? styles.border : null,
            type === title ? styles.selected : null
    ]}>
        <Text style={[styles.itemText,  type === title ? styles.bold : null ]}>{title}</Text>
    </TouchableHighlight>
)

export default TabBarItem;

const styles = StyleSheet.create({
item:{
    flex:1,
    alignItems: "center",
    justifyContent: "center"
},
border:{
    borderLeftWidth: 1,
    borderLeftColor: '#dddddd'
},
itemText:{
    color: '#777777',
    fontSize: 16
},
selected:{
    backgroundColor: '#ffffff',
},
bold:{
    fontWeight: 'bold'
}

})