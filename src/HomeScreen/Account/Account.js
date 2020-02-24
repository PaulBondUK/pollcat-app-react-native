import React, { PureComponent } from "react";
import { View } from "react-native";
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Icon,
  Text,
  Form,
  Item,
  Input,
  Label,
  Button,
  H1
} from "native-base";
import firebase from "../../Auth/Firebase";

export default class AccountScreen extends PureComponent {
  render() {
    const { displayName } = this.props.extraData;
    return (
      <Content>
        <H1>Logged in as {displayName}</H1>
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
      .then(function() {
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
