import React, { Component } from "react";
import styled from "styled-components";

import questions from "./../data/questions";

import Button from "./Button";
import SingleAnswer from "./SingleAnswer";
import MultipleAnswers from "./MultipleAnswers";

class TestView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: []
    };
    this.handleTestFinish = props.handleTestFinish;
  }

  handleAnswer = (value, index) => {
    this.setState(prevState => {
      prevState.answers[index] = value;
      return prevState;
    });
  };

  gradeTest = () => {
    if (
      this.state.answers.length === questions.length &&
      !this.state.answers.includes(undefined)
    ) {
      let score = 0;
      questions.forEach((val, i, a) => {
        const answer = val.answer;
        const tester = this.state.answers[i];
        if (typeof answer === "string" && tester == answer) {
          console.log("correct");
          score++;
        } else if (Array.isArray(answer) && Array.isArray(tester)) {
          answer.sort();
          tester.sort();
          if (answer.join("") === tester.join("")) {
            score++;
            console.log("matched!");
          }
        }
      });
      this.handleTestFinish(score);
    }
  };

  render() {
    return (
      <div>
        <h1>Hello</h1>
        <SingleAnswer
          questionsData={questions[0]}
          indexKey="0"
          onAnswer={this.handleAnswer}
        />
        <MultipleAnswers
          questionsData={questions[1]}
          indexKey="1"
          onAnswer={this.handleAnswer}
        />
        <Button onClick={this.gradeTest}>Submit</Button>
      </div>
    );
  }
}

export default TestView;
