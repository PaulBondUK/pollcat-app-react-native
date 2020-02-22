import * as React from "react";
import { StyleSheet, View } from "react-native";
import firebase from "../../Auth/Firebase";
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
// import styles from "../Styles.js";

export default class LoginOrCreate extends React.Component {
  render() {
    console.log(styles);
    return (
      <Container
        style={styles.container}
        // style={{
        //   flex: 1,
        //   alignItems: "center",
        //   justifyContent: "center"
        // }}
      >
        <Content>
          <Button
            style={styles.button}
            block
            onPress={() => this.props.navigation.navigate("LoginHandler")}
          >
            <Text style={styles.buttonText}>Login</Text>
          </Button>
          <Button
            style={styles.button}
            block
            bordered
            onPress={() =>
              this.props.navigation.navigate("CreateAccountHandler")
            }
          >
            <Text style={styles.borderedButtonText}>Sign Up</Text>
          </Button>
        </Content>
      </Container>
    );
  }

  // async componentDidMount() {
  //   const user = await firebase.auth().currentUser;
  //   if (await user) {
  //     console.log("user is logged in", user);
  //   } else {
  //     console.log("user is not logged in");
  //   }
  // }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("user is logged in", user);
        this.props.navigation.navigate("Main");
      } else {
        console.log("user is not logged in");
      }
    });
  }

  // async componentDidMount() {
  //   const user = await firebase.auth().currentUser;
  //   if (await user) {
  //     console.log("user is logged in", user);
  //   } else {
  //     console.log("user is not logged in");
  //   }
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
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
    height: 50
  },
  buttonText: {
    color: "white",
    fontSize: 18
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
