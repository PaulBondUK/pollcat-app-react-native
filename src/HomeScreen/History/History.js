import React, { PureComponent, Fragment } from "react";
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
import PollCard from "../TodaysPoll/PollCard";
import { monthName } from "../../Utils/DateFormatting";
import { questions } from "../../../spec/TestData";

export default class HistoryScreen extends PureComponent {
  state = {
    questionData: null,
    isLoading: true
  };
  const;
  render() {
    const { isLoading, questionData } = this.state;
    if (isLoading) {
      return (
        <Container>
          <Content>
            <Spinner />
          </Content>
        </Container>
      );
    } else if (questionData) {
      return (
        <Container>
          <Content>
            {questionData.map((question, index) => {
              return <PollCard key={index} questionData={question} />;
            })}
          </Content>
        </Container>
      );
    }
  }

  componentDidMount() {
    const questionData = questions.filter(question => {
      return question.questionStatus === "past";
    });

    this.setState({ questionData, isLoading: false });
  }
}
