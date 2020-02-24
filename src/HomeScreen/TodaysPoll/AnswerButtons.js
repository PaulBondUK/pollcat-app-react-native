import React from "react";
import { StyleSheet } from "react-native";
import { CardItem, Body, H2, Button, Text } from "native-base";

export default AnswerButtons = ({ answerData }) => {
  const { answer } = answerData;
  return (
    <CardItem>
      <Body>
        <Button style={styles.button} block>
          <Text style={styles.buttonText}>{answer}</Text>
        </Button>
      </Body>
    </CardItem>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    alignContent: "center",
    justifyContent: "center"
  },
  input: {
    marginTop: 10,
    height: 50
  },
  button: {
    marginTop: 5,
    marginBottom: 5,
    height: 50
  },
  buttonText: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold"
  },
  error: {
    color: "red",
    fontSize: 18,
    marginTop: 20,
    alignSelf: "center",
    flex: 1,
    alignContent: "center"
  }
});
