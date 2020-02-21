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
    user: null
  };

  render() {
    if (this.state.user && !this.state.user.displayName) {
      this.props.navigation.navigate("CreateDisplayName");
    }
    console.log(this.state.user, "userData");
    return (
      <View>
        <Text>
          {" "}
          {this.state.user
            ? `Welcome back ${this.state.user.displayName}`
            : "Loading"}{" "}
        </Text>
      </View>
    );
  }

  firebaseUserCheck = () => {
    const user = firebase.auth().currentUser;

    if (user) {
      console.log(user, "user is logged in");
    } else {
      console.log("user is not logged in");
      this.props.navigation.navigate("LoginOrCreate");
    }
  };

  componentDidMount() {
    // const userData = JSON.parse(this.props.route.params);
    // this.setState({ userData });
    //this.firebaseUserCheck();
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      } else {
        this.props.navigation.navigate("LoginOrCreate");
      }
    });
  }
}
