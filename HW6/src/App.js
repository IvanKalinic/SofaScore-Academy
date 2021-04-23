import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import Form from "./components/Form";
import { TodoProvider } from "./context/TodoContext";

function App() {
  return (
    <div className="App">
      <header>
        <h1>My todos</h1>
      </header>
      <TodoProvider>
        <Form />
        <TodoList />
      </TodoProvider>
    </div>
  );
}

export default App;
