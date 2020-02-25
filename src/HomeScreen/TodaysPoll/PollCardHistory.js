import React from "react";

import { View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

exports.PollCardHistory = () => {
  return (
    <View>
      <View
        style={{
          width: "100%",
          padding: 16,
          backgroundColor: "rgb(255, 255, 255)",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 26,
              maxWidth: "100%",
              fontWeight: "bold",
              color: "rgb(51, 51, 51)"
            }}
          >
            Marmite...?
          </Text>
        </View>
        <View>
          <MaterialIcons name="timer" size={32} />
        </View>
      </View>
    </View>
  );
};
