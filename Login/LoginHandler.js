import React, { Component } from "react";
import { Button, Text, TextInput, View, StyleSheet } from "react-native";

export default class LoginHandler extends Component {
  state = {
    email: null,
    password: null,
    err: null
  };

  render() {
    console.log(this.state.email);
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
          onChangeText={text => this.setState({ email: text })}
          value={this.state.email}
          keyboardType="email-address"
        ></TextInput>
        <Text>Password</Text>
        <TextInput
          style={styles.input}
          title="password"
          placeholder="Password"
          onChangeText={text => this.setState({ password: text })}
          value={this.state.password}
        ></TextInput>
        <Button
          title="Login"
          onPress={() => {
            const { email, password } = this.state;
            this.firebaseLoginHandler(email, password);
          }}
        ></Button>
        {this.state.error && (
          <Text>{`${this.state.error.code} ${this.state.error.message}`}</Text>
        )}
      </View>
    );
  }

  firebaseLoginHandler(email, password) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
        this.setState({ error });
      });
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
    width: 300,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 6,
    height: 40,
    padding: 10,
    margin: 10
  }
});
