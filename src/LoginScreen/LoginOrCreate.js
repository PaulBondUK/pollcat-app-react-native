import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  ImageBackground
} from "react-native";
import firebase from "../Auth/Firebase";
import { Container, Header, Content, Text, Button } from "native-base";
const width = Dimensions.get("window").width;

export default class LoginOrCreate extends React.Component {
  render() {
    return (
      <Container>
        <ImageBackground
          source={require("../../Assets/splash.png")}
          style={{
            resizeMode: "contain",
            flex: 1
          }}
        >
          <Content
            style={{ flex: 1, height: 50 }}
            contentContainerStyle={{ flex: 1 }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "flex-end",
                marginBottom: 100
              }}
            >
              {/* <Image
              source={require("./big_logo.png")}
              style={{
                resizeMode: "contain",
                width: 300,
                flex: 1,
                justifyContent: "center"
              }}
            /> */}

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
                onPress={() =>
                  this.props.navigation.navigate("CreateAccountHandler")
                }
              >
                <Text style={styles.borderedButtonText}>Sign up</Text>
              </Button>
            </View>
          </Content>
        </ImageBackground>
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
    height: 50,
    backgroundColor: "#6347ff"
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
    fontSize: 22,
    fontWeight: "bold"
  },
  borderedButtonText: {
    color: "#6347ff",
    fontSize: 22,
    fontWeight: "bold"
  },
  error: {
    color: "red",
    fontSize: 20,
    marginTop: 20,
    alignContent: "center",
    flex: 1
  }
});
