import React from "react";
import { useTodos } from "../../context/TodoContext";
import "./index.css";

function Todo({text,id,completed }) {
  const { deleteTodo,completeTodo} = useTodos();
  const handleDelete = () => {
    deleteTodo(id);
  };
  const handleComplete = () => {
    completeTodo(id);
  };
  return (
    <div className="todo">
      <li className={`todo-item ${completed ? "completed" : ""}`}>
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
