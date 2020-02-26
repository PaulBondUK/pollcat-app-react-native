import React from "react";
import { StyleSheet, Alert } from "react-native";
import { CardItem, Body, H2, Button, Text } from "native-base";
import * as Api from "../../../Api";

export default AnswerButtons = ({
  answerData,
  index,
  userUid,
  question_id,
  townName,
  countyName
}) => {
  const { answer } = answerData;
  return (
    <CardItem>
      <Body>
        <Button
          onPress={() =>
            submitVote(
              index,
              question_id,
              userUid,
              townName,
              countyName,
              answer
            )
          }
          style={styles.button}
          block
        >
          <Text style={styles.buttonText}>{answer}</Text>
        </Button>
      </Body>
    </CardItem>
  );
};

const submitVote = (
  index,
  question_id,
  userUid,
  townName,
  countyName,
  answer
) => {
  Api.postAnswer({
    question_id,
    userUid,
    answerIndex: index,
    townName,
    countyName
  })
    .then(({ data }) => {
      console.log(data);
      Alert.alert("💣 BOOM!", `Your vote for '${answer}' has been recorded.`);
    })
    .catch(err => console.log(err));
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
