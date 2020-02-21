import * as React from "react";
import { Button, View, Text } from "react-native";
import firebase from "../Auth/Firebase";

const user = firebase.auth().currentUser;

export default class LoginOrCreate extends React.Component {
  render() {
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
          onPress={() => this.props.navigation.navigate("LoginHandler")}
        />
        <Button
          title="Sign Up"
          onPress={() => this.props.navigation.navigate("CreateAccountHandler")}
        />
      </View>
    );
  }

  async componentDidMount() {
    if (await user) {
      console.log("user is logged in");
      console.log(await user.email);
    } else {
      console.log("user is not logged in");
    }
  }

  async componentDidUpdate() {
    if (await user) {
      console.log("user is logged in");
      console.log(await user.email);
    } else {
      console.log("user is not logged in");
    }
  }
}
