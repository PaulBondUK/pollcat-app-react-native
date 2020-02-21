import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginOrCreate from "./Login/LoginOrCreate";
import LoginHandler from "./Login/LoginHandler";
import CreateAccountHandler from "./Login/CreateAccountHandler";
import CreateUsername from "./Login/CreateUsername";
import Main from "./Screens/Main";
import Loading from "./Screens/Loading";

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
    initialRouteName: "Loading"
  };

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginOrCreate">
          <Stack.Screen
            name="Loading"
            component={Loading}
            options={{ title: "Pollcat" }}
          />
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
