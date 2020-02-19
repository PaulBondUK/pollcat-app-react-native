import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./Login/LoginHandler";
import useLinking from "./Navigation/useLinking";

const Stack = createStackNavigator();

export default function App() {
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  return (
    <View style={styles.container}>
      <NavigationContainer
        ref={containerRef}
        initialState={initialNavigationState}
      >
        <Stack.Navigator>
          <Stack.Screen name="Root" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
