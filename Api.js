const axios = require("axios");

exports.getQuestions = () => {
  return axios
    .get("https://pollcat-backend.herokuapp.com/api/questions")
    .then(({ data }) => {
      return data;
    });
};
