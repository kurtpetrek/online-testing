import React, { Component } from "react";

import LandingView from "./components/LandingView";
import TestView from "./components/TestView";
import FinishView from "./components/FinishView";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "LandingView",
      results: {}
    };
  }

  onTestStart = () => {
    this.setState(prevState => {
      prevState.view = "TestView";
      return prevState;
    });
  };

  onTestFinish = results => {
    this.setState(prevState => {
      prevState.view = "FinishView";
      prevState.results = results;
      return prevState;
    });
  };

  render() {
    if (this.state.view === "LandingView") {
      return <LandingView handleTestStart={this.onTestStart} />;
    } else if (this.state.view === "TestView") {
      return <TestView handleTestFinish={this.onTestFinish} />;
    } else if (this.state.view === "FinishView") {
      return <FinishView score={this.state.results} maxScore={5} />;
    }
  }
}

export default App;
