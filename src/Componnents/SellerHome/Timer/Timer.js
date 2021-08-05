import React, { Component } from 'react'
import Clock from "./Clock";

export class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { deadline: "January, 10, 2030" };
  }
  render() {
    return (
      <div className="App">
        <Clock deadline={this.state.deadline} />
      </div>
    );
  }
}
export default Timer
