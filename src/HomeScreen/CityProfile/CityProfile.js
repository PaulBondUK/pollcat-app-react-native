import React, { Component } from "react";
import {
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  View,
  StyleSheet,
  AsyncStorage
} from "react-native";
import {
  Container,
  Header,
  Content,
  Text,
  Spinner,
  Form,
  Item,
  Input,
  Label,
  Button
} from "native-base";
import firebase from "../../Auth/Firebase";
import * as Api from "../../../Api";
import { answers } from "../../../spec/TestData";

export default class CityProfileScreen extends Component {
  state = {
    questionData: "",
    isLoading: true,
    endTime: null,
    answerArray: [],
    votedAnswer: null
  };

  render() {
    const {
      questionData,
      isLoading,
      endTime,
      answerArray,
      votedAnswer,
      startTime
    } = this.state;

    // if (isLoading) {
    //   return (
    //     <Container>
    //       <Content
    //         contentContainerStyle={{
    //           flex: 1,
    //           justifyContent: "center",
    //           paddingTop: 50
    //         }}
    //       >
    //         <Spinner color={"tomato"} />
    //       </Content>
    //     </Container>
    //   );
    // } else {

    return (
      <View>
        <Content>
          {/* {answerArray.reduce(function(prev, current) {
            return (prev.)
          }) } */}
        </Content>
      </View>
    );
  }
  //}
  componentDidMount() {
    //changed question status to "past"
    Api.getQuestions({ questionStatus: "past" }).then(({ questions }) => {
      const questionData = questions;

      console.log(questionData);

      const answerArray = questionData.map(function(datum) {
        return datum.answerArray;
      });

      const parsedAnswerArray = answerArray.map(function(answer) {
        return JSON.parse(answer);
      });
      console.log(parsedAnswerArray, "AA");

      this.setState({ questionData, answerArray });
    });
  }

  // getWinner = parsedAnswerArray => {
  //   if (parsedAnswerArray[0].votes > parsedAnswerArray[1].votes) {
  //     let winner = parsedAnswerArray[0].answer;
  //     console.log(winner, "in function");
  //     this.setState({ winner });
  //   }
  // };
}
