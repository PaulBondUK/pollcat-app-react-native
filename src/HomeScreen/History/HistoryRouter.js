import React from "react";
import { View, Text } from "react-native";
import History from "./History";
import SinglePollHistory from "./SinglePollHistory";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const HistoryRouter = () => {
  return (
    <Stack.Navigator initialRouteName="LoginOrCreate">
      <Stack.Screen
        name="History"
        component={History}
        // options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SinglePollHistory"
        component={SinglePollHistory}
        options={({ route }) => ({ title: route.params.pageTitle })}
        // options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HistoryRouter;
