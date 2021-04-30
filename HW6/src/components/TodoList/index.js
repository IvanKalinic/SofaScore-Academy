import React from "react";
import { useTodos } from "../../context/TodoContext";
import Todo from "../Todo";
import "./index.scss";

function TodoList(){
  const { filteredTodos} = useTodos();
  return (
    <div className="container">
      <ul className="list">
        {filteredTodos.map((todo,i) => (  
          <Todo
            key={i}
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
