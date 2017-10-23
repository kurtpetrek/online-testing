import React, { Component } from 'react';

import LandingView from './components/LandingView';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "LandingView"
    };
  }

  onTestStart = () => {
    this.setState((prevState) => {
      prevState.view = "TestView";
      return prevState;
    })
  };

  render() {
    if (this.state.view === "LandingView") {
      return (
        <LandingView handleTestStart={this.onTestStart}></LandingView>
      );
    } else if (this.state.view === "TestView") {
      return null;
    }
  }
}

export default App;
