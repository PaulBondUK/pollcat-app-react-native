import * as React from "react";
import { Button, View, Text } from "react-native";

export default function LoginOrCreate({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Button
        title="Login"
        onPress={() => navigation.navigate("LoginHandler")}
      />
      <Button
        title="Create Account"
        onPress={() => navigation.navigate("CreateAccountHandler")}
      />
    </View>
  );
}
