import React, { PureComponent, Fragment } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  AsyncStorage,
  Image,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  Alert
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
// import PollCard from "./PollCard";
import AnswerButtons from "./AnswerButtons";
import { monthName } from "../../Utils/DateFormatting";
import ConfettiCannon from "react-native-confetti-cannon";
import CountDown from "react-native-countdown-component";
import CardList from "react-native-card-animated-modal";
import { PollCardToday } from "./PollCardToday";
import CARDS from "./CardGeneratorToday";
import * as Api from "../../../Api";

export default class TodaysPollScreen extends PureComponent {
  state = {
    questionData: null,
    isLoading: true,
    endTime: null,
    parsedAnswerArray: null,
    votedAnswer: null
  };

  render() {
    const now = new Date();
    const {
      isLoading,
      questionData,
      endTime,
      parsedAnswerArray,
      votedAnswer
    } = this.state;
    const { countyName, townName, userUid } = this.props.route.params;
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
      return (
        <CardList
          listProps={{
            ListHeaderComponent: () => (
              <View style={{ padding: 16, paddingBottom: 0 }}>
                <Text
                  style={{
                    fontSize: 15,
                    color: "rgba(0, 0, 0, 0.5)"
                  }}
                >
                  {now.toDateString()}
                </Text>
                <Text style={{ fontSize: 32, fontWeight: "bold" }}>
                  Today's Poll
                </Text>
              </View>
            )
          }}
          data={[
            {
              image: {
                uri: questionData.img
              },
              height: 550
            }
          ]}
          renderItem={({ item, index }) => (
            <PollCardToday endTime={endTime} questionData={questionData} />
          )}
          renderDetails={({ item, index }) => (
            <View
              style={{
                paddingVertical: 30,
                paddingHorizontal: 16
              }}
            >
              <Content>
                <CardItem>
                  <Body>
                    {parsedAnswerArray.map((answer, index) => {
                      return (
                        <Button
                          onPress={() => this.submitVote(index)}
                          style={styles.button}
                          key={index}
                          disabled={typeof votedAnswer === "number"}
                          block
                        >
                          <Text style={styles.buttonText}>{answer.answer}</Text>
                        </Button>
                      );
                    })}
                  </Body>
                </CardItem>
              </Content>
            </View>
          )}
        />
      );
    }
  }

  submitVote(index) {
    const { questionData, parsedAnswerArray } = this.state;
    const { question_id } = questionData;
    const { countyName, townName, userUid } = this.props.route.params;
    Api.postAnswer({
      question_id,
      userUid,
      answerIndex: index,
      townName,
      countyName
    })
      .then(({ data }) => {
        this.setState({ votedAnswer: index });
        Alert.alert(
          "💣 BOOM!",
          `Your vote for '${parsedAnswerArray[index].answer}' has been recorded`
        );
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    Api.getQuestions({ questionStatus: "current" })
      .then(({ questions }) => {
        const questionData = questions[0];
        const startTime = Date.parse(questionData.startTime);
        const { img, answerArray } = questionData;
        const parsedAnswerArray = answerArray.map(answer => {
          return JSON.parse(answer);
        });

        const endTime = startTime + 86400;
        this.setState({
          questionData,
          endTime,
          parsedAnswerArray
        });
        return questionData.question_id;
      })
      .then(question_id => {
        const { userUid } = this.props.route.params;
        return Api.checkIfUserHasVoted(question_id, userUid);
      })
      .then(data => {
        if (typeof data.answer.answerIndex === "number") {
          const votedAnswer = data.answer.answerIndex;
          this.setState({
            votedAnswer,
            isLoading: false
          });
        } else {
          this.setState({ isLoading: false });
        }
      })
      .catch(err => {
        console.log(err);
      });
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
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    height: 50
  },
  buttonText: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold"
  },
  error: {
    color: "red",
    fontSize: 20,
    marginTop: 20,
    alignContent: "center",
    flex: 1
  }
});
