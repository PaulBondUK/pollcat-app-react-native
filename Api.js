const axios = require("axios");

exports.getQuestions = args => {
  const { questionStatus } = args;
  return axios
    .get(`https://pollcat-backend.herokuapp.com/api/questions/`, {
      params: { questionStatus }
    })
    .then(({ data }) => {
      return data;
    });
};

exports.postAnswer = ({
  question_id,
  userUid,
  answerIndex,
  townName,
  countyName
}) => {
  return axios
    .post(`https://pollcat-backend.herokuapp.com/api/answers`, {
      question_id,
      userUid,
      answerIndex,
      townName,
      countyName
    })
    .catch(err => {
      console.log(err);
    });
};

exports.checkIfUserHasVoted = (question_id, userUid) => {
  return axios
    .get(
      `https://pollcat-backend.herokuapp.com/api/questions/${question_id}/answers/${userUid}`
    )
    .then(({ data }) => {
      console.log(data);
    });
};
