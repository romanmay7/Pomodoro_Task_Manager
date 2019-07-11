import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
//import About from './AboutComponent'
import {Switch,Route,Redirect,withRouter} from 'react-router-dom';
//import {connect} from 'react-redux';
//import { postComment,postFeedback,fetchDishes, fetchComments,fetchPromos, addPromos,fetchLeaders } from '../redux/ActionCreators';
//import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


//Map Redux State to props to be available for Main Component
const mapStateToProps=state=>{
   return {
       curr_task:state.current_task,
       task_list:state.task_list,

   }
} 

class Main extends Component {

  constructor(props) {
    super(props);
  

  this.state = {
    running: 0,
    current_task:"None",
    timer_value:1500,
    session_length:25
  };


     //Bound  our functions
     this.incrementTimer=this.incrementTimer.bind(this);
     this.stopTimer=this.stopTimer.bind(this);
     this.decrementTimer=this.decrementTimer.bind(this);
     this.setTimer=this.setTimer.bind(this);
     this.resetTimer=this.resetTimer.bind(this);
     this.startTimer=this.startTimer.bind(this);
     this.pauseTimer=this.pauseTimer.bind(this);
     
   
}

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


startTimer(){

  if(this.state.running==0){this.setState({running:1})}
   this.setState({timer_value: this.state.timer_value - 1});

     
}

setTimer(value){
  this.setState({timer_value:value})
}


resetTimer(){
  this.setState({timer_value:1500});
  this.setState({session_length:25});
  this.setState({running:0})
}

pauseTimer(){
  this.setState({running:0})


}


stopTimer(){

  clearInterval(this.incrementer2);
  this.setState({lastClearedIncrementer: this.incrementer});

    this.setState({isExecuting:false});
    this.setState({timer_value:0});

}





componentDidMount(){
 // this.props.fetchDishes();
 // this.props.fetchPromos();
 // this.props.fetchComments();
  //this.props.fetchLeaders();
  
}

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
}
 


  render() {
  
    return (
      <div className="App">
        <Header current_task={this.state.current_task} timer_value={this.state.timer_value}/>
        <TransitionGroup>
        <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
         <Switch>
           <Route exact path='/home' component={() => 
            <Home timer={this.state.timer_value} session_length={this.state.session_length} startTimer={this.startTimer}
             setTimer={this.setTimer} resetTimer={this.resetTimer} decrementTimer={this.decrementTimer}
              incrementTimer={this.incrementTimer} pauseTimer={this.pauseTimer}
               stopTimer={this.stopTimer} running={this.state.running}/>} />
           <Redirect to="/home" />
         </Switch>
         </CSSTransition>
        </TransitionGroup>
        <Footer/>
      </div>
    );
  }
}

//export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
export default withRouter(Main);
