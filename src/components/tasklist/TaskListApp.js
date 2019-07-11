import React from 'react';
import AddTask from './AddTask';
import Header from './Header';
import Tasks from './Tasks';

export default class TaskListApp extends React.Component {
  state = {
    tasks: [],
    selectedTask: undefined
  };
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
  componentDidMount() {
    try {
      const json = localStorage.getItem('tasks');
      const tasks = JSON.parse(json);

      if (tasks) {
        this.setState(() => ({ tasks }));
      }
    } catch (e) {
      // Do nothing at all
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.tasks.length !== this.state.tasks.length) {
      const json = JSON.stringify(this.state.tasks);
      localStorage.setItem('tasks', json);
    }
  }
  componentWillUnmount() {
  //  console.log('componentWillUnmount');
  }
  render() {

    return (
      <div>
        <Header />
        <div className="container">

          <div className="widget">
            <Tasks
              tasks={this.state.tasks}
              handleDeleteTask={this.handleDeleteTask}
            />
            <hr></hr>
            <AddTask
              handleAddTask={this.handleAddTask}
            />
            <br></br><hr></hr>
            <button
            className="button button--link"
            onClick={this.handleDeleteTasks}
          >
            Remove All
        </button>
          </div>
        </div>
      </div>
    );
  }
}
