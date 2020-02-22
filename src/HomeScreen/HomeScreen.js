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
import Account from "./Account/Account";
import CityProfile from "./CityProfile/CityProfile";
import History from "./History/History";
import TodaysPoll from "./TodaysPoll/TodaysPoll";

export default class HomeScreen extends Component {
  state = {
    user: null,
    activePage: "TodaysPoll"
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
          <Account />
        </Content>
        <Footer>
          <FooterTab>
            <Button
              style={styles.button}
              vertical
              onPress={() => this.setState({ activePage: "TodaysPoll" })}
              active={this.state.activePage === "TodaysPoll"}
            >
              <Icon type="MaterialCommunityIcons" name="calendar-today" />
              <Text style={styles.buttonText}>Today's Poll</Text>
            </Button>
            <Button
              style={styles.button}
              vertical
              onPress={() => this.setState({ activePage: "History" })}
              active={this.state.activePage === "History"}
            >
              <Icon type="MaterialCommunityIcons" name="history" />
              <Text style={styles.buttonText}>History</Text>
            </Button>
            <Button
              style={styles.button}
              vertical
              onPress={() => this.setState({ activePage: "CityProfile" })}
              active={this.state.activePage === "CityProfile"}
            >
              <Icon type="MaterialCommunityIcons" name="city" />
              <Text style={styles.buttonText}>City Profile</Text>
            </Button>
            <Button
              style={styles.button}
              vertical
              onPress={() => this.setState({ activePage: "Account" })}
              active={this.state.activePage === "Account"}
            >
              <Icon type="MaterialCommunityIcons" name="account" />
              <Text style={styles.buttonText}>Account</Text>
            </Button>
          </FooterTab>
        </Footer>
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
    fontSize: 10
  },
  buttonText: {
    fontSize: 13
  },
  error: {
    color: "red",
    fontSize: 20,
    marginTop: 20,
    alignContent: "center",
    flex: 1
  }
});
