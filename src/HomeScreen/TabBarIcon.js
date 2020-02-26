import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

const TabBarIcon = ({ name, focused }) => {
  return (
    <MaterialIcons name={name} size={25} color={focused ? "tomato" : "gray"} />
  );
};

export default TabBarIcon;
