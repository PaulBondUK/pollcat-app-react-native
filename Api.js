const axios = require("axios");

getQuestions = () => {
  return axios
    .get("https://pollcat-backend.herokuapp.com/api/questions")
    .then(response => {
      console.log(response.data);
    })
    .catch(err => {
      console.log(err);
    });
};

getQuestions();
