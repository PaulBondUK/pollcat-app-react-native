import React, { Component, Fragment } from "react";
import { TextInput, View, StyleSheet, AsyncStorage } from "react-native";
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

export default class TodaysPollScreen extends Component {
  state = {
    questions: null,
    isLoading: true
  };

  render() {
    return (
      <Fragment>
        <Header />

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
                <H1>
                  {this.state.questions && this.state.questions[0].question}
                </H1>
              </Body>
            </CardItem>
          </Card>
          <Text>Hello!!!!!</Text>
        </Content>
      </Fragment>
    );
  }

  componentDidMount() {
    this.setState({ questions, isLoading: false });
  }
}
