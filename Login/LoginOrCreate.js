import * as React from "react";
import { Button, View, Text } from "react-native";

export default function LoginOrCreate(props) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Text>Login to Pollcat</Text>
      <Button title="login">Login</Button>
      <Button title="create account">Create Account</Button>
    </View>
  );
}
