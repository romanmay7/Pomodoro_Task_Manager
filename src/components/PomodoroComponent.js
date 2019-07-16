import React, { Component } from 'react';

class Pomodoro extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        
      };
     
     //Bound  our functions
       this.increment=this.increment.bind(this);
       this.decrement=this.decrement.bind(this);
       this.increment2=this.increment2.bind(this);
       this.decrement2=this.decrement2.bind(this);
       this.handlePlayClick=this.handlePlayClick.bind(this);
       this.handlePauseClick=this.handlePauseClick.bind(this);
       this.handleResetClick=this.handleResetClick.bind(this);
       this.sleep=this.sleep.bind(this);
      // 
    } 
    // methods
        sleep(milliseconds) {
        var start = new Date().getTime();
         for (var i = 0; i < 1e7; i++) {
         if ((new Date().getTime() - start) > milliseconds){
         break;
                                 }  } }
  
       getSeconds(){return ('0'+this.props.timer%60).slice(-2);}
  
       getMinutes(){
         let x =Math.floor(this.props.timer/60);
         let s=x.toString();
         if(s.length < 2){s="0"+s }
         return s;}
    
    //no need for binding with usage of ES6 arrow function,more clear syntax as result
    //----------------------------------------------------------------------------------
       //increment = () => (this.setState((prevState) => ({ count:prevState.count+1 })))
    //-------------------------------------------------------------------------------- --
       increment(){
        if((this.props.break_length<60)&&(this.props.running==0)){
         this.props.incrementBreakSession();
            }
          }
    
       decrement(){
         if((this.props.break_length>1)&&(this.props.running==0)){
         this.props.decrementBreakSession();
         }
       }
       increment2(){
         if((this.props.session_length<60)&&(this.props.running==0)){
        this.props.incrementTimer();
        
               }
                  }
       decrement2(){
        if((this.props.session_length>1)&&(this.props.running==0)){
        this.props.decrementTimer();
        }
      }
  
      handlePlayClick() {
           // document.getElementById("time-left").style.color = '#3f68aa';
         if(this.props.running==0){
           //  this.setState({running:1})
           // document.getElementById("timer-label").innerHTML ="Session";
             this.props.startTimer();  }
         else this.handlePauseClick()
    
  }
      initiateBreak(){
        document.getElementById("timer-label").innerHTML ="Break";
         document.getElementById("time-left").style.color = '#ead920';
        this.state.incrementer = setInterval( () =>{
        this.setState({session2: this.state.session2 - 1})
        if(this.state.session2<0)
        {this.handlePauseClick()
         this.setState({session2: this.state.count2*60})
         document.getElementById("beep").play();
         this.sleep(1000);
         this.handlePlayClick() }}
      , 1000);
      }
    
    handlePauseClick() {
     this.props.pauseTimer();
    }
    
    handleResetClick()
    {   //this.handlePauseClick()
        document.getElementById("timer-label").innerHTML ="Session";
       var myAudio = document.getElementById("beep"); 
       myAudio.pause();
        myAudio.currentTime = 0;

        this.props.resetTimer();
        //this.setState({running:0})
        //this.props.stopTimer()
    }
      
    // Rendering Pomodoro Widget Component
    render() {
      return (
        
      <div  className="Pomodoro container">
      <div className="col">
        <div id="title">Pomodoro Clock:</div>
         <hr size="50"></hr>
          <div className="row">

          <div id="incrementpanel1" className="col">
            <div id="break-label">Break Length:</div>
            <div className="row counter">
             <button class="btn fa fa-angle-double-up" id="break-increment" onClick={this.increment}></button>
             <div id="break-length">{this.props.break_length}</div>
             <button class="btn fa fa-angle-double-down" id="break-decrement" onClick={this.decrement}></button>    
            </div>
         </div>
               
          <div id="incrementpanel2"  className="col">
             <div id="session-label">Session Length:</div> 
             <div className="row">
              <button class="btn fa fa-angle-double-up" id="session-increment" onClick={this.increment2}></button>
              <div id="session-length">{this.props.session_length}</div>
              <button class="btn fa fa-angle-double-down"id="session-decrement" onClick={this.decrement2}></button>
            </div>
          </div>

         </div>
               
         <div id="timerpanel" className="column"> 
          <br></br>
          <div id="timer-label">{this.props.label}</div>
          <div id="time-left" style={{color:this.props.timer_color}}>{this.getMinutes()}:{this.getSeconds()}</div></div>
  
          <div id="buttonpanel" className="row">
              <button id="start_stop" onClick={this.handlePlayClick}>Play</button>
              <button className="ps" onClick={this.handlePauseClick}>Pause</button>
              <button id="reset"    onClick={this.handleResetClick}>Reset</button>
          </div>
          <br></br>
          <br></br>
        <div id="panel4" className="author"> Designed and Coded by <br />
          <a target="_blank" href=""> Roman Mayerson 2019</a>
        </div>     
          
          
        </div>
        </div>
      );
    }
  };
  export default Pomodoro;