import React from "react";
import "./Todo.css";

function Todo({text, todo, deleteTodo, completeTodo }) {
  const handleDelete = () => {
    deleteTodo(todo.id);
  };
  const handleComplete = () => {
    completeTodo(todo.id);
  };
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      {/* Completed */}
      <button className="btn-completed" onClick={handleComplete}>
        <i className="fas fa-check"></i>
      </button>
      {/* Delete */}
      <button onClick={handleDelete}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Todo;
