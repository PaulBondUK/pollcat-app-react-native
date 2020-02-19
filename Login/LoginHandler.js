import React, { Component } from "react";
import { Button, Text, TextInput, View, StyleSheet } from "react-native";

export default class LoginHandler extends Component {
  state = {
    emailAddress: null,
    password: null
  };

  render() {
    console.log(this.state.emailAddress);
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
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
        <Button title="Login"></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    width: 200,
    borderColor: "gray",
    borderWidth: 1,
    height: 40,
    padding: 10,
    margin: 10
  }
});
