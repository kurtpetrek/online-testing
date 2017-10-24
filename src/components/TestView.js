import React, { Component } from "react";
import styled from "styled-components";

import questions from "./../data/questions";

import Button from "./Button";
import SingleAnswer from "./SingleAnswer";
import MultipleAnswers from "./MultipleAnswers";
import ShortAnswer from "./ShortAnswer";

const TestContainer = styled.div`
  width: 95%;
  max-width: 700px;
  padding: 1rem;
  margin: auto;

  & > div {
    border-bottom: 2px solid #666;
    margin: 1rem 0;
    padding: 1rem 0;
  }

  .button-container {
    text-align: right;
    border-bottom: none;

    h3 {
      color: #e8453c;
    }
  }
`;

class TestView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      warningMessage: ""
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
        if (typeof answer === "string" && tester === answer) {
          score++;
        } else if (Array.isArray(answer) && Array.isArray(tester)) {
          answer.sort();
          tester.sort();
          if (answer.join("") === tester.join("")) {
            score++;
          }
        }
      });
      this.handleTestFinish(score);
    } else {
      this.setState(
        prevState => {
          prevState.warningMessage = "Please answer all questions.";
          return prevState;
        },
        () => {
          setTimeout(() => {
            this.setState(prevState => {
              prevState.warningMessage = "";
              return prevState;
            });
          }, 2000);
        }
      );
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
      } else if (val.type === "SHORT ANSWER") {
        return (
          <ShortAnswer
            questionData={val}
            indexKey={i}
            onAnswer={this.handleAnswer}
            key={val.question}
          />
        );
      } else {
        return null;
      }
    });

    const warningMessage = this.state.warningMessage;

    return (
      <TestContainer>
        {testQuestions}
        <div className="button-container">
          <h3>{warningMessage}</h3>
          <p>Be sure to check your answers before submitting.</p>
          <Button onClick={this.gradeTest}>Submit</Button>
        </div>
      </TestContainer>
    );
  }
}

export default TestView;
