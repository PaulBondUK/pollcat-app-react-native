import React, { Component } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  AsyncStorage,
  Image,
  Dimensions
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

const height = (Dimensions.get("window").width / 800) * 500;

const PollCard = ({ questionData }) => {
  return (
    <Card>
      <CardItem>
        <Body>
          <H1>{questionData.question}</H1>
        </Body>
      </CardItem>
      <CardItem cardBody>
        <Image
          source={{ uri: questionData.img }}
          style={{ height: height, flex: 1 }}
        />
      </CardItem>
      <CardItem>
        <Body>
          <H1>{questionData.answerArray[0].answer}</H1>
        </Body>
      </CardItem>
      <CardItem>
        <Body>
          <H1>{questionData.answerArray[1].answer}</H1>
        </Body>
      </CardItem>
    </Card>
  );
};

export default PollCard;
