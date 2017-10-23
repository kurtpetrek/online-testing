const questions = [
  {
    type: "SINGLE ANSWER",
    question: "Which of the following is valid HTML?",
    options: [
      "<h1 Hello Wold h1>",
      "<h1> Hello Wold <h1>",
      "<h1> Hello Wold /h1>",
      "<h1> Hello Wold </h1>"
    ],
    answer: "<h1> Hello Wold </h1>"
  },
  {
    type: "MULTIPLE ANSWERS",
    question: "What are the direct children of the HTML Element?",
    options: ["<head>", "<body>", "<title>", "<div>"],
    answer: ["<body>", "<head>"]
  }
];

export default questions;
