import React, { Component } from "react";
import {
  KeyboardAvoidingView,
  Button,
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import firebase from "../Auth/Firebase";

export default class CreateAccountHandler extends Component {
  state = {
    email: null,
    displayName: null,
    password: null,
    repeatPassword: null,
    error: null
  };

  render() {
    const errorHandler = {
      "auth/user-not-found": "User not found",
      "auth/invalid-email": "Invalid email address",
      "auth/wrong-password": "Wrong password",
      "auth/user-disabled": "Account disabled"
    };
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {this.state.error && (
          <Text>
            {errorHandler[this.state.error.code]
              ? errorHandler[this.state.error.code]
              : this.state.error.message}
          </Text>
        )}
        <Text>Email Address</Text>
        <TextInput
          style={styles.input}
          title="email"
          placeholder="Email Address"
          onChangeText={text => this.setState({ email: text, error: null })}
          value={this.state.email}
          keyboardType="email-address"
          returnKeyType="next"
        ></TextInput>
        <Text>Display Name</Text>
        <TextInput
          style={styles.input}
          title="email"
          placeholder="Display Name"
          onChangeText={text =>
            this.setState({ displayName: text, error: null })
          }
          value={this.state.displayName}
          returnKeyType="next"
        ></TextInput>
        <Text>Password</Text>
        <TextInput
          style={styles.input}
          title="password"
          placeholder="Password"
          onChangeText={text => this.setState({ password: text, error: null })}
          value={this.state.password}
          returnKeyType="next"
          secureTextEntry={true}
          textContentType="newPassword"
        ></TextInput>
        <Text>Repeat Password</Text>
        <TextInput
          style={styles.input}
          title="password"
          placeholder="Repeat Password"
          onChangeText={text =>
            this.setState({ repeatPassword: text, error: null })
          }
          value={this.state.repeatPassword}
          secureTextEntry={true}
        ></TextInput>
        <Button
          title="Create Account"
          onPress={() => {
            const { email, displayName, password, repeatPassword } = this.state;
            this.firebaseCreateAccountHandler(
              email,
              displayName,
              password,
              repeatPassword
            );
          }}
        ></Button>
      </View>
    );
  }

  async firebaseCreateAccountHandler(
    email,
    displayName,
    password,
    repeatPassword
  ) {
    if (password !== repeatPassword) {
      this.setState({ error: { message: "Passwords do not match" } });
    } else {
      const createCheck = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        // .then(success => {
        //   console.log(success);
        //   success.updateProfile({
        //     displayName
        //   });
        // })
        .catch(error => {
          this.setState({ error });
        });
      navigation.navigate("LoginHandler");
    }
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
