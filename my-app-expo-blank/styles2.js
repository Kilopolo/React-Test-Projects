import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'red',
        paddingTop:20
      },
      box:{
        width: 300,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "yellow",
        borderWidth: 1,
        borderStyle: "dashed",
        borderColor: "green"
      },
      boxText:{
        color: "blue",
        fontWeight: "bold"
      }
})