import React, { PureComponent } from "react";
import { View, Image, Dimensions } from "react-native";
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
import { MaterialIcons } from "@expo/vector-icons";
import { render } from "react-dom";
import Confetti from "@milkywire/react-native-confetti";

// const height = (Dimensions.get("window").width / 800) * 500;
const width = Dimensions.get("window").width;
const height = (width / 800) * 500;

export default class SinglePollHistory extends PureComponent {
  state = {
    showResults: false,
    revealWinner: false,
    isLoading: true,
    answerArray: null
  };
  render() {
    const { params } = this.props.route;
    const { img, question } = params;
    const { answerArray, isLoading, revealWinner } = this.state;
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
        <Container>
          <Content>
            <Image source={{ uri: img }} style={{ height: height, flex: 1 }} />
            <Text
              style={{
                fontSize: 25,
                fontWeight: "bold",
                padding: 20
              }}
            >
              {question}
            </Text>
            {!revealWinner && (
              <Button
                style={{
                  backgroundColor: "tomato",
                  height: 70,
                  marginLeft: 15,
                  marginRight: 15
                }}
                onPress={() => {
                  this.setState({ revealWinner: true });
                }}
              >
                <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                  Reveal the Winner...
                </Text>
              </Button>
            )}
            {revealWinner &&
              answerArray.map((answer, index) => {
                return (
                  <Card
                    key={index}
                    style={{
                      marginLeft: 15,
                      marginRight: 15
                    }}
                  >
                    <CardItem
                      style={
                        index === 0
                          ? {
                              flex: 1,
                              justifyContent: "space-between",
                              backgroundColor: "#20C5B6"
                            }
                          : {
                              flex: 1,
                              justifyContent: "space-between",
                              backgroundColor: "tomato"
                            }
                      }
                    >
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 20,
                          color: "white"
                        }}
                      >
                        {answer.answer}
                      </Text>

                      <Text
                        style={{
                          fontSize: 20,
                          color: "white"
                        }}
                      >{`${answer.votes} votes`}</Text>
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
    const { params } = this.props.route;
    const { img, question, answerArray } = params;
    const parsedAnswerArray = answerArray.map(answer => {
      return JSON.parse(answer);
    });
    parsedAnswerArray.sort((a, b) => b.votes - a.votes);
    this.setState({
      isLoading: false,
      answerArray: parsedAnswerArray
    });
  }
}
