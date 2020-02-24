const questions = [
  {
    question: "Marmite...",
    startTime: 1582833600,
    questionStatus: "current",
    img: "question photo",
    answerArray: [
      { answer: "Love it", img: "answer photo" },
      { answer: "Hate it", img: "answer photo" }
    ]
  },
  {
    question: "Best Burger in Manchester?",
    startTime: 1582660800,
    questionStatus: "past",
    img: "question photo",
    answerArray: [
      { answer: "Solita", img: "answer photo", votes: 187 },
      { answer: "Almost Famous", img: "answer photo", votes: 256 },
      { answer: "Yard & Coop", img: "answer photo", votes: 110 },
      { answer: "Home Sweet Home", img: "answer photo", votes: 54 },
      { answer: "Five Guys", img: "answer photo", votes: 160 },
      { answer: "Somewhere else...", img: "answer photo", votes: 80 }
    ]
  },
  {
    question: "Custard Creams or Bourbons?",
    startTime: 1582747200,
    questionStatus: "past",
    img: "question photo",
    answerArray: [
      { answer: "Custard Creams", img: "answer photo", votes: 543 },
      { answer: "Bourbons", img: "answer photo", votes: 679 }
    ]
  },
  {
    question: "Liam or Noel?",
    startTime: 1582574400,
    questionStatus: "past",
    img: "question photo",
    answerArray: [
      { answer: "Liam", img: "answer photo", votes: 830 },
      { answer: "Noel", img: "answer photo", votes: 869 },
      { answer: "Neither", img: "answer photo", votes: 612 }
    ]
  },
  {
    question: "Best Pizza in Manchester?",
    startTime: 1582488000,
    questionStatus: "past",
    img: "question photo",
    answerArray: [
      { answer: "Rudy's", img: "answer photo", votes: 498 },
      { answer: "Double Zero", img: "answer photo", votes: 461 },
      { answer: "Noi Quattro", img: "answer photo", votes: 180 },
      { answer: "Bravissimi!", img: "answer photo", votes: 80 },
      { answer: "Somewhere else...", img: "answer photo", votes: 250 }
    ]
  },
  {
    question: "City or United?",
    startTime: 1582401600,
    questionStatus: "past",
    img: "question photo",
    answerArray: [
      { answer: "City", img: "answer photo", votes: 919 },
      { answer: "United", img: "answer photo", votes: 743 }
    ]
  },
  {
    question: "Black Pudding...",
    startTime: 1582315200,
    questionStatus: "past",
    img: "question photo",
    answerArray: [
      { answer: "On my plate", img: "answer photo", votes: 509 },
      { answer: "In the bin", img: "answer photo", votes: 1134 }
    ]
  },
  {
    question: "I like my eggs...",
    startTime: 1582228800,
    questionStatus: "past",
    img: "question photo",
    answerArray: [
      { answer: "Fried", img: "answer photo", votes: 383 },
      { answer: "Boiled", img: "answer photo", votes: 222 },
      { answer: "Poached", img: "answer photo", votes: 198 },
      { answer: "Scrambled", img: "answer photo", votes: 345 },
      { answer: "In the bin", img: "answer photo", votes: 170 },
      { answer: "No thanks, I'm vegan", img: "answer photo", votes: 12 }
    ]
  }
];

