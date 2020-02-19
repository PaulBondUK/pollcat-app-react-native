import React, { Component } from "react";
import { Button, Text, View } from "react-native";

export default class LoginHandler extends Component {
  state = {
    emailAddress: null,
    password: null
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text>Login</Text>
        <Text>Email Address</Text>
        <TextInput
          style={styles.input}
          title="email"
          placeholder="Email Address"
          onChangeText={text => this.setState({ emailAddress: text })}
          value={this.state.emailAddress}
        ></TextInput>
        <Text>Password</Text>
        <TextInput
          style={styles.input}
          title="password"
          placeholder="Password"
          onChangeText={text => this.setState({ password: text })}
          value={this.state.password}
        ></TextInput>
        <Button title="login">Login</Button>
        <Button title="create account">Create Account</Button>
      </View>
    );
  }
}
