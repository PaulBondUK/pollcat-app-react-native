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
  H1
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
    user: "",
    error: null,
    isLoading: true
  };

  render() {
    //"displayName": "kirsty",
    const { navigation } = this.props;
    return (
      <Content
        contentContainerStyle={{
          flex: 1,
          justifyContent: "flex-start",
          marginTop: 100
        }}
      >
        <H1> Logged in as {this.state.user.displayName} </H1>
        {/* <H1>Logged in as {displayName}</H1> */}
        <Button onPress={() => navigation.navigate("Change Email")}>
          <Text> Change Email </Text>
        </Button>
        <Button onPress={() => navigation.navigate("Change Password")}>
          <Text> Change Password</Text>
        </Button>
        <Button onPress={this.firebaseLogoutUser}>
          <Text>Logout</Text>
        </Button>
      </Content>
    );
  }

  async componentDidMount() {
    console.log("here");
    //   currentUser = await firebase.auth().currentUser;
    //   this.setState({ user: currentUser });
    // }
    await firebase.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        this.setState({ user });
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
