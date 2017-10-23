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
  }

  handleAnswer = (value, index) => {
    this.setState(prevState => {
      prevState.answers[index] = value;
      return prevState;
    });
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
      </div>
    );
  }
}

export default TestView;
