import React, { Component } from "react";
import {
  SafeAreaView,
  KeyboardAvoidingView,
  Text,
  TextInput,
  View,
  StyleSheet,
  AsyncStorage
} from "react-native";
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
import firebase from "../Auth/Firebase";

export default class LoginHandler extends Component {
  state = {
    email: null,
    password: null,
    error: null,
    accountCreated: null
  };

  render() {
    const errorHandler = {
      "auth/user-not-found": "User not found",
      "auth/invalid-email": "Invalid email address",
      "auth/wrong-password": "Wrong password",
      "auth/user-disabled": "Account disabled"
    };
    return (
      <Container style={styles.container}>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Email Address</Label>
              <Input
                style={styles.input}
                title="email"
                placeholder="Email Address"
                onChangeText={text =>
                  this.setState({ email: text, error: null })
                }
                value={this.state.email}
                keyboardType="email-address"
                returnKeyType="next"
                textContentType="emailAddress"
                autoCorrect={false}
                autoCapitalize="none"
              />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input
                style={styles.input}
                title="password"
                placeholder="Password"
                onChangeText={text =>
                  this.setState({ password: text, error: null })
                }
                value={this.state.password}
                secureTextEntry={true}
                textContentType="password"
                autoCorrect={false}
                autoCapitalize="none"
              />
            </Item>
            <Button
              style={styles.button}
              onPress={() => {
                const { email, password } = this.state;
                this.firebaseLoginHandler(email, password);
              }}
              full
              primary
            >
              <Text style={styles.buttonText}>Login</Text>
            </Button>
          </Form>
          {this.state.error && (
            <Text style={styles.error}>
              {errorHandler[this.state.error.code]
                ? errorHandler[this.state.error.code]
                : this.state.error.message}
            </Text>
          )}

          {this.state.accountCreated && (
            <Text>Account created. Please login to continue!</Text>
          )}
        </Content>
      </Container>
    );
  }

  // render() {
  //   const errorHandler = {
  //     "auth/user-not-found": "User not found",
  //     "auth/invalid-email": "Invalid email address",
  //     "auth/wrong-password": "Wrong password",
  //     "auth/user-disabled": "Account disabled"
  //   };
  //   return (
  //     <KeyboardAvoidingView
  //       behavior={Platform.OS === "ios" ? "padding" : null}
  //       style={{
  //         flex: 1,
  //         alignItems: "center",
  //         justifyContent: "center"
  //       }}
  //     >
  //       <SafeAreaView>
  //         {this.state.error && (
  //           <Text>
  //             {errorHandler[this.state.error.code]
  //               ? errorHandler[this.state.error.code]
  //               : this.state.error.message}
  //           </Text>
  //         )}

  //         {this.state.accountCreated && (
  //           <Text>Account created. Please login to continue!</Text>
  //         )}

  //         <Text>Email Address</Text>
  //         <TextInput
  //           style={styles.input}
  //           title="email"
  //           placeholder="Email Address"
  //           onChangeText={text => this.setState({ email: text, error: null })}
  //           value={this.state.email}
  //           keyboardType="email-address"
  //           returnKeyType="next"
  //           textContentType="emailAddress"
  //         ></TextInput>
  //         <Text>Password</Text>
  //         <TextInput
  //           style={styles.input}
  //           title="password"
  //           placeholder="Password"
  //           onChangeText={text =>
  //             this.setState({ password: text, error: null })
  //           }
  //           value={this.state.password}
  //           secureTextEntry={true}
  //           textContentType="password"
  //         ></TextInput>
  //         <Button
  //           title="Login"
  //           onPress={() => {
  //             const { email, password } = this.state;
  //             this.firebaseLoginHandler(email, password);
  //           }}
  //         ></Button>
  //       </SafeAreaView>
  //     </KeyboardAvoidingView>
  //   );
  // }

  async firebaseLoginHandler(email, password) {
    if (!email || !password) {
      this.setState({
        error: { message: "Please enter a valid email address and password" }
      });
    } else {
      const userData = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(error => {
          this.setState({ error });
        });

      // console.log(this.props);
      //this.props.addUserData(await userData);
      // this.setState({ userData });

      // AsyncStorage.setItem("userData", JSON.stringify(userData), () => {
      if (userData) {
        const userDataString = JSON.stringify(userData);
        this.props.navigation.navigate("Main", userDataString);
      }
      // });
    }
  }

  componentDidMount() {
    const { params } = this.props.route;
    if (params) {
      const email = JSON.parse(params);
      this.setState({ email, accountCreated: true });
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
    marginTop: 20,
    height: 70
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
