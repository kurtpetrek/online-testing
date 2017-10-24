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
    const testQuestions = questions.map((val, i) => {
      if (val.type === "SINGLE ANSWER") {
        return (
          <SingleAnswer
            questionsData={val}
            indexKey={i}
            onAnswer={this.handleAnswer}
            key={val.question}
          />
        );
      } else if (val.type === "MULTIPLE ANSWERS") {
        return (
          <MultipleAnswers
            questionsData={val}
            indexKey={i}
            onAnswer={this.handleAnswer}
            key={val.question}
          />
        );
      }
    });
    return (
      <div>
        {testQuestions}
        <Button onClick={this.gradeTest}>Submit</Button>
      </div>
    );
  }
}

export default TestView;
