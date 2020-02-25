import React, { Component } from "react";
import {
  SafeAreaView,
  KeyboardAvoidingView,
  Text,
  TextInput,
  View,
  StyleSheet,
  Platform
} from "react-native";
import {
  Header,
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Icon
} from "native-base";
import firebase from "../../Auth/Firebase";

export default class ChangePassword extends Component {
  state = {
    currentPassword: null,
    newPassword: null,
    repeatNewPassword: null,
    error: null,
    passwordCheck: true
  };

  user = firebase.auth().currentUser;

  render() {
    const errorHandler = {
      "auth/user-not-found": "User not found",
      "auth/invalid-email": "Invalid email address",
      "auth/wrong-password": "Wrong password",
      "auth/user-disabled": "Account disabled"
    };
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label> Current Password </Label>
              <Input
                style={styles.input}
                title="currentPassword"
                placeholder="Current Password"
                onChangeText={text =>
                  this.setState({ currentPassword: text, error: null })
                }
                onFocus={() => {
                  this.setState({ error: null });
                }}
                value={this.state.currentPassword}
                secureTextEntry={true}
                textContentType="currentPassword"
                autoCorrect={false}
                autoCapitalize="none"
              />
            </Item>
            <Item floatingLabel>
              <Label> New Password (at least 8 characters) </Label>
              <Input
                style={styles.input}
                title="newPassword"
                placeholder="New Password"
                onChangeText={text =>
                  this.setState({ newPassword: text, error: null })
                }
                onFocus={() => {
                  this.setState({ error: null });
                }}
                value={this.state.newPassword}
                secureTextEntry={true}
                textContentType="newPassword"
                autoCorrect={false}
                autoCapitalize="none"
              />
            </Item>
            <Item floatingLabel>
              <Label> Repeat New Password </Label>
              <Input
                style={styles.input}
                title="repeatNewPassword"
                placeholder="Repeat New Password"
                onChangeText={text =>
                  this.setState({ repeatNewPassword: text, error: null })
                }
                onFocus={() => {
                  this.setState({ error: null });
                }}
                value={this.state.repeatNewPassword}
                secureTextEntry={true}
                textContentType="repeatNewPassword"
                autoCorrect={false}
                autoCapitalize="none"
              />
            </Item>
            <Button
              style={styles.button}
              onPress={() => {
                const {
                  currentPassword,
                  newPassword,
                  repeatNewPassword
                } = this.state;
              }}
            >
              <Text style={styles.buttonText}>Change Password</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center"
  },
  input: {
    marginTop: 10
  },
  button: {
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    height: 50
  },
  buttonText: {
    color: "white",
    fontSize: 18
  },
  error: {
    color: "red",
    fontSize: 20,
    marginTop: 20,
    alignContent: "center",
    flex: 1
  }
});
