import React from "react";
import { useTodos } from "../../context/TodoContext";
import "./index.scss";
import { Check, Trash } from "../../assets/icons/index.js";

function Todo({ text, id, completed }) {
  const { deleteTodo, completeTodo } = useTodos();
  const handleDelete = () => {
    deleteTodo(id);
  };
  const handleComplete = () => {
    completeTodo(id);
  };
  return (
    <div className="todo">
      <li className={`todo-item ${completed ? "completed" : ""}`}>{text}</li>
      <div className="actions">
        <span>
          <Check onClick={handleComplete} />
        </span>
        <span >
          <Trash onClick={handleDelete} />
        </span>
      </div>
    </div>
  );
}

export default Todo;
