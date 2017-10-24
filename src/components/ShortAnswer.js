import React, { Component } from "react";
import styled from "styled-components";

const ShortAnswerContainer = styled.div`
  input {
    width: 100%;
    font-size: 1.1rem;
    line-height: 1.5;
  }
`;

class ShortAnswer extends Component {
  constructor(props) {
    super(props);
    this.questionData = props.questionData;
    this.onAnswer = props.onAnswer;
    this.indexKey = props.indexKey;
  }

  handleInput = e => {
    let val = e.target.value;
    this.onAnswer(val, this.indexKey);
  };

  render() {
    return (
      <ShortAnswerContainer>
        <h3>{this.questionData.question}</h3>
        <input type="text" onChange={this.handleInput} />
      </ShortAnswerContainer>
    );
  }
}

export default ShortAnswer;
