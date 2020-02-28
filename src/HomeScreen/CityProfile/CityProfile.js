import React, { Component } from "react";
import {
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  View,
  StyleSheet,
  AsyncStorage,
  Image
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
  Card,
  Body,
  Left,
  Right
} from "native-base";
import firebase from "../../Auth/Firebase";
import * as Api from "../../../Api";
import { answers } from "../../../spec/TestData";
// import { Card } from "react-native-card-animated-modal/src/components";
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
    const { params } = this.props.route;
    const { townName } = params;
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
          <Content style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
            {refObjArray.map((winner, index) => {
              return (
                <Card>
                  <CardItem>
                    <Left>
                      <MaterialCommunityIcons
                        name="trophy-award"
                        color="gold"
                        size={50}
                        // style={{
                        //   flex: 1,
                        //   alignSelf: "flex-start"
                        //}}
                      />
                      <Body>
                        <Text
                          key={winner.question}
                          style={{
                            fontSize: 22,
                            color: "rgba(0, 0, 0, 0.5)"
                          }}
                          // style={{ flex: 2, alignSelf: "flex-end" }}
                        >
                          {winner.question}
                        </Text>
                        <Text
                          key={index}
                          style={{
                            fontSize: 32,
                            fontWeight: "bold",
                            color: "rgba(0, 0, 0, 0.8)"
                          }}
                          // style={{ flex: 2, alignSelf: "flex-end" }}
                        >
                          {winner.answer[0].response}{" "}
                          <Text
                            key={index}
                            style={{
                              fontSize: 32,
                              fontWeight: "bold",
                              color: "#20C5B6"
                            }}
                            // style={{ flex: 2, alignSelf: "flex-end" }}
                          >
                            {winner.answer[0].percent}%
                          </Text>
                        </Text>
                      </Body>
                    </Left>
                  </CardItem>
                </Card>
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

        this.setState({ refObjArray, isLoading: false });
      });
    });
  }
}
