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
import { questions, answers } from "../../../spec/TestData";
import PollCard from "../TodaysPoll/PollCard";
import { monthName } from "../../Utils/DateFormatting";

const height = (Dimensions.get("window").width / 800) * 500;

export default class TodaysPollScreen extends PureComponent {
  state = {
    questionData: null,
    isLoading: true
  };

  render() {
    const { isLoading, questionData } = this.state;
    const today = new Date();
    return (
      <Container>
        <Header>
          <Text>Today's Poll</Text>
        </Header>
        {isLoading ? (
          <Content>
            <Spinner />
          </Content>
        ) : (
          <Content
            style={{ flex: 1 }}
            contentContainerStyle={{
              flex: 1,
              backgroundColor: "white",
              alignContent: "center"
            }}
            style={{ flex: 1 }}
          >
            <H1
              style={{
                alignSelf: "center",
                fontSize: 40,
                fontWeight: "bold",
                paddingTop: 30,
                marginBottom: 10
              }}
            >{`${today.getDate()} ${monthName[today.getMonth()]}`}</H1>
            <PollCard questionData={questionData} filter={"current"} />
          </Content>
        )}
      </Container>
    );
  }

  componentDidMount() {
    const questionData = questions.find(question => {
      return question.questionStatus === "current";
    });
    console.log(questionData);
    this.setState({ questionData, isLoading: false });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  header1: { flex: 1, justifyContent: "center" },
  input: {
    marginTop: 10
  },
  button: {
    fontSize: 10
  },
  buttonText: {
    fontSize: 13
  },
  error: {
    color: "red",
    fontSize: 20,
    marginTop: 20,
    alignContent: "center",
    flex: 1
  }
});
