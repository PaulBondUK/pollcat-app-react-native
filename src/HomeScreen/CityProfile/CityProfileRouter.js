import React from "react";
import { View, Text } from "react-native";
import CityProfile from "./CityProfile";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const CityProfileRouter = () => {
  return (
    <Stack.Navigator initialRouteName="CityProfile">
      <Stack.Screen
        name="City Profile"
        component={CityProfile}
        // options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default CityProfileRouter;
