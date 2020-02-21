import React, { Component } from "react";
import { TextInput, View, StyleSheet, AsyncStorage } from "react-native";
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
  Button
} from "native-base";
import firebase from "../Auth/Firebase";

export default class Main extends Component {
  state = {
    user: null
  };

  render() {
    if (this.state.user && !this.state.user.displayName) {
      this.props.navigation.navigate("CreateDisplayName");
    }
    console.log(this.state.user, "userData");
    return (
      <Container>
        <Header />
        <Content>
          <Footer>
            <FooterTab>
              <Button vertical>
                <Icon name="ios-today" />
                <Text>Today's Poll</Text>
              </Button>
              <Button vertical>
                <Icon name="" />
                <Text></Text>
              </Button>
              <Button vertical>
                <Icon name="" />
                <Text></Text>
              </Button>
            </FooterTab>
          </Footer>
        </Content>
      </Container>
    );
  }

  firebaseUserCheck = () => {
    const user = firebase.auth().currentUser;

    if (user) {
      console.log(user, "user is logged in");
    } else {
      console.log("user is not logged in");
      this.props.navigation.navigate("LoginOrCreate");
    }
  };

  componentDidMount() {
    // const userData = JSON.parse(this.props.route.params);
    // this.setState({ userData });
    //this.firebaseUserCheck();
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      } else {
        this.props.navigation.navigate("LoginOrCreate");
      }
    });
  }
}
