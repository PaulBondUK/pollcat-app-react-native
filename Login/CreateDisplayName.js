import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import firebase from "../Auth/Firebase";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button
} from "native-base";

export default class CreateDisplayName extends Component {
  state = {
    displayName: null,
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
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Display Name</Label>
              <Input
                title="displayName"
                placeholder="display name"
                onChangeText={text => this.setState({ displayName: text })}
                onFocus={() => {
                  this.setState({ error: null });
                }}
                value={this.state.displayName}
                autoCorrect={false}
                autoCapitalize="none"
              />
            </Item>
            <Button
              style={styles.button}
              full
              primary
              onPress={() => {
                const { displayName } = this.state;
                this.firebaseDisplayNameHandler(displayName);
              }}
            >
              <Text style={styles.buttonText}> Set Display Name </Text>
            </Button>
          </Form>
          {this.state.error && (
            <Text style={styles.error}>
              {errorHandler[this.state.error.code]
                ? errorHandler[this.state.error.code]
                : this.state.error.message}
            </Text>
          )}
        </Content>
      </Container>
    );
  }
  async firebaseDisplayNameHandler(displayName) {
    if (!displayName) {
      this.setState({ error: "Please enter a valid display name" });
    } else {
      const user = await firebase.auth().currentUser;
      const displayNameData = await user.updateProfile({ displayName });
      console.log(displayNameData);
      this.props.navigation.navigate("Main");
    }
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
    width: 300,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 6,
    height: 40,
    padding: 10,
    margin: 10
  },
  button: {
    marginTop: 50
  },
  buttonText: {
    color: "white",
    fontSize: 20
  },
  error: {
    color: "red",
    fontSize: 20,
    marginTop: 20,
    alignContent: "center",
    flex: 1
  }
});
