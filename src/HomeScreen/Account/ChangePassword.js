import React, { Component } from "react";
import { Text, View } from "react-native";
import { Container, Content } from "native-base";

export default class ChangePassword extends Component {
  state = {
    newPassword: null,
    repeatNewPassword: null,
    error: null,
    passwordCheck: true
  };
  render() {
    const errorHandler = {
      "auth/user-not-found": "User not found",
      "auth/invalid-email": "Invalid email address",
      "auth/wrong-password": "Wrong password",
      "auth/user-disabled": "Account disabled"
    };
    return (
      <Container>
        <Content></Content>
      </Container>
    );
  }
}
