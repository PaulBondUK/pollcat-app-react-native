import React, { PureComponent, Fragment } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  AsyncStorage,
  Image,
  Dimensions,
  SafeAreaView
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
import PollCardHistory from "./PollCardHistory";
import { monthName } from "../../Utils/DateFormatting";
import { questions } from "../../../spec/TestData";
import * as Api from "../../../Api";

export default class HistoryScreen extends PureComponent {
  state = {
    questionData: null,
    isLoading: true
  };
  const;
  render() {
    const { navigation } = this.props;
    const now = new Date();
    const { isLoading, questionData } = this.state;
    if (isLoading) {
      return (
        <Container>
          <Content
            contentContainerStyle={{
              flex: 1,
              justifyContent: "center",
              paddingTop: 50
            }}
          >
            <Spinner color={"tomato"} />
          </Content>
        </Container>
      );
    } else if (questionData) {
      return (
        <Container>
          <Content style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
            {questionData.map((question, index) => {
              return (
                <PollCardHistory
                  key={index}
                  questionData={question}
                  navigation={navigation}
                />
              );
            })}
          </Content>
        </Container>
      );
    }
  }

  //   componentDidMount() {
  //     const questionData = questions.filter(question => {
  //       return question.questionStatus === "past";
  //     });

  //     this.setState({ questionData, isLoading: false });
  //   }
  // }

  componentDidMount() {
    Api.getQuestions()
      .then(({ questions }) => {
        return (questionData = questions.filter(question => {
          return question.questionStatus === "past";
        }));
      })
      .then(returnedQuestionData => {
        const questionData = returnedQuestionData.map(question => {
          const startTime = Date.parse(question.startTime);
          const endTime = startTime + 86400;
          const parsedEndTime = new Date(endTime);
          const pageTitle = parsedEndTime.toDateString();
          return { ...question, startTime, endTime, pageTitle };
        });

        this.setState({
          questionData,
          isLoading: false
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
}
