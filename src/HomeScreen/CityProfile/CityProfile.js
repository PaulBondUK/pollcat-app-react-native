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

export default class CityProfileScreen extends Component {
  state = {
    questionData: "",
    isLoading: true,
    endTime: null,
    parsedAnswerArray: null,
    votedAnswer: null
  };

  render() {
    const {
      questionData,
      isLoading,
      endTime,
      parsedAnswerArray,
      votedAnswer
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
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text> City Profile! </Text>
      </View>
    );
  }
  //}
  componentDidMount() {
    //changed question status to "past"
    Api.getQuestions({ questionStatus: "past" }).then(({ questions }) => {
      const questionData = questions[0];
      console.log(questionData, "QUESTION DATA");
      const startTime = Date.parse(questionData.startTime);
      console.log(startTime, "START TIME");
      const { img, answerArray } = questionData;
      const parsedAnswerArray = answerArray.map(answer => {
        console.log(JSON.parse(answer), "PARSED ANSWER");
        return JSON.parse(answer);
      });
    });
  }
}
