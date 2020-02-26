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
    showConfetti: false
  };
  render() {
    const { params } = this.props.route;
    const { img, question } = params;
    return (
      <>
        <View style={{ position: "absolute" }}>
          <Confetti active={true} elementCount={100} />
        </View>
        <Container>
          <Content>
            <Image source={{ uri: img }} style={{ height: height, flex: 1 }} />
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>{question}</Text>
            <Button
              style={{ backgroundColor: "tomato", height: 60, margin: 15 }}
              onPress={() => {
                this.setState({ showConfetti: true });
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Reveal the Winner...
              </Text>
            </Button>
          </Content>
        </Container>
      </>
    );
  }
}
