import { StyleSheet, View, Text } from "react-native";

export default function Details({ navigation }) {
  return (
    <View>
      <Text>{navigation.getParam("content")}</Text>
    </View>
  );
}

Details.navigation