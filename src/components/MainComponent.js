import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import About from './AboutComponent'
import {Switch,Route,Redirect,withRouter} from 'react-router-dom';
//import {connect} from 'react-redux';
//import { postComment,postFeedback,fetchDishes, fetchComments,fetchPromos, addPromos,fetchLeaders } from '../redux/ActionCreators';
//import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


//Map Redux State to props to be available for Main Component
/*const mapStateToProps=state=>{
   return {
       curr_task:state.current_task,
       task_list:state.task_list,

   }
} */

class Main extends Component {

  constructor(props) {
    super(props);
  

  this.state = {
    running:false,
    pause:false,
    defaultLabel:'None',
    break:false,
    task_index:0,
    label:"Session:",
    timer_color:"3f68aa",
    timer_value:1500,
    session_length:25,
    break_length:5,
    player:null,
    tasks:[]
  };


     //Bound  our functions
     this.incrementTimer=this.incrementTimer.bind(this);
     this.incrementBreakSession=this.incrementBreakSession.bind(this);
     this.stopTimer=this.stopTimer.bind(this);
     this.decrementTimer=this.decrementTimer.bind(this);
     this.decrementBreakSession=this.decrementBreakSession.bind(this);
     this.setTimer=this.setTimer.bind(this);
     this.resetTimer=this.resetTimer.bind(this);
     this.startTimer=this.startTimer.bind(this);
     this.startBreak=this.startBreak.bind(this);
     this.pauseTimer=this.pauseTimer.bind(this);
     this.sleep=this.sleep.bind(this);
     
     
   
}
sleep(milliseconds) {
  var start = new Date().getTime();
   for (var i = 0; i < 1e7; i++) {
   if ((new Date().getTime() - start) > milliseconds){
   break;
                           }  } }

incrementTimer(){

  this.setState({timer_value: this.state.timer_value + 60});
  this.setState({session_length:this.state.session_length+1});
  // if(this.state.isExecuting==false){
     
}

decrementTimer(){
   this.setState({timer_value: this.state.timer_value - 60});
   this.setState({session_length:this.state.session_length-1});
  // if(this.state.isExecuting==false)
     
}

incrementBreakSession(){

  
  this.setState({break_length:this.state.break_length+1});
  // if(this.state.isExecuting==false){
     
}

decrementBreakSession(){
   
   this.setState({break_length:this.state.break_length-1});
  // if(this.state.isExecuting==false)
     
}


startTimer(){
  if(this.state.break==false)
  {
  //document.getElementById("time-left").style.color = '#3f68aa';
  this.setState({label: "Session:"});
  this.setState({timer_color:'#3f68aa'});
  this.setState({running:true});
 // document.getElementById("timer-label").innerHTML ="Session";
  if(this.state.running==false){this.setState({running:true})}
   if (this.state.pause==false)
    {
    this.setState({timer_value:this.state.session_length*60 });
    }
   else{this.setState({pause:false})}

   this.player = setInterval( () =>{
    this.setState({timer_value: this.state.timer_value - 1});
    if(this.state.timer_value<0){
      this.stopTimer();
      this.setState({running:false});
      
      document.getElementById("beep").play();
      this.sleep(1000);
      this.startBreak();
    } 
  }, 1000);

 this.setState({player: this.player}, function () {
    console.log(this.state.player);
});
  }
  else this.startBreak();
}

startBreak(){
  
 // document.getElementById("timer-label").innerHTML ="Break";
 this.setState({label: "Break:"});
 this.setState({timer_color:'#ead920'});
 this.setState({break:true});
 this.setState({running:true});
 this.setState({defaultLabel:'Break'})
 
  //document.getElementById("time-left").style.color = '#ead920';
  if (this.state.pause==false){
    this.setState({timer_value: this.state.break_length*60})
  }
  else{this.setState({pause:false})}

  this.player = setInterval( () =>{
  this.setState({timer_value: this.state.timer_value - 1})
  if(this.state.timer_value<0)
  {this.stopTimer();
    this.setState({break:false});
   document.getElementById("beep").play();
   this.sleep(1000);
   this.nextTask();//increment pointer to next task
   console.log(this.state.task_index);
   this.startTimer(); }}
, 1000);

  this.setState({player: this.player}, function () {
  console.log(this.state.player);
});
}

setTimer(value){
  this.setState({timer_value:value})
}


resetTimer(){
  this.stopTimer();
  this.setState({timer_value:1500});
  this.setState({session_length:25});
  this.setState({break_length:5});
  this.setState({running:false})
  this.setState({break:false})
  this.setState({defaultLabel:'None'})
}

pauseTimer(){
  
  if(this.state.running)
  {
  this.setState({running:false})
  this.setState({pause:true})
 
  //alert(this.state.player);
  clearInterval(this.state.player);
  this.setState({
    lastClearedIncrementer: this.state.player
  });
   }
   else 
    if(this.state.break)
     this.startBreak();
     else
     this.startTimer();
}

stopTimer(){

  clearInterval(this.state.player);
  this.setState({lastClearedIncrementer: this.state.player});

    //this.setState({isExecuting:false});
  //  this.setState({timer_value:0});
}

nextTask=()=>{
  var len=this.state.tasks.length;
  var task_indx=(this.state.task_index+1)%len;
  this.setState({task_index:task_indx});
};

//Functions related to TaskListApp

handleDeleteTasks = () => {
  this.setState(() => ({ tasks: [] }));
};
handleClearSelectedTask = () => {
  this.setState(() => ({ selected: undefined }));
}
handleDeleteTask = (taskToRemove) => {
  this.setState((prevState) => ({
    tasks: prevState.tasks.filter((task) => taskToRemove !== task)
  }));
};

handleAddTask = (task) => {
  if (!task) {
    return 'Enter valid value to add item';
  } else if (this.state.tasks.indexOf(task) > -1) {
    return 'This task already exists';
  }

  this.setState((prevState) => ({
    tasks: prevState.tasks.concat(task)
  }));
};




componentDidMount(){

  
}

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
}
 


  render() {
  
    return (
      <div className="App">
        <Header running={this.state.running} timer_value={this.state.timer_value} tasks={this.state.tasks}
        defaultLabel={this.state.defaultLabel} break={this.state.break} task_index={this.state.task_index}/>
        <TransitionGroup>
        <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
         <Switch>
           <Route exact path='/home' component={() => 
            <Home timer={this.state.timer_value} session_length={this.state.session_length} break_length={this.state.break_length} startTimer={this.startTimer}
             setTimer={this.setTimer} resetTimer={this.resetTimer} decrementTimer={this.decrementTimer} decrementBreakSession={this.decrementBreakSession}
              incrementTimer={this.incrementTimer} incrementBreakSession={this.incrementBreakSession} pauseTimer={this.pauseTimer}
               stopTimer={this.stopTimer} running={this.state.running} handleDeleteTasks={this.handleDeleteTasks}
               handleClearSelectedTask={this.handleClearSelectedTask} handleDeleteTask={this.handleDeleteTask} 
               handleAddTask={this.handleAddTask} tasks={this.state.tasks} task_index={this.state.task_index}label={this.state.label} timer_color={this.state.timer_color}/>} />
            <Route exact path='/about' component={() =><About />} />
           <Redirect to="/home" />
         </Switch>
         </CSSTransition>
        </TransitionGroup>
        <Footer/>
        <audio id="beep"  src="https://goo.gl/65cBl1" preload="auto"></audio>
      </div>
    );
  }
}

//export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
export default withRouter(Main);
