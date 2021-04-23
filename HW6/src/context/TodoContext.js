import React, { useState, useEffect,useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage.js";

const TodoContext = React.createContext();

export function useTodos() {
    return useContext(TodoContext);
  }

export function TodoProvider({ children }) {
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [input, setInput] = useState("");
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  const handleFilter = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
    }
  };

  useEffect(() => {
    handleFilter();
  }, [status, todos]);

  const deleteTodo = (id) => {
    console.log(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleChange = (value) => {
    setInput(value);
  };
  const completeTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };
  const onSubmit = (input) => {
    setTodos([
      ...todos,
      { text: input, completed: false, id: Math.random() * 1000 },
    ]);
  };

  const onStatus = (value) => {
    setStatus(value);
    console.log(value);
  };

  const value = {
    todos,
    setTodos,
    input,
    filteredTodos,
    handleFilter,
    deleteTodo,
    completeTodo,
    handleChange,
    onSubmit,
    onStatus,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}
