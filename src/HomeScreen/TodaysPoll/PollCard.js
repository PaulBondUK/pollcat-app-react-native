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

const PollCard = ({ questionData }) => {
  const { img, question, answerArray, questionStatus, endTime } = questionData;
  // const date = new Date(endTime);
  return (
    <Card
      style={{ marginBottom: 20 }}
      onPress={() => {
        console.log("PRESSED!!!!");
      }}
    >
      <CardItem style={{ paddingBottom: 20 }}>
        <Text
          style={{
            fontSize: 15,
            color: "rgba(0, 0, 0, 0.5)"
          }}
        >
          {"date"}
        </Text>
      </CardItem>

      <CardItem cardBody>
        <Image source={{ uri: img }} style={{ height: height, flex: 1 }} />
      </CardItem>

      <CardItem
        style={{
          height: 70,
          flex: 1,
          flexDirection: "row",
          alignContent: "flex-start",
          justifyContent: "space-between"
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            color: "black",
            fontSize: 20,
            paddingTop: 5
          }}
        >
          {question}
        </Text>

        <MaterialIcons name="keyboard-arrow-right" size={32} />
      </CardItem>
    </Card>
  );
};

export default PollCard;
