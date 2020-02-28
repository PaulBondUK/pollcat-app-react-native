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
        <Content
          contentContainerStyle={{
            flex: 1,
            justifyContent: "flex-end",
            marginBottom: 300
          }}
        >
          <Form>
            <Item floatingLabel>
              <Label>Display Name</Label>
              <Input
                style={styles.input}
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
              block
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
      this.props.navigation.navigate("HomeScreen");
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
    marginTop: 10
  },
  button: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    height: 50,
    backgroundColor: "#6347ff"
  },
  buttonText: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold"
  },
  error: {
    color: "red",
    fontSize: 20,
    marginTop: 20,
    alignContent: "center",
    flex: 1
  }
});
