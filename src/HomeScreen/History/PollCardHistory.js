import React, { Component } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  AsyncStorage,
  Image,
  Dimensions,
  Alert
} from "react-native";
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Icon,
  Text,
  Form,
  Item,
  Input,
  Label,
  Left,
  Right,
  Body,
  Title,
  Button,
  H1,
  Spinner,
  Card,
  CardItem
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

const height = (Dimensions.get("window").width / 800) * 500;

const PollCardHistory = ({ questionData, navigation }) => {
  const {
    img,
    question,
    answerArray,
    questionStatus,
    endTime,
    pageTitle
  } = questionData;
  return (
    <Card style={{ marginTop: 10, flex: 1, justifyContent: "space-between" }}>
      <CardItem style={{ paddingBottom: 10, height: 60 }}>
        <Text
          style={{
            fontSize: 25,
            color: "rgba(0, 0, 0, 0.8)",
            fontWeight: "bold"
          }}
        >
          {pageTitle}
        </Text>
      </CardItem>

      <CardItem cardBody>
        <Image source={{ uri: img }} style={{ height: height, flex: 1 }} />
      </CardItem>

      <CardItem
        style={{
          height: 60,
          flex: 1,
          flexDirection: "row",
          alignContent: "flex-start",
          justifyContent: "space-between"
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            color: "tomato",
            fontSize: 20,
            paddingTop: 5
          }}
        >
          {question}
        </Text>

        <MaterialIcons
          name="keyboard-arrow-right"
          color="tomato"
          size={32}
          onPress={() => {
            navigation.navigate("SinglePollHistory", questionData);
          }}
        />
      </CardItem>
    </Card>
  );
};

export default PollCardHistory;
