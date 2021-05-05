import React, { useState } from "react";
import { useTodos } from "../../context/TodoContext.js";
import Filter from "../Filter";
import "./index.scss";

function Form() {
  const { handleChange, onSubmit, input } = useTodos();
  const [up, setUp] = useState(true);
  const handleInputChange = (e) => {
    handleChange(e.target.value);
  };
  const handleSubmit = () => {
    onSubmit(input);
    handleChange("");
  };
  const changeSymbol = () => {
    setUp(!up);
  };
  return (
    <div className="container">
      <form className="flex">
        <input
          className="input"
          value={input}
          onChange={(e) => handleInputChange(e)}
        />
        <button type="submit" onClick={handleSubmit}>
          <i className="fas fa-plus-square"></i>
        </button>
      </form>
      <div className="filter-position">
        <div className="show-filter" onClick={changeSymbol}>
          <i className={`filter fas fa-caret-${up ? "up" : "down"}`}></i>
          <p>SHOW FILTERS</p>
        </div>
      </div>
      <div>{!up ? <Filter /> : null}</div>
    </div>
  );
}

export default Form;
