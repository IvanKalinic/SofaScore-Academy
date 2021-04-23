import React from "react";
import { useTodos } from "../context/TodoContext";
import Todo from "./Todo";
import "./TodoList.css";

// function TodoList({ filteredTodos,todos, deleteTodo,completeTodo }) {
function TodoList(){
  const { filteredTodos,todos,deleteTodo,completeTodo } = useTodos();
  return (
    <div className="container">
      <ul className="list">
        {filteredTodos.map((todo) => (  
          <Todo
            key={todo.id}
            text={todo.text}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
            todo={todo}
            todos={todos}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
