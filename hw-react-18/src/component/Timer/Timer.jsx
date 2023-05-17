import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 0,
      seconds: 0,
      isRunning: false,
      showInput: true,
      inputMinutes: '',
      inputSeconds: '',
      pauseTime: null, 
    };
  }

  handleMinutesChange = (event) => {
    const value = event.target.value;
    if (value >= 0 && value <= 99) {
      this.setState({ inputMinutes: value });
    }
  };

  handleSecondsChange = (event) => {
    const value = event.target.value;
    if (value >= 0 && value <= 59) {
      this.setState({ inputSeconds: value });
    }
  };

  handlePause = () => {
    const { minutes, seconds } = this.state;
    const currentTime = minutes * 60 + seconds;
    this.setState({ isRunning: false, pauseTime: currentTime });
    clearInterval(this.intervalId);
  };

  handleStart = () => {
    let { inputMinutes, inputSeconds, pauseTime } = this.state;

    if (inputMinutes === '' && inputSeconds === '') {
      inputMinutes = '99';
      inputSeconds = '59';
    }

    const minutes = parseInt(inputMinutes);
    const seconds = parseInt(inputSeconds);
    let startFrom = minutes * 60 + seconds;

    if (pauseTime !== null) {
      startFrom = pauseTime; 
    }

    this.setState({
      minutes: Math.floor(startFrom / 60),
      seconds: startFrom % 60,
      isRunning: true,
      showInput: false,
      pauseTime: null,
    });

    this.intervalId = setInterval(() => {
      const { minutes, seconds } = this.state;
      if (seconds === 0 && minutes === 0) {
        this.handleReset();
      } else if (seconds === 0) {
        this.setState({ minutes: minutes - 1, seconds: 59 });
      } else {
        this.setState({ seconds: seconds - 1 });
      }
    }, 1000);
  };

handleReset = () => {
  this.setState({
    minutes: 0,
    seconds: 0,
    isRunning: false,
    showInput: true,
    inputMinutes: '',
    inputSeconds: '',
    pauseTime: null,
  });
  clearInterval(this.intervalId);
};

  render() {
    const { minutes, seconds, isRunning, pauseTime } = this.state;
    const paddedMinutes = String(minutes).padStart(2, '0');
    const paddedSeconds = String(seconds).padStart(2, '0');

    return (
      <div className="timer">
        <div className="timer-box">
          Time: {paddedMinutes}:{paddedSeconds}
        </div>
        <div className={isRunning || pauseTime !== null ? 'hidden' : 'input-box'}>
          <label>
            Minutes:
            <input type="number" min="0" max="99" pattern="^[0-9]?[0-9]$" placeholder="Enter minutes" onChange={this.handleMinutesChange} />
          </label>
          <label>
            Seconds:
            <input type="number" min="0" max="59" pattern="^[0-5]?[0-9]$" placeholder="Enter seconds" onChange={this.handleSecondsChange} />
          </label>
        </div>
        <div>
          {!isRunning && <button onClick={this.handleStart}>Start</button>}
          {isRunning && <button onClick={this.handlePause}>Pause</button>}
          <button onClick={this.handleReset}>Reset</button>
        </div>
      </div>
    );
  }
}

export default Timer;