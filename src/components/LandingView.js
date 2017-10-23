import React, { Component } from 'react';
import styled from 'styled-components';

import Button from './Button';

const LandingContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class LandingView extends Component {
  constructor(props) {
    super(props);
    this.handleTestStart = props.handleTestStart;
  }

  render() {
    return (
      <LandingContainer>
        <Button onClick={this.handleTestStart}>Start Test</Button>
      </LandingContainer>
    );
  }
}

export default LandingView;
