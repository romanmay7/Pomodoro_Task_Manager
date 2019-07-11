import React, { Component } from 'react';

class Pomodoro extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 5,
        //count2:25,
        //session2:1500,
        //running:0
   
        
      };
     //Bound  our functions
     //this.increment=this.increment.bind(this);
       this.decrement=this.decrement.bind(this);
       this.increment2=this.increment2.bind(this);
       this.decrement2=this.decrement2.bind(this);
       this.handlePlayClick=this.handlePlayClick.bind(this);
       this.handlePauseClick=this.handlePauseClick.bind(this);
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
       increment = () => (this.setState((prevState) => ({ count:prevState.count+1 })))
    //-------------------------------------------------------------------------------- --   
       decrement(){
         if((this.state.count>1)&&(this.props.running==0)){
         this.setState({count:this.state.count-1})
         }
       }
       increment2(){
         if((this.state.count2<60)&&(this.props.running==0)){
        //this.setState({count2:this.state.count2+1});
        this.props.incrementTimer();
        //this.setState({session2:(this.state.count2+1)*60})
        //this.props.incrementTimer({session2:(this.state.count2+1)*60});
        
               }
                  }
      decrement2(){
        if((this.props.session_length>1)&&(this.props.running==0)){
        //this.setState({count2:this.state.count2-1});
        this.props.decrementTimer();
        //this.props.incrementTimer({session2:(this.state.count2-1)*60});
        }
      }
  
       handlePlayClick() {
         document.getElementById("time-left").style.color = '#3f68aa';
         if(this.props.running==0){
       //  this.setState({running:1})
         document.getElementById("timer-label").innerHTML ="Session";


        this.state.incrementer = setInterval( () =>{
        //this.setState({session2: this.state.session2 - 1})  
        this.props.startTimer();
        if(this.props.session_length<0) 
        {
        this.handlePauseClick()
        document.getElementById("beep").play();
         this.sleep(1000);
        this.setState({session2: this.state.count*60})
        this.initiateBreak()
        }}
      , 1000);

         }else this.handlePauseClick()
    }
      initiateBreak(){
        document.getElementById("timer-label").innerHTML ="Break";
         document.getElementById("time-left").style.color = '#ead920';
        this.incrementer = setInterval( () =>{
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
      alert("goo")
      clearInterval(this.state.incrementer);
      this.setState({
        lastClearedIncrementer: this.state.incrementer
      });
      this.props.pauseTimer();
     // this.setState({running:0})
    }
    
    handleResetClick()
    {   this.handlePauseClick()
        document.getElementById("timer-label").innerHTML ="Session";
       var myAudio = document.getElementById("beep"); 
       myAudio.pause();
       myAudio.currentTime = 0;
        //this.setState({count2:25})
        //this.setState({count:5})
        //this.setState({session2:1500})
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
             <div id="break-length">{this.state.count}</div>
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
          <div id="timer-label">Session</div>
          <div id="time-left">{this.getMinutes()}:{this.getSeconds()}</div></div>
  
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
          
          <audio id="beep"  src="https://goo.gl/65cBl1" preload="auto"></audio>
        </div>
        </div>
      );
    }
  };
  export default Pomodoro;