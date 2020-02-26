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
  countyName,
  allowVote
}) => {
  const { answer } = answerData;
  const buttonStyle =
    allowVote && allowVote === index
      ? buttonStyles.buttonSelectedVote
      : allowVote && allowVote !== index
      ? buttonStyles.buttonNotSelectedVote
      : buttonStyles.button;
  return (
    <CardItem>
      <Body>
        <Button
          disabled={allowVote ? false : true}
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
          style={buttonStyle}
          block
        >
          <Text style={styles.buttonText}>{answer}</Text>
        </Button>
      </Body>
    </CardItem>
  );
};

// style={
//             allowVote && allowVote === index
//               ? buttonStyles.selectedVote
//               : allowVote && allowVote !== index
//               ? buttonStyles.buttonNotSelectedVote
//               : buttonStyles.button
//           }

// if (allowVote && allowVote === index) {
//   buttonStyles.buttonSelectedVote;
// } else if (allowVote && allowVote !== index) {
//   buttonStyles.buttonNotSelectedVote;
// } else {
//   buttonStyles.button;
// }

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
      Alert.alert("💣 BOOM!", `Your vote for '${answer}' has been recorded.`);
    })
    .catch(err => console.log(err));
};

const buttonStyles = StyleSheet.create({
  button: {
    marginTop: 5,
    marginBottom: 5,
    height: 50
  },
  buttonSelectedVote: {
    marginTop: 5,
    marginBottom: 5,
    height: 50,
    borderColor: "green",
    borderWidth: 5
  },
  buttonNotSelectedVote: {
    marginTop: 5,
    marginBottom: 5,
    height: 50,
    borderColor: "tomato",
    borderWidth: 5
  }
});

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
  buttonSelectedVote: {
    marginTop: 5,
    marginBottom: 5,
    height: 50,
    borderColor: "green",
    borderWidth: 5
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
