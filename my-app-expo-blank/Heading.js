import { View, Text, StyleSheet } from "react-native";
import React from "react";


const Heading=()=>(
    <View style={styles.header}>
        <Text style={styles.headerText}>ToDo's Ale</Text>
    </View>
)

export default Heading;

const styles = StyleSheet.create({
    header: {
      marginTop: 80
    },
    headerText: {
      textAlign: 'center',
      fontSize: 72,
      color: 'rgba(175, 47, 47, 0.25)',
      fontWeight: '100',
      fontWeight: 'bold'
    }
  })