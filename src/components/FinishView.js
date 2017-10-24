import React, { Component } from "react";
import styled from "styled-components";

const FinishViewContainer = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`;

class FinishView extends Component {
  constructor(props) {
    super(props);
    this.score = props.score;
    this.maxScore = props.maxScore;
  }

  render() {
    return (
      <FinishViewContainer>
        <div>
          <h1>Finished!</h1>
          <h3>
            Score: {this.score} / {this.maxScore}
          </h3>
        </div>
      </FinishViewContainer>
    );
  }
}

export default FinishView;
