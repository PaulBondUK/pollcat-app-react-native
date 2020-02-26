import React from "react";
import { View, Text } from "react-native";
import AccountScreen from "../Account/Account";
import ChangeEmail from "../Account/ChangeEmail";
import ChangePassword from "../Account/ChangePassword";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
const AccountRouter = () => {
  return (
    <Stack.Navigator initialRouteName="Account">
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen name="Change Email" component={ChangeEmail} />
      <Stack.Screen name="Change Password" component={ChangePassword} />
    </Stack.Navigator>
  );
};
export default AccountRouter;
