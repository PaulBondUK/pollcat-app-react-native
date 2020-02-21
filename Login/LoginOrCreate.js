import * as React from "react";
import { Button, View, Text } from "react-native";
import firebase from "../Auth/Firebase";

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

  // async componentDidMount() {
  //   const user = await firebase.auth().currentUser;
  //   if (await user) {
  //     console.log("user is logged in", user);
  //   } else {
  //     console.log("user is not logged in");
  //   }
  // }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("user is logged in", user);
      } else {
        console.log("user is not logged in");
      }
    });
  }

  // async componentDidMount() {
  //   const user = await firebase.auth().currentUser;
  //   if (await user) {
  //     console.log("user is logged in", user);
  //   } else {
  //     console.log("user is not logged in");
  //   }
  // }
}
