import React from "react";
import "./App.scss";
import TodoList from "./components/TodoList/index";
import Form from "./components/Form/index";
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
      <footer>
      </footer>
    </div>
  );
}

export default App;
