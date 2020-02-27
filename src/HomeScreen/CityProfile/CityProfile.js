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
  Button,
  CardItem,
  Body
} from "native-base";
import firebase from "../../Auth/Firebase";
import * as Api from "../../../Api";
import { answers } from "../../../spec/TestData";
import { Card } from "react-native-card-animated-modal/src/components";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default class CityProfileScreen extends Component {
  state = {
    questionData: "",
    isLoading: true,
    endTime: null,
    answerArray: [],
    votedAnswer: null,
    parsedAnswerArray: "",
    referenceObject: "",
    refObjArray: null
  };

  render() {
    const {
      questionData,
      isLoading,
      endTime,
      answerArray,
      votedAnswer,
      startTime,
      parsedAnswerArray,
      referenceObject,
      refObjArray
    } = this.state;

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
    } else {
      //console.log(refObjArray, "ROA");

      return (
        <Container>
          <Content>
            {refObjArray.map((winner, index) => {
              return (
                <CardItem>
                  <Body>
                    <Text key={index}>
                      {winner.question}, {winner.answer[0].response},
                      {winner.answer[0].percent}%
                    </Text>
                  </Body>
                </CardItem>
              );
            })}
          </Content>
        </Container>
      );
    }
  }

  componentDidMount() {
    Api.getQuestions({ questionStatus: "past" }).then(({ questions }) => {
      const questionData = questions;

      const refObjArray = [];

      questionData.forEach(singleQuestion => {
        const refObj = {};
        let totalVote = 0;
        const answersArrayParsed = singleQuestion.answerArray.map(answer => {
          const answerParsed = JSON.parse(answer);
          totalVote += answerParsed.votes;
          answerParsed.response = answerParsed.answer;

          delete answerParsed.answer;
          delete answerParsed.img;
          return answerParsed;
        });

        const answersArraySorted = answersArrayParsed.sort((a, b) =>
          a.votes < b.votes ? 1 : -1
        );
        answersArraySorted.forEach(answer => {
          answer.percent = ((answer.votes * 100) / totalVote).toFixed();
        });
        refObj.question = singleQuestion.question;
        refObj.answer = answersArraySorted;

        //refObj.percent = singleQuestion.votes / totalVote;
        // refObj[singleQuestion.question] = answersArraySorted;
        //console.log(refObj, "RO");

        refObjArray.push(refObj);
        console.log(refObjArray, "ROA");

        this.setState({ refObjArray, isLoading: false });
      });
    });
  }
}
