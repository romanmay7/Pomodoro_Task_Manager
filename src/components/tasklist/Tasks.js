import React from 'react';
import Task from './Task';

const Tasks = (props) => (
  <div>
    <div className="widget-header">

    </div>

    {props.tasks.length === 0 && <p className="widget__message">Please add an task to get started!</p>}
    {
      props.tasks.map((task, index) => (
        <Task
          key={task}
          taskText={task}
          count={index + 1}
          handleDeleteTask={props.handleDeleteTask}
        />
      ))
    }
  </div>
);

export default Tasks;
