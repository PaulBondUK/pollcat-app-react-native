import * as React from "react";
import { StyleSheet, View } from "react-native";
import firebase from "../Auth/Firebase";
import { Container, Header, Content, Text, Button } from "native-base";
// import styles from "../Styles.js";

export default class LoginOrCreate extends React.Component {
  render() {
    // const { height: screenHeight } = Dimensions.get("window");
    return (
      <Container

      // style={styles.container}
      // style={{
      //   flex: 1,
      //   alignItems: "center",
      //   justifyContent: "center"
      // }}
      >
        <Content style={{ flex: 1 }} contentContainerStyle={{ flex: 1 }}>
          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
              marginBottom: 100
            }}
          >
            <Button
              style={styles.button}
              block
              onPress={() => this.props.navigation.navigate("LoginHandler")}
            >
              <Text style={styles.buttonText}>Login</Text>
            </Button>
            <Button
              style={styles.borderedButton}
              block
              bordered
              onPress={() =>
                this.props.navigation.navigate("CreateAccountHandler")
              }
            >
              <Text style={styles.borderedButtonText}>Sign up</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("user is logged in");
        this.props.navigation.navigate("HomeScreen");
      } else {
        console.log("user is not logged in");
      }
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
