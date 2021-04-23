import React, { useState } from "react";
import { useTodos } from "../context/TodoContext";
import "./Filter.css";

function Filter() {
  const { onStatus } = useTodos();
  const [color, setColor] = useState({
    all: "",
    completed: "",
    uncompleted: "",
  });
  const handleStatus = (e) => {
    onStatus(e.target.value);
    switch (e.target.value) {
      case "completed":
        setColor({ completed: "green", all: "", uncompleted: "" });
        break;
      case "uncompleted":
        setColor({ uncompleted: "red", all: "", completed: "" });
        break;
      default:
        setColor({ all: "purple", uncompleted: "", completed: "" });
    }
  };
  return (
    <div className="flex-content">
      <div className={`item ${color.all}`}>
        <option value="all" onClick={(e) => handleStatus(e)}>
          All
        </option>
      </div>
      <div className={`item ${color.completed}`}>
        <option value="completed" onClick={(e) => handleStatus(e)}>
          Completed
        </option>
      </div>
      <div className={`item ${color.uncompleted}`}>
        <option value="uncompleted" onClick={(e) => handleStatus(e)}>
          Uncompleted
        </option>
      </div>
    </div>
  );
}

export default Filter;
