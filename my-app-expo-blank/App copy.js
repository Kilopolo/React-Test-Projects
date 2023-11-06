import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Image, ScrollView, TextInput } from "react-native";
import React from "react";


const HelloText = ({ children, ...otherProps }) => (
  <Text {...otherProps}>{children}</Text>
);

const App = () => (
  <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text>Hola mundo!</Text>
        <HelloText styles={styles.text}>
          Empezando un viaje sin retorno.
        </HelloText>

        <StatusBar style="auto" />
      </View>
      <Text>Some text</Text>
      <View>
        <Text>Some more text</Text>
        <Image
          source={{
            uri: "https://reactnative.dev/docs/assets/p_cat2.png",
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          backgroundColor: "white",
          borderWidth: 1,
        }}
        defaultValue="You can type in me"
      />
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
    </ScrollView>
  </SafeAreaView>
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {
    marginTop: "5%",
    backgroundColor: "green",
    marginHorizontal: 20,
  },
  text: {
    fontSize: 36,
  },
});
