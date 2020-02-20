import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginOrCreate from "./Login/LoginOrCreate";
import LoginHandler from "./Login/LoginHandler";
import CreateAccountHandler from "./Login/CreateAccountHandler";

// function Login() {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Login Screen</Text>
//     </View>
//   );
// }

const Stack = createStackNavigator();

class App extends React.Component {
  state = {
    userData: null
  };

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="LoginOrCreate" component={LoginOrCreate} />
          <Stack.Screen
            params={this.addUserData}
            name="LoginHandler"
            component={LoginHandler}
          />
          <Stack.Screen
            name="CreateAccountHandler"
            component={CreateAccountHandler}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  addUserData(userData) {
    this.setState({ userData });
  }
}

export default App;
