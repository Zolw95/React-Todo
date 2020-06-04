import React, { Fragment } from "react";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import CSS from "./App.css";

const todos = [
  {
    name: "",
    id: Date.now(),
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos,
    };
  }

  // Add New Todo Task
  addNewTask = (taskName) => {
    this.setState({
      todos: [
        ...this.state.todos,
        { name: taskName, completed: false, id: Date.now() },
      ],
    });
  };

  // Clear Completed Task
  clearCompletedTask = () => {
    this.setState({
      todos: this.state.todos.filter((item) => {
        return !item.completed;
      }),
    });
  };

  // Toggle Completed
  toggleCompleted = (id) => {
    console.log("Id coming back", id);
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (id === todo.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    });
  };

  render() {
    return (
      <Fragment>
        <TodoForm
          addNewTask={this.addNewTask}
          clearCompleted={this.clearCompletedTask}
        />
        <TodoList
          todos={this.state.todos}
          clearCompleted={this.clearCompletedTask}
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.clearCompletedTask}
        />
      </Fragment>
    );
  }
}

export default App;
