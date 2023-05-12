import React, { Component } from 'react';
class Timer extends Component {
state = {
      minutes: 0,
      seconds: 0,
      mlsecond: 0,
      isRunning: false,
};

intervalId = null;

handleStart = () => {
      this.setState({ isRunning: true });
      this.intervalId = setInterval(() => {
         const { minutes, seconds, mlsecond } = this.state;
         if (mlsecond === 99) {
         this.setState({ seconds: seconds + 1, mlsecond: 0 });
         } else if(seconds === 59) {
         this.setState({ minutes: minutes + 1, seconds: 0 });
         } else if(minutes === 100) {
         this.setState({minutes: 0 });
         }
         else {
         this.setState({ mlsecond: mlsecond + 1})
         }
      }, 10);
      };
      

handlePause = () => {
      this.setState({ isRunning: false });
      clearInterval(this.intervalId);
   };
handleReset = () => {
      this.setState({ minutes: 0, seconds: 0, mlsecond: 0 , isRunning: false });
      clearInterval(this.intervalId);
   };

render() {
const { minutes, seconds,mlsecond, isRunning } = this.state;
const paddedMinutes = String(minutes).padStart(2, '0');
const paddedSeconds = String(seconds).padStart(2, '0');
const paddedMlsecond = String(mlsecond).padStart(2, '0');
   return (
         <div className='timer'>
            <div className='timer-box'>Time: {paddedMinutes}:{paddedSeconds}:{paddedMlsecond}</div>
         <div className='button-box'>
            
         {!isRunning && <button onClick={this.handleStart}>Start</button>}
         {isRunning && <button onClick={this.handlePause}>Pause</button>}
         {/* {(!isRunning && seconds > 0) && <button onClick={this.handleResume}>Resume</button>} */}
         
         <button onClick={this.handleReset}>Reset</button></div>
         </div>
   );
}
};
export default Timer;