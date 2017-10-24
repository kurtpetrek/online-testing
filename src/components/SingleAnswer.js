import React, { Component } from "react";

import StyledCheckBox from "./StyledCheckBox";

class SingleAnswer extends Component {
  constructor(props) {
    super(props);
    var data = props.questionsData;
    this.state = {
      answer: ""
    };
    this.question = data.question;
    this.options = data.options;
    this.options.sort(function() {
      return 0.5 - Math.random();
    });
    this.index = parseInt(props.indexKey, 10);
    this.onAnswer = props.onAnswer;
  }

  onOptionClick = e => {
    const answer = e.target.value;
    this.setState(
      prevState => {
        prevState.answer = answer;
        return prevState;
      },
      () => {
        this.onAnswer(this.state.answer, this.index);
      }
    );
  };

  render() {
    const options = this.options.map((val, i, a) => {
      let checked = false;
      if (this.state.answer === val) {
        checked = true;
      }
      return (
        <StyledCheckBox
          handleInput={this.onOptionClick}
          checked={checked}
          key={val}
          value={val}
        >
          {val}
        </StyledCheckBox>
      );
    });

    return (
      <div>
        <h3>{this.question}</h3>
        {options}
      </div>
    );
  }
}

export default SingleAnswer;
