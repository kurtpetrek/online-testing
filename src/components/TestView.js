import React, { Component } from 'react';
import styled from 'styled-components';

import questions from './../data/questions';

import Button from './Button';


class TestView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>HEllo</h1>
        <p>{questions[0].question}</p>
      </div>
    );
  }
}

export default TestView;
