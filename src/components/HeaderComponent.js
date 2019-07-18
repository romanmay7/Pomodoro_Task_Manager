import React, { Component } from 'react';
import { Navbar, NavbarBrand,Nav,NavbarToggler, Collapse, NavItem, Jumbotron,
Button,Modal,ModalHeader,ModalBody,
Form,FormGroup,Input,Label } from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal=this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.getMinutes=this.getMinutes.bind(this);
        this.getSeconds=this.getSeconds.bind(this);
        this.getMinutesSeconds=this.getMinutesSeconds.bind(this);

    }
    

    getSeconds(){return ('0'+this.props.timer_value%60).slice(-2);}
  
    getMinutes(){
      let x =Math.floor(this.props.timer_value/60);
      let s=x.toString();
      if(s.length < 2){s="0"+s }
      return s;}

    getMinutesSeconds(){
      return <span>{this.getMinutes()}:{this.getSeconds()}</span>
    }


      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      } 

      toggleModal()
      {
        this.setState({
          isModalOpen: !this.state.isModalOpen
          });
      }
      handleLogin(event) {
        this.toggleModal();
        //Retrieving values directtly from the DOM and poosting them in alert message
        alert("Username: " + this.username.value + " Password: " + this.password.value + " Remember: " + this.remember.checked);
        event.preventDefault();
        }

render() {
  return(
   <React.Fragment>
 
    <Jumbotron>
     <div className="container">
       <div className="row row-header">
        <div className="col-12 col-sm-6">
        <div className="row"><NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span>  Home</NavLink>
        
        <NavLink className="nav-link" to='/about'><span className="fa fa-info fa-lg"></span>  About Pomodoro</NavLink>
        </div>
        <h1>Pomodoro Task Manager</h1>
        <p>Increase your daily productivity with this simple Widget</p>
        <div className="main_timer_label" >Currently Executing:</div>
      
        <div className="main_timer">{this.props.tasks[0]&&this.props.running&&(!this.props.break) ?this.props.tasks[this.props.task_index ]  : this.props.defaultLabel}:
        {this.props.running ? this.getMinutesSeconds() : '00:00'}</div>
        </div>
       </div>

     </div>
    </Jumbotron>
 
   </React.Fragment>
);
}
}
export default Header;