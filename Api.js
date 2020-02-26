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
