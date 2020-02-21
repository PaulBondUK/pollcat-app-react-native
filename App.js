import * as React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AppLoading } from "expo";
import { Container, Text } from "native-base";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import LoginOrCreate from "./Login/LoginOrCreate";
import LoginHandler from "./Login/LoginHandler";
import CreateAccountHandler from "./Login/CreateAccountHandler";
import CreateUsername from "./Login/CreateUsername";
import Main from "./Screens/Main";

// function Login() {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Login Screen</Text>
//     </View>
//   );
// }

const Stack = createStackNavigator();

// const UserContext = React.createContext()

export default class App extends React.Component {
  state = {
    userData: null,
    isReady: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginOrCreate">
          <Stack.Screen
            name="LoginOrCreate"
            component={LoginOrCreate}
            options={{ title: "Welcome to Pollcat" }}
          />
          <Stack.Screen
            name="LoginHandler"
            component={LoginHandler}
            options={{ title: "Login" }}
          />
          <Stack.Screen
            name="CreateAccountHandler"
            component={CreateAccountHandler}
            options={{ title: "Create Account" }}
          />
          <Stack.Screen
            name="CreateUsername"
            component={CreateUsername}
            options={{ title: "Create Username" }}
          />
          <Stack.Screen
            name="Main"
            component={Main}
            options={{ title: "Pollcat" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  addUserData(userData) {
    this.setState({ userData });
  }
}
