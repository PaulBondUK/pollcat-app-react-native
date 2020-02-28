import React, { PureComponent } from "react";
import ChangePassword from "../Account/ChangePassword";
import { createStackNavigator } from "@react-navigation/stack";
import AccountRouter from "../Account/AccountRouter";
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Icon,
  Form,
  Item,
  Input,
  Label,
  Button,
  H1,
  Spinner
} from "native-base";
import {
  SafeAreaView,
  KeyboardAvoidingView,
  Text,
  TextInput,
  View,
  StyleSheet,
  Platform
} from "react-native";
import firebase from "../../Auth/Firebase";

export default class AccountScreen extends PureComponent {
  state = {
    user: null,
    error: null,
    isLoading: true
  };

  render() {
    //"displayName": "kirsty",
    const { navigation } = this.props;
    if (this.state.isLoading) {
      return (
        <Container>
          <Content
            contentContainerStyle={{
              flex: 1,
              justifyContent: "center",
              paddingTop: 50
            }}
          >
            <Spinner color={"tomato"} />
          </Content>
        </Container>
      );
    } else {
      return (
        <Content
          contentContainerStyle={{
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center",
            marginTop: 20
          }}
        >
          <H1
            style={{
              fontSize: 25,
              color: "rgba(0, 0, 0, 0.8)",
              fontWeight: "bold",
              marginBottom: 20
            }}
          >
            Logged in as {this.state.user.displayName}
          </H1>
          {/* <H1>Logged in as {displayName}</H1> */}
          <Button
            style={styles.button}
            block
            onPress={() => navigation.navigate("Change Password")}
          >
            <Text style={styles.buttonText}> Change Password</Text>
          </Button>
          <Button block style={styles.button} onPress={this.firebaseLogoutUser}>
            <Text style={styles.buttonText}>Logout</Text>
          </Button>
        </Content>
      );
    }
  }

  async componentDidMount() {
    console.log("here");
    //   currentUser = await firebase.auth().currentUser;
    //   this.setState({ user: currentUser });
    // }
    await firebase.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        this.setState({ user, isLoading: false });
      } else {
        this.props.navigation.navigate("LoginOrCreate");
      }
    });
  }

  firebaseLogoutUser() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("Sign-out successful");
        this.props.navigation.navigate("LoginOrCreate");
      })
      .catch(function(error) {
        // An error happened.
      });
  }
  // componentDidUpdate() {
  //   // const userData = JSON.parse(this.props.route.params);
  //   // this.setState({ userData });
  //   //this.firebaseUserCheck();
  //   firebase.auth().onAuthStateChanged(user => {
  //     if (user) {
  //       this.setState({ user });
  //     } else {
  //       this.props.navigation.navigate("LoginOrCreate");
  //     }
  //   });
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "column-reverse",
    // backgroundColor: "#fff",
    justifyContent: "center"
    // alignContent: "flex-end"
  },
  input: {
    marginTop: 10
  },
  button: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    height: 50
  },
  borderedButton: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    height: 50,
    backgroundColor: "white"
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold"
  },
  borderedButtonText: {
    color: "#0960FF",
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
