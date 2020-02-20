import React, { Component } from "react";
import {
  Button,
  Text,
  TextInput,
  View,
  StyleSheet,
  AsyncStorage
} from "react-native";

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

  componentDidMount() {
    const userData = JSON.parse(this.props.route.params);
    this.setState({ userData });
  }
}
