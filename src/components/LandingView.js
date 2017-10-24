import React, { Component } from "react";
import styled from "styled-components";

import Button from "./Button";

const LandingContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  main {
    width: 100%;
    padding: 1rem;
    max-width: 700px;
  }

  h1 {
    text-align: center;
  }

  p {
    font-size: 18px;
  }

  .button-container {
    text-align: center;
    padding: 1rem;
  }
`;

class LandingView extends Component {
  constructor(props) {
    super(props);
    this.handleTestStart = props.handleTestStart;
  }

  render() {
    return (
      <LandingContainer>
        <main>
          <h1>
            Project Code <br />
            Knowledge Assessment
          </h1>
          <p>
            This test is aimed to measure the knowledge gained through the
            Project Code Program and does not effect your standing in the
            program.
          </p>
          <div className="button-container">
            <Button onClick={this.handleTestStart}>Start Test</Button>
          </div>
        </main>
      </LandingContainer>
    );
  }
}

export default LandingView;
