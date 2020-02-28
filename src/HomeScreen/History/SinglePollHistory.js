import React, { PureComponent } from "react";
import { View, Image, Dimensions } from "react-native";
import * as Animatable from "react-native-animatable";
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
              <Animatable.View animation="swing" delay="200">
                <Button
                  style={{
                    backgroundColor: "tomato",
                    marginTop: 10,
                    marginBottom: 10,
                    marginLeft: 20,
                    marginRight: 20,
                    height: 50
                  }}
                  onPress={() => {
                    this.setState({ revealWinner: true });
                  }}
                >
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                    Reveal...
                  </Text>
                </Button>
              </Animatable.View>
            )}
            {/* <Animatable.View animation="none">
              <Button
                style={{
                  backgroundColor: "tomato",
                  height: 70,
                  marginLeft: 15,
                  marginRight: 15,
                  flex: 1,
                  alignSelf: "center"
                }}
                onPress={() => {
                  this.setState({ revealWinner: true });
                }}
              >
                <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                  Reveal the Winner...
                </Text>
              </Button>
            </Animatable.View> */}
            {revealWinner &&
              answerArray.map((answer, index) => {
                return (
                  <Animatable.View
                    animation={"bounceIn"}
                    delay={(answerArray.length - index) * 200}
                  >
                    <Card
                      key={index}
                      style={
                        index === 0
                          ? {
                              height: 60,
                              marginLeft: 15,
                              marginRight: 15,
                              marginBottom: 15
                            }
                          : {
                              height: 45,
                              marginLeft: 30,
                              marginRight: 30,
                              marginBottom: 15
                            }
                      }
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
                          style={
                            index === 0
                              ? {
                                  fontWeight: "bold",
                                  fontSize: 20,
                                  color: "white"
                                }
                              : {
                                  fontWeight: "bold",
                                  fontSize: 16,
                                  color: "white"
                                }
                          }
                        >
                          {answer.answer}
                        </Text>

                        <Text
                          style={
                            index === 0
                              ? {
                                  fontSize: 20,
                                  color: "white"
                                }
                              : {
                                  fontSize: 16,
                                  color: "white"
                                }
                          }
                        >{`${answer.votes} votes`}</Text>
                      </CardItem>
                    </Card>
                  </Animatable.View>
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
