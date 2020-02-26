import React, { Component } from "react";
import {
  SafeAreaView,
  KeyboardAvoidingView,
  Text,
  TextInput,
  View,
  StyleSheet,
  Platform,
  Alert
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
//import firebase from "../../Auth/Firebase";
import * as firebase from "firebase";

export default class ChangeEmail extends Component {
  state = {
    email: null,
    newEmail: null,
    repeatNewEmail: null,
    error: null
  };

  render() {
    const { email, newEmail, repeatNewEmail, error } = this.state;
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label> Email address </Label>
              <Input
                style={styles.input}
                title="Email"
                placeholder="Email address"
                onChangeText={text =>
                  this.setState({
                    email: text,
                    error: null
                  })
                }
                onFocus={() => {
                  this.setState({ error: null });
                }}
                value={email}
                secureTextEntry={true}
                textContentType="emailAddress"
                autoCorrect={false}
                autoCapitalize="none"
              />
            </Item>
            <Item floatingLabel>
              <Label> New email address </Label>
              <Input
                style={styles.input}
                title="NewEmail"
                placeholder="New email address"
                onChangeText={text =>
                  this.setState({
                    newEmail: text,
                    error: null
                  })
                }
                onFocus={() => {
                  this.setState({ error: null });
                }}
                value={newEmail}
                secureTextEntry={true}
                textContentType="emailAddress"
                autoCorrect={false}
                autoCapitalize="none"
              />
            </Item>

            <Item floatingLabel>
              <Label> Confirm new email address </Label>
              <Input
                style={styles.input}
                title="repeatNewEmail"
                placeholder="Confirm new email address"
                onChangeText={text =>
                  this.setState({
                    repeatNewEmail: text,
                    error: null
                  })
                }
                onFocus={() => {
                  this.setState({ error: null });
                }}
                value={repeatNewEmail}
                secureTextEntry={true}
                textContentType="emailAddress"
                autoCorrect={false}
                autoCapitalize="none"
              />
            </Item>
            <Button
              style={styles.button}
              onPress={() => {
                this.changeEmailAddress(email, newEmail, repeatNewEmail);
              }}
            >
              <Text style={styles.buttonText}>Change Email Address</Text>
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
