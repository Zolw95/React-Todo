import React, { Component } from "react";
import Todo from "./Todo";

export default class TodoList extends Component {
  render() {
    // Destructure Props
    const todos = this.props.todos;
    console.log("todolist", todos);
    return (
      <div className="card bg-light">
        <h3 className="text-primary text-center">Todos</h3>
        <div>
          {todos.map((todo) =>
            todo.name.length > 0 ? (
              <Todo
                todo={todo}
                toggleCompleted={this.props.toggleCompleted}
                key={todo.id}
              />
            ) : null
          )}
        </div>
      </div>
    );
  }
}
