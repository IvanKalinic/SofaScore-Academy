import React from "react";
import { useTodos } from "../../context/TodoContext";
import Todo from "../Todo";
import "./index.scss";

function TodoList(){
  const { handleFilter} = useTodos();
  let filteredTodos = handleFilter();
  return (
    <div className="container">
      <ul className="list">
        {filteredTodos.map((todo) => (  
          <Todo
            key={todo.id}
            text={todo.text}
            id={todo.id}
            completed={todo.completed}
          />
        ))}
      </ul>
    </div>

  );
}

export default TodoList;
