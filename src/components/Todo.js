import React, { Component, Fragment } from "react";

export default class Todo extends Component {
  render() {
    //Destructure Props
    const { name, completed, id } = this.props.todo;

    // Get ID of Todo Item
    const handleClick = (e) => {
      this.props.toggleCompleted(this.props.todo.id);
    };

    return (
      <div>
        <div
          className={`badge ${
            completed ? " badge-primary linethrough" : "badge-success"
          }`}
          onClick={handleClick}
        >
          {name}
        </div>
      </div>
    );
  }
}
