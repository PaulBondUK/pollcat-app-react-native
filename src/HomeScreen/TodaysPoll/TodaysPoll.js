import React, { PureComponent, Fragment } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  AsyncStorage,
  Image,
  Dimensions,
  TouchableOpacity
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
    CARDS: null
  };

  render() {
    const now = new Date();
    // const CARDS = [
    //   {
    //     image: {
    //       uri: "https://i.postimg.cc/7ZPTGpGR/marmite.jpg"
    //     },
    //     height: 500,
    //     renderItem: ({ item, index }) => (
    //       <PollCardToday endTime={this.state.endTime} />
    //     ),
    //     renderDetails: ({ item, index }) => (
    //       <View
    //         style={{
    //           paddingVertical: 30,
    //           paddingHorizontal: 16
    //         }}
    //       >
    //         <Text
    //           style={{
    //             color: "rgba(0, 0, 0, 0.7)",
    //             fontSize: 18
    //           }}
    //         >
    //           Test text
    //         </Text>
    //       </View>
    //     )
    //   }
    // ];

    const { isLoading, questionData, endTime, CARDS } = this.state;
    const today = new Date();

    if (isLoading) {
      return (
        <Container>
          <Content>
            <Spinner />
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
          data={CARDS}
          renderItem={({ item, index }) => {
            return item.renderItem({ item, index });
          }}
          renderDetails={({ item, index }) => {
            return item.renderDetails({ item, index });
          }}
        />
        // <Container>
        //   {/* <ConfettiCannon
        //     count={100}
        //     origin={{ x: -10, y: 0 }}
        //     fadeOut={true}
        //   /> */}
        //   <Header>
        //     <Text>Today's Poll</Text>
        //   </Header>
        //   <Content
        //     style={{ flex: 1 }}
        //     contentContainerStyle={{
        //       flex: 1,
        //       backgroundColor: "white",
        //       alignContent: "center",
        //       justifyContent: "space-between"
        //     }}
        //     style={{ flex: 1 }}
        //   >
        //     <H1
        //       style={{
        //         alignSelf: "center",
        //         fontSize: 40,
        //         fontWeight: "bold",
        //         paddingTop: 30,
        //         marginBottom: 10
        //       }}
        //     >{`${today.getDate()} ${monthName[today.getMonth()]}`}</H1>
        //     <PollCard questionData={questionData} />

        //     <CountDown
        //       until={(endTime - Date.now()) / 1000}
        //       size={40}
        //       timeToShow={["H", "M", "S"]}
        //       timeLabels={{ h: "Hrs", m: "Mins", s: "Secs" }}
        //       // style={{ marginTop: 20 }}
        //     />
        //   </Content>
        // </Container>
      );
    }
  }

  componentDidMount() {
    Api.getQuestions()
      .then(({ questions }) => {
        console.log(questions);
        return (questionData = questions.find(question => {
          return question.questionStatus === "current";
        }));
      })
      .then(questionData => {
        const startTime = Date.parse(questionData.startTime);
        const { img, answerArray } = questionData;
        // const parsedAnswerArray = JSON.parse(answerArray);
        // console.log(parsedAnswerArray);
        const endTime = (startTime + 86400) * 1000;
        const CARDS = [
          {
            image: {
              uri: img
            },
            height: 500,
            renderItem: ({ item, index }) => (
              <PollCardToday endTime={endTime} />
            ),
            renderDetails: ({ item, index }) => (
              <View
                style={{
                  paddingVertical: 30,
                  paddingHorizontal: 16
                }}
              >
                <Text
                  style={{
                    color: "rgba(0, 0, 0, 0.7)",
                    fontSize: 18
                  }}
                >
                  Test text
                </Text>
              </View>
            )
          }
        ];
        this.setState({
          questionData,
          isLoading: false,
          endTime,
          CARDS
        });
      })
      .catch(err => {
        console.log(err);
      });

    // const { startTime } = questionData;
    // const endTime = (startTime + 86400) * 1000;

    // this.setState({
    //   questionData,
    //   isLoading: false,
    //   endTime,
    //   CARDS
    // });
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
