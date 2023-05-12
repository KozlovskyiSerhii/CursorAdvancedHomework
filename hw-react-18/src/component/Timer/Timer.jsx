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
      };
   }

handleMinutesChange = (event) => {
   const value = event.target.value;
   if (value >= 0 && value <= 59) {
      this.setState({ inputMinutes: value});
   }
};
         
handleSecondsChange = (event) => {
   const value = event.target.value;
   if (value >= 0 && value <= 59) {
   return  this.setState({ inputSeconds: value });
   } 
};

      
handlePause = () => {
      this.setState({ isRunning: false , inPause : true});
      clearInterval(this.intervalId);
   };


   handleStart = () => {
      let { inputMinutes, inputSeconds } = this.state;
      
   if (inputMinutes === '' && inputSeconds === '') {
      inputMinutes = '59';
      inputSeconds = '59';
   }

   const minutes = parseInt(inputMinutes);
   const seconds = parseInt(inputSeconds);
   this.setState({
      minutes: minutes,
      seconds: seconds,
      isRunning: true,
      inPause: false,
      showInput: false,
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
         inPause : false,
         isRunning: false,
         showInput: true,
         inputMinutes: '59',
         inputSeconds: '59',
      });
      clearInterval(this.intervalId);
   };
   render() {
      const { minutes, seconds, isRunning ,inPause} = this.state;
   const paddedMinutes = String(minutes).padStart(2, '0');
   const paddedSeconds = String(seconds).padStart(2, '0');
      return (
   <div className='timer'>
   <div className='timer-box'>Time: {paddedMinutes}:{paddedSeconds}</div>
   <div className={isRunning || inPause ? 'hidden' : 'input-box'}>
      <label>
         Minutes:
         <input type="number" min="0" max="59" pattern="^[0-5]?[0-9]$" placeholder='число від 0 до 60' onChange={this.handleMinutesChange} />
      </label>
      <label>
         Seconds:
         <input type="number" min="0" max="59" pattern="^[0-5]?[0-9]$" placeholder='число від 0 до 60' onChange={this.handleSecondsChange} />
      </label>
   </div>
   <div className=''>
      {!isRunning && <button onClick={this.handleStart}>Start</button>}
      {isRunning && <button onClick={this.handlePause}>Pause</button>}
      <button onClick={this.handleReset}>Reset</button>
   </div>
   </div>
      );
   }
   }

   export default Timer;