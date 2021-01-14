import React from "react";
import CountdownTimer from "react-component-countdown-timer";

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
    };
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }
  startTimer() {
    this.timer = setInterval(
      () =>
        this.setState({
          time: this.state.time + 1,
        }),
      1000
    );

    console.log("Start");
  }
  stopTimer() {
    clearInterval(this.timer);
    console.log("stop");
  }
  resetTimer() {
    this.setState({
      time: 0,
    });
    console.log("Reset");
  }
  render() {
    return (
      <div>
        <h5>Timer</h5>
        <p>{this.state.time}</p>

        <button
          onClick={this.startTimer}
          type="button"
          className="btn btn-outline-dark waves-effect"
        >
          Start Timer
        </button>
        <button
          onClick={this.stopTimer}
          type="button"
          className="btn btn-outline-dark waves-effect"
        >
          Stop
        </button>
        <button
          onClick={this.resetTimer}
          type="button"
          className="btn btn-outline-dark waves-effect"
        >
          Reset
        </button>
      </div>
    );
  }
}
