import React, { Component } from "react";
import styled from "styled-components";

import questions from "./../data/questions";

import Button from "./Button";
import SingleChoice from "./SingleChoice";

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
        <SingleChoice
          questionsData={questions[0]}
          indexKey="0"
          onAnswer={this.handleAnswer}
        />
      </div>
    );
  }
}

export default TestView;
