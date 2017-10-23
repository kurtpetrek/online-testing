import React, { Component } from "react";
import styled from "styled-components";

class FinishView extends Component {
  constructor(props) {
    super(props);
    this.score = props.score;
  }

  render() {
    return (
      <div>
        <h1>Finished!</h1>
        {this.score}
      </div>
    );
  }
}

export default FinishView;
