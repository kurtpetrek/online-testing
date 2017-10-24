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
  },
  {
    type: "MULTIPLE ANSWERS",
    question: "Select all valid CSS Selectors",
    options: ["p", ".container", "#about-page", "a:hover"],
    answer: ["p", ".container", "#about-page", "a:hover"]
  },
  {
    type: "SINGLE ANSWER",
    question: "What does HTML stand for?",
    options: [
      "Hyper Templates Made Logically",
      "Hyper Text Markup Language",
      "Hyper Text Markup Logically",
      "Hidden Text Made Language"
    ],
    answer: "Hyper Text Markup Language"
  }
];

export default questions;
