import React, { Component } from "react";

export default class TodoForm extends Component {
  // Constructor with State
  constructor() {
    super();
    this.state = {
      newTask: "",
    };
  }

  // Handle Form onChange
  handleFormChange = (e) => {
    e.preventDefault();
    this.setState({ newTask: e.target.value });
  };

  // Add Todo on Submit
  handleTodoSubmit = (e) => {
    e.preventDefault();
    this.props.addNewTask(this.state.newTask);
    this.setState({ newTask: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleTodoSubmit}>
        <h2>Todo List</h2>
        <input
          type="text"
          placeholder="Add Item"
          name="todo"
          value={this.state.newTask}
          onChange={this.handleFormChange}
          required
        />
        <div>
          <input
            type="submit"
            value="Add Todo Item"
            className="btn btn-primary btn-block"
          />
        </div>
        <div>
          <button
            onClick={this.props.clearCompleted}
            className="btn btn-light btn-block"
          >
            Clear Completed
          </button>
        </div>
      </form>
    );
  }
}
