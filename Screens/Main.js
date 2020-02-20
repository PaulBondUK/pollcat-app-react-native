import React, { Component } from "react";
import {
  Button,
  Text,
  TextInput,
  View,
  StyleSheet,
  AsyncStorage
} from "react-native";
import firebase from "../Auth/Firebase";

export default class Main extends Component {
  state = {
    userData: null
  };

  render() {
    return (
      <View>
        <Text>
          {" "}
          {this.state.userData
            ? `Welcome back ${this.state.userData.user.email}`
            : "Loading"}{" "}
        </Text>
      </View>
    );
  }

  firebaseUserCheck = () => {
    const user = firebase.auth().currentUser;

    if (user) {
      console.log("user is logged in");
    } else {
      console.log("user is not logged in");
    }
  };

  componentDidMount() {
    const userData = JSON.parse(this.props.route.params);
    this.setState({ userData });
    this.firebaseUserCheck();
  }
}
