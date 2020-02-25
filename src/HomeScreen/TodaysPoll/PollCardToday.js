import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import CountDown from "react-native-countdown-component";

exports.PollCardToday = ({ questionData, endTime }) => {
  const { img, answerArray, question } = questionData;
  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
      }}
    >
      <View
        style={{
          position: "absolute",
          top: 0,
          width: "100%",
          padding: 16,
          backgroundColor: "rgba(255, 255, 255, 0.7)"
        }}
      >
        <Text
          style={{
            fontSize: 12,
            marginBottom: 5,
            fontWeight: "bold",
            color: "rgba(0, 0, 0, 0.5)"
          }}
        >
          VOTE NOW
        </Text>
        <Text
          style={{
            fontSize: 26,
            maxWidth: "80%",
            fontWeight: "bold",
            color: "rgb(51, 51, 51)"
          }}
        >
          {question}
        </Text>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "rgb(255, 255, 255)",
          padding: 10
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <View>
            <CountDown
              until={(endTime - Date.now()) / 1000}
              size={20}
              timeToShow={["H", "M", "S"]}
              timeLabels={{ h: "Hrs", m: "Mins", s: "Secs" }}
              digitStyle={
                (endTime - Date.now()) / 1000 < 3600
                  ? { backgroundColor: "#EA162F" }
                  : { backgroundColor: "#20C5B6" }
              }
              digitTxtStyle={{ color: "white" }}
            />
          </View>
        </View>
        <View>
          <MaterialIcons name="timer" size={32} style={{ padding: 10 }} />
        </View>
      </View>
    </View>
  );
};
