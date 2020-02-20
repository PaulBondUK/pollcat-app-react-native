import React, { Component } from "react";
import { Text, View } from "react-native";
import firebase from "../Auth/Firebase";

export default class Loading extends Component {
  render() {
    return (
      <View>
        <Text> Loading... </Text>
      </View>
    );
  }

  async firebaseUserCheck() {
    const user = await firebase.auth().currentUser;
    user.then(user => console.log(user));
    if (user) {
      console.log("user is logged in");
    } else {
      console.log("user is not logged in");
    }
  }

  componentDidMount() {
    this.firebaseUserCheck().then(user => {
      console.log(user);
    });
  }
}
