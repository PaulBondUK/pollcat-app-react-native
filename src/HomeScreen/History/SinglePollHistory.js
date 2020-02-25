import React from "react";
import { View, Text, Image, Dimensions } from "react-native";

const height = (Dimensions.get("window").width / 800) * 500;

const SinglePollHistory = ({ route, navigation }) => {
  const { params } = route;
  const { img, question } = params;
  console.log("QUESTIONS!!!!", params);
  return (
    <View>
      <Text>{question}</Text>
      <Image source={{ uri: img }} style={{ height: height, flex: 1 }} />
    </View>
  );
};

export default SinglePollHistory;