const Answers = [
  {
    questionId: 1,
    userUid: "9wYP0SqImSYOlwnWWOXkFPzpFvu1",
    answerIndex: 0,
    townName: "Oldham",
    countyName: "Greater Manchester"
  },
  {
    questionId: 1,
    userUid: "9wYP0SqImSYOlwnWWOXkFPzpFvu1",
    answerIndex: 0,
    townName: "Middleton",
    countyName: "Greater Manchester"
  },
  {
    questionId: 1,
    userUid: "9wYP0SqImSYOlwnWWOXkFPzpFvu1",
    answerIndex: 0,
    townName: "Rochdale",
    countyName: "Greater Manchester"
  },
  {
    questionId: 1,
    userUid: "9wYP0SqImSYOlwnWWOXkFPzpFvu1",
    answerIndex: 0,
    townName: "Bolton",
    countyName: "Greater Manchester"
  },
  {
    questionId: 1,
    userUid: "9wYP0SqImSYOlwnWWOXkFPzpFvu1",
    answerIndex: 0,
    townName: "Manchester",
    countyName: "Greater Manchester"
  },
  {
    questionId: 1,
    userUid: "9wYP0SqImSYOlwnWWOXkFPzpFvu1",
    answerIndex: 0,
    townName: "Salford",
    countyName: "Greater Manchester"
  },
  {
    questionId: 1,
    userUid: "9wYP0SqImSYOlwnWWOXkFPzpFvu1",
    answerIndex: 0,
    townName: "Manchester",
    countyName: "Greater Manchester"
  },
  {
    questionId: 1,
    userUid: "9wYP0SqImSYOlwnWWOXkFPzpFvu1",
    answerIndex: 0,
    townName: "Trafford",
    countyName: "Greater Manchester"
  },
  {
    questionId: 1,
    userUid: "9wYP0SqImSYOlwnWWOXkFPzpFvu1",
    answerIndex: 0,
    townName: "Stockport",
    countyName: "Greater Manchester"
  },
  {
    questionId: 1,
    userUid: "9wYP0SqImSYOlwnWWOXkFPzpFvu1",
    answerIndex: 0,
    townName: "Oldham",
    countyName: "Greater Manchester"
  },
  {
    questionId: 1,
    userUid: "9wYP0SqImSYOlwnWWOXkFPzpFvu1",
    answerIndex: 0,
    townName: "Eccles",
    countyName: "Greater Manchester"
  },
  {
    questionId: 1,
    userUid: "9wYP0SqImSYOlwnWWOXkFPzpFvu1",
    answerIndex: 0,
    townName: "Eccles",
    countyName: "Greater Manchester"
  },
  {
    questionId: 1,
    userUid: "9wYP0SqImSYOlwnWWOXkFPzpFvu1",
    answerIndex: 0,
    townName: "Bolton",
    countyName: "Greater Manchester"
  },
  {
    questionId: 1,
    userUid: "9wYP0SqImSYOlwnWWOXkFPzpFvu1",
    answerIndex: 0,
    townName: "Rochdale",
    countyName: "Greater Manchester"
  },
  {
    questionId: 1,
    userUid: "9wYP0SqImSYOlwnWWOXkFPzpFvu1",
    answerIndex: 0,
    townName: "Bury",
    countyName: "Greater Manchester"
  },
  {
    questionId: 1,
    userUid: "9wYP0SqImSYOlwnWWOXkFPzpFvu1",
    answerIndex: 1,
    townName: "Bury",
    countyName: "Greater Manchester"
  },
  {
    questionId: 1,
    userUid: "9wYP0SqImSYOlwnWWOXkFPzpFvu1",
    answerIndex: 1,
    townName: "Bolton",
    countyName: "Greater Manchester"
  },
  {
    questionId: 1,
    userUid: "9wYP0SqImSYOlwnWWOXkFPzpFvu1",
    answerIndex: 1,
    townName: "Ashton-under-Lyne",
    countyName: "Greater Manchester"
  },
  {
    questionId: 1,
    userUid: "9wYP0SqImSYOlwnWWOXkFPzpFvu1",
    answerIndex: 1,
    townName: "Prestwich",
    countyName: "Greater Manchester"
  },
  {
    questionId: 1,
    userUid: "9wYP0SqImSYOlwnWWOXkFPzpFvu1",
    answerIndex: 1,
    townName: "Stretford",
    countyName: "Greater Manchester"
  },
  {
    questionId: 1,
    userUid: "9wYP0SqImSYOlwnWWOXkFPzpFvu1",
    answerIndex: 1,
    townName: "Wigan",
    countyName: "Greater Manchester"
  },
  {
    questionId: 1,
    userUid: "9wYP0SqImSYOlwnWWOXkFPzpFvu1",
    answerIndex: 1,
    townName: "Wigan",
    countyName: "Greater Manchester"
  },
  {
    questionId: 1,
    userUid: "9wYP0SqImSYOlwnWWOXkFPzpFvu1",
    answerIndex: 1,
    townName: "Oldham",
    countyName: "Greater Manchester"
  },
  {
    questionId: 1,
    userUid: "9wYP0SqImSYOlwnWWOXkFPzpFvu1",
    answerIndex: 1,
    townName: "Sale",
    countyName: "Greater Manchester"
  },
  {
    questionId: 1,
    userUid: "9wYP0SqImSYOlwnWWOXkFPzpFvu1",
    answerIndex: 1,
    townName: "Manchester",
    countyName: "Greater Manchester"
  },
  {
    questionId: 1,
    userUid: "9wYP0SqImSYOlwnWWOXkFPzpFvu1",
    answerIndex: 0,
    townName: "Rochdale",
    countyName: "Greater Manchester"
  },
  {
    questionId: 1,
    userUid: "9wYP0SqImSYOlwnWWOXkFPzpFvu1",
    answerIndex: 0,
    townName: "Rochdale",
    countyName: "Greater Manchester"
  },
  {
    questionId: 1,
    userUid: "9wYP0SqImSYOlwnWWOXkFPzpFvu1",
    answerIndex: 1,
    townName: "Rochdale",
    countyName: "Greater Manchester"
  },
  {
    questionId: 1,
    userUid: "9wYP0SqImSYOlwnWWOXkFPzpFvu1",
    answerIndex: 1,
    townName: "Oldham",
    countyName: "Greater Manchester"
  },
  {
    questionId: 1,
    userUid: "9wYP0SqImSYOlwnWWOXkFPzpFvu1",
    answerIndex: 1,
    townName: "Oldham",
    countyName: "Greater Manchester"
  },
  {
    questionId: 1,
    userUid: "9wYP0SqImSYOlwnWWOXkFPzpFvu1",
    answerIndex: 0,
    townName: "Middleton",
    countyName: "Greater Manchester"
  },
  {
    questionId: 1,
    userUid: "9wYP0SqImSYOlwnWWOXkFPzpFvu1",
    answerIndex: 1,
    townName: "Middleton",
    countyName: "Greater Manchester"
  }
];
