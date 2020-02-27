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
    votedAnswer: null,
    parsedAnswerArray: "",
    referenceObject: "",
    refObjArray: ""
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
    // console.log(refObjArray, "ROA");

    return (
      <View>
        <Content>
          {/* {console.log(referenceObject, "REFOBJ")} */}
          {/* {console.log(parsedAnswerArray, "PAA")} */}
          {/* {parsedAnswerArray.reduce(function(prev, current) {
            return prev.votes > current.votes ? prev : current;
          })} */}
        </Content>
      </View>
    );
  }
  //}

  componentDidMount() {
    Api.getQuestions({ questionStatus: "past" }).then(({ questions }) => {
      const questionData = questions[0];
      console.log(questionData, "QD");

      const refObjArray = [];
      const refObj = {};

      // questionData.forEach(datum => {
      //   // refObj.question = datum.question;

      //   questionData.forEach(answer => {
      //     answer.answerArray.forEach(singleAnswer => {
      //       let answers = JSON.parse(singleAnswer);

      //       //console.log(singleAnswer, "singleAnswer");
      //       refObj.question = datum.question;
      //       refObj.answers = [];
      //       refObj.answers.push(answers.answer);
      //       refObj.vote = answers.votes;
      //     });
      //     //console.log(refObj);

      //     // console.log(answer.answerArray, "answer");
      //     // refObj.answers = JSON.parse(answer.answerArray);

      //     //console.log(refObjArray, "ROA");
      //   });
      //   refObjArray.push(refObj);
      //   //console.log(refObjArray);
      //   this.setState({ refObjArray });
      // });

      // datum.answerArray.forEach(answer => {
      //   let parsedAnswer = JSON.parse(answer);

      //   refObj.answers = parsedAnswer;
      // });
      //this.setState({ refObjArray });
      // });
      //console.log(refObj, "Obj");
      //console.log(refObjArray, "ROA");
      // datum.answerArray.forEach(element => {
      //   let referenceObject = [];
      //   let parsedElement = JSON.parse(element);
      //   referenceObject.push(parsedElement);

      //console.log(referenceObject, "REF OBJECT");
      //let parsedAnswerArray = JSON.parse(element);
      //this.setState({ parsedAnswerArray, referenceObject });
    });
    //});

    // const answerArray = questionData.map(function(datum) {
    //   return datum.answerArray;
    // });

    // const parsedAnswerArray = answerArray.map(function(answer) {
    //   return JSON.parse(answer);
    // });
    // console.log(parsedAnswerArray, "AA");

    //this.setState({ questionData, answerArray, parsedAnswerArray });
  }

  // getWinner = parsedAnswerArray => {
  //   if (parsedAnswerArray[0].votes > parsedAnswerArray[1].votes) {
  //     let winner = parsedAnswerArray[0].answer;
  //     console.log(winner, "in function");
  //     this.setState({ winner });
  //   }
  // };
}
