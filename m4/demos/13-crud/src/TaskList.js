/* Something is wrong but i can't find it
import React from "react";

export default class TaskList extends React.Component {
  state = {
    tasks: [
      {
        id: 1,
        description: "Mop the floor",
        done: true,
      },
      {
        id: 2,
        description: "Sweep the floor",
        done: true,
      },
      {
        id: 3,
        description: "Do laundry",
        done: false,
      },
    ],
    newTaskName: "",
    taskBeingEdited: null,
    editedTaskName: "",
  };

  addTask = () => {
    const newTask = {
      id: Math.floor(Math.random() * 10000 + 1),
      description: this.state.newTaskName,
      done: false,
    };

    /*
    // Method 1
    let cloned = this.state.tasks.slice();
    cloned.push(newTask);
    this.setState({
      tasks: cloned,
    });
  

    // Method 2 - spread operators
    // let cloned = [...this.state.tasks.newTask, newTask];
    this.setState({
      tasks: [...this.state.tasks, newTask],
    });

    console.log(`Task "${this.state.newTaskName}" is being added`);
  };

  updateFormField = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  checkTask = (task) => {
    console.log(task);

    let clonedTask = { ...task };
    console.log(clonedTask);
    clonedTask.done = !clonedTask.done;
    const indexToReplace = this.state.tasks.findIndex((eachTask) => {
      if (eachTask.id === task.id) return true;
      else return false;
    });
    console.log(`Index to replace is: ${indexToReplace}`);

    const left = this.state.tasks.slice(0, indexToReplace);
    const right = this.state.tasks.slice(indexToReplace + 1);

    this.setState({
      tasks: [...left, clonedTask, ...right],
    });
  };

  beginEditTask = (task) => {
    this.setState({
      taskBeingEdited: task,
      editedTaskName: task.description,
    });
  };

  processEditTask = (task) => {
    console.log(task);
    const clonedTask = {
      ...this.state.taskBeingEdited,
      description: this.state.editedTaskName,
    };

    const indexToReplace = this.state.tasks.findIndex((eachTask) => {
      if (eachTask.id === clonedTask.id) return true;
      else return false;
    });

    const modifiedTasks = {
      ...this.state.tasks.slice(0, indexToReplace),
      clonedTask,
      ...this.state.tasks.slice(indexToReplace + 1),
    };

    this.setState({
      tasks: modifiedTasks,
      taskBeingEdited: null,
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Task List</h1>
        <div>
          <label>Task Name: </label>
          <input
            type="text"
            name="newTaskName"
            value={this.state.newTaskName}
            onChange={this.updateFormField}
          />
          <button onClick={this.addTask}>Add Task</button>
        </div>
        <ul>
          {this.state.tasks.map((eachTask) => {
            if (
              this.state.taskBeingEdited &&
              eachTask.id === this.state.taskBeingEdited.id
            ) {
              return (
                <li key={eachTask.id}>
                  <input
                    type="text"
                    value={this.state.editedTaskName}
                    name="editedTaskName"
                    onChange={this.updateFormField}
                  />
                  <button onClick={this.processEditTask}>Update</button>
                  <button>Cancel</button>
                </li>
              );
            } else {
              return (
                <li key={eachTask.id}>
                  {eachTask.description}
                  <input
                    type="checkbox"
                    checked={eachTask.done}
                    onChange={() => {
                      this.checkTask(eachTask);
                    }}
                  />
                  <button
                    onClick={() => {
                      this.beginEditTask(eachTask);
                    }}
                  >
                    Edit
                  </button>
                  <button>Delete</button>
                </li>
              );
            }
          })}
        </ul>
      </React.Fragment>
    );
  }
}

*/

import React from "react";

export default class TaskList extends React.Component {
  state = {
    tasks: [
      {
        id: 1,
        description: "Mop the floor",
        done: true,
      },
      {
        id: 2,
        description: "Buy groceries",
        done: false,
      },
      {
        id: 3,
        description: "Walk the kid",
        done: false,
      },
    ],
    newTaskName: "",
    taskBeingEdited: null,
    editedTaskName: "",
  };

  addTask = () => {
    const newTask = {
      id: Math.floor(Math.random() * 10000 + 1),
      description: this.state.newTaskName,
      done: false,
    };
    console.log(newTask);

    this.setState({
      tasks: [...this.state.tasks, newTask],
    });

    console.log(`Task being added ${newTask.id}`);
  };

  updateFormField = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  checkTask = (task) => {
    console.log(task);
    let clonedTask = { ...task };
    console.log(`Cloned Task ${clonedTask}`);
    clonedTask.done = !clonedTask.done;
    const indexToReplace = this.state.tasks.findIndex((eachTask) => {
      if (eachTask.id === task.id) return true;
      else return false;
    });

    console.log(`Index is : ${indexToReplace}`);

    const left = this.state.tasks.slice(0, indexToReplace);
    const right = this.state.tasks.slice(indexToReplace + 1);
    this.setState({
      tasks: [...left, clonedTask, ...right],
    });
  };

  beginEditTask = (task) => {
    this.setState({
      taskBeingEdited: task,
      editedTaskName: task.description,
    });
  };

  processEditTask = (task) => {
    console.log(task);

    const clonedTask = {
      ...this.state.taskBeingEdited,
      description: this.state.editedTaskName,
    };

    const indexToReplace = this.state.tasks.findIndex((eachTask) => {
      if (eachTask.id === clonedTask.id) return true;
      else return false;
    });

    const modifiedTasks = [
      ...this.state.tasks.slice(0, indexToReplace),
      clonedTask,
      ...this.state.tasks.slice(indexToReplace + 1),
    ];

    this.setState({
      tasks: modifiedTasks,
      taskBeingEdited: null,
    });
  };

  cancelEdit = () => {
    this.setState({
      taskBeingEdited: null,
    });
  };

  deleteTask = (task) => {
    const indexToDelete = this.state.tasks.findIndex((eachTask) => {
      if (eachTask.id === task.id) return true;
      else return false;
    });

    const modifiedTasks = [
      ...this.state.tasks.slice(0, indexToDelete),
      ...this.state.tasks.slice(indexToDelete + 1),
    ];

    this.setState({
      tasks: modifiedTasks,
      taskBeingEdited: null,
    });
  };

  render() {
    return (
      <React.Fragment>
        {/* Create Task */}

        <div>
          <label>Task Name: </label>
          <input
            type="text"
            name="newTaskName"
            value={this.state.newTaskName}
            onChange={this.updateFormField}
          />
          <button onClick={this.addTask}>Add Task</button>
        </div>

        <ul>
          {this.state.tasks.map((eachTask) => {
            if (
              this.state.taskBeingEdited &&
              eachTask.id === this.state.taskBeingEdited.id
            ) {
              return (
                <li key={eachTask.id}>
                  <input
                    type="text"
                    value={this.state.editedTaskName}
                    name="editedTaskName"
                    onChange={this.updateFormField}
                  />
                  <button onClick={this.processEditTask}>Update</button>
                  <button>Cancel</button>
                </li>
              );
            } else {
              return (
                <li key={eachTask.id}>
                  {eachTask.description}
                  <input
                    type="checkbox"
                    checked={eachTask.done}
                    onChange={() => {
                      this.checkTask(eachTask);
                    }}
                  />
                  {/* use a closure to remember which task object */}
                  <button
                    onClick={() => {
                      this.beginEditTask(eachTask);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      this.deleteTask(eachTask);
                    }}
                  >
                    Delete
                  </button>
                </li>
              );
            }
          })}
        </ul>
      </React.Fragment>
    );
  }
}
