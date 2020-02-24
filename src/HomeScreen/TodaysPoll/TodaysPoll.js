import React, { Component, Fragment } from "react";
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
import { questions, answers } from "../../../spec/TestData";

const width = Dimensions.get("window").width;

export default class TodaysPollScreen extends Component {
  state = {
    questions: null,
    isLoading: true
  };

  render() {
    const { isLoading, questions } = this.state;
    console.log(questions && questions[0]);
    return (
      <Container>
        <Header />

        {isLoading ? (
          <Content>
            <Spinner />
          </Content>
        ) : (
          <Content
            contentContainerStyle={{
              flex: 1,
              backgroundColor: "white"
            }}
            style={{ flex: 1 }}
          >
            <Card>
              <CardItem>
                <Body>
                  <H1>{questions && questions[0].question}</H1>
                </Body>
              </CardItem>
              <CardItem cardBody>
                <Image
                  source={{ uri: "https://i.postimg.cc/CMCJppjB/marmite.jpg" }}
                  style={{ height: 500, width: width, flex: 1 }}
                  resizeMode="cover"
                />
              </CardItem>
            </Card>
          </Content>
        )}
      </Container>
    );
  }

  componentDidMount() {
    this.setState({ questions, isLoading: false });
  }
}
