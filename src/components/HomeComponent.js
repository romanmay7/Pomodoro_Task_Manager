import React from 'react';
//import { Card, CardImg, CardText, CardBody,
 //   CardTitle, CardSubtitle} from 'reactstrap';
//import {Loading} from './LoadingComponent';
//import { baseUrl } from '../shared/baseUrl';
//import { FadeTransform } from 'react-animation-components';

import Pomodoro from './PomodoroComponent'
import TaskListApp from './tasklist/TaskListApp'


function Home(props) {
    return(
        <div className="center container">
          <div className="row main">
            <div className="col-md-5"><Pomodoro timer={props.timer} session_length={props.session_length} break_length={props.break_length}
             startTimer={props.startTimer} incrementTimer={props.incrementTimer} decrementTimer={props.decrementTimer} 
             decrementBreakSession={props.decrementBreakSession}
             resetTimer={props.resetTimer} pauseTimer={props.pauseTimer} incrementBreakSession={props.incrementBreakSession}
             stopTimer={props.stopTimer} running={props.running} label={props.label} timer_color={props.timer_color}/></div>
            <div className="col-md-7"><TaskListApp handleDeleteTasks={props.handleDeleteTasks}
               handleClearSelectedTask={props.handleClearSelectedTask} handleDeleteTask={props.handleDeleteTask}
               handleAddTask={props.handleAddTask} tasks={props.tasks} /></div>
          </div>
        </div>
    );
}

export default Home;
