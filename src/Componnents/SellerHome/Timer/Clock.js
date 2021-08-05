import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 5,
      seconds: 0,
      start: Date.now()
    };
  }
  componentDidMount() {
    setInterval(() => this.getTimeUntil(5 * 60), 1000);
  }

  getTimeUntil = time => {
    const diff = time - (((Date.now() - this.state.start) / 1000) | 0);
    console.log(diff);
    if (diff < 0) {
      this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    } else {
      const seconds = diff % 60 | 0;
      const minutes = (diff / 60) | 0;
      console.log(minutes);
      console.log(seconds);
      this.setState({ minutes, seconds });
    }
  };
  render() {
    return (
      <div>
        <div className="Clock-minutes" />0{this.state.minutes} :{" "}
        {this.state.seconds}
        <div className="Clock-seconds" />
      </div>
    );
  }
}
export default Clock;
