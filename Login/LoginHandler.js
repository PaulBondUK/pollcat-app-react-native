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

export default class LoginHandler extends Component {
  state = {
    email: null,
    password: null,
    error: null,
    userData: null
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
          textContentType="emailAddress"
        ></TextInput>
        <Text>Password</Text>
        <TextInput
          style={styles.input}
          title="password"
          placeholder="Password"
          onChangeText={text => this.setState({ password: text, error: null })}
          value={this.state.password}
          secureTextEntry={true}
          textContentType="password"
        ></TextInput>
        <Button
          title="Login"
          onPress={() => {
            const { email, password } = this.state;
            this.firebaseLoginHandler(email, password);
          }}
        ></Button>
      </View>
    );
  }

  async firebaseLoginHandler(email, password) {
    const userData = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.setState({ error });
      });

    // console.log(this.props);
    //this.props.addUserData(await userData);
    this.setState({ userData });
    AsyncStorage.setItem("userData", JSON.stringify(userData), () => {
      this.props.navigation.navigate("Main");
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
