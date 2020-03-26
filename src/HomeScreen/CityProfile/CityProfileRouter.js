import React from "react";
import { View, Text } from "react-native";
import CityProfile from "./CityProfile";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const CityProfileRouter = props => {
  const { townName } = props.route.params;
  return (
    <Stack.Navigator initialRouteName="CityProfile">
      <Stack.Screen
        name="City Profile"
        component={CityProfile}
        initialParams={{ townName }}
        options={({ route }) => ({
          title: `${route.params.townName}'s City Profile`
        })}
      />
    </Stack.Navigator>
  );
};

export default CityProfileRouter;
