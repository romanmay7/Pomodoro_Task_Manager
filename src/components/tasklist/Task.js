import React from 'react';

const Task = (props) => (
  <div className="task row">
    <div className="task_text">{props.count}. {props.taskText}</div>
    <button
      className="btn btn-link"
      onClick={(e) => {
        props.handleDeleteTask(props.taskText);
      }}
    >
      remove
      </button>
  </div>
);

export default Task;
