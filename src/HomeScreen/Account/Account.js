import React, { PureComponent } from "react";
import ChangePassword from "../Account/ChangePassword";
import { createStackNavigator } from "@react-navigation/stack";
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
  render() {
    const {
      extraData: { displayName },
      navigation
    } = this.props;
    return (
      <Content
        contentContainerStyle={{
          flex: 1,
          justifyContent: "flex-start",
          marginTop: 100
        }}
      >
        <H1>Logged in as {displayName}</H1>
        <Button onPress={() => navigation.navigate("ChangePassword")}>
          <Text> Change Password</Text>
        </Button>
        <Button onPress={this.firebaseLogoutUser}>
          <Text>Logout</Text>
        </Button>
      </Content>
    );
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
