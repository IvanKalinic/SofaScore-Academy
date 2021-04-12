import React, { useState, useEffect, useRef } from "react";
import "./InputField.css";

const InputField = ({
  eyeSlash,
  eye,
  value,
  onError,
  validation,
  onChange,
  label,
  placeholder,
  name,
  type,
  error,
}) => {
  const [passwordShown, setPasswordShown] = useState(false);

  const handleVisibility = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  
  const validate = (e,name) => {
    const rules = validation.split("|");
    for (let i = 0; i < rules.length; i++) {
      const value = e.target.value;
      const current = rules[i];
      if (current === "required") {
        if (!value) {
          handleError(`This field is ${current}`,name);
          return;
        }
      }
      const currentPair = current.split(":");
      switch (currentPair[0]) {
        case "min":
          if (value.length < currentPair[1]) {
            handleError(
              `Field must be at least ${currentPair[1]} characters long`,name
            );
          } else {
            handleError("",name);
          }

          break;
        case "max":
          if (value.length > currentPair[1]) {
            handleError(
              `Field must be no longer than ${currentPair[1]} characters long`,
              name);
          }
          break;
        default:
          break;
      }
    }
  };
  const handleError = (errorName,name) => {
    onError(errorName,name);
    return;
  };

  const handleChange = (e, name) => {
    onChange(e.target.value, name);
    validate(e,name);
  };
  return (
    <div>
      <label className="label" for={label}>
        {placeholder}
        <div>
          <input
            type={passwordShown ? "text" : type}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={(e) => handleChange(e, name)}
          />
          {eye ? (
            <i className="icon" onClick={handleVisibility}>
              {passwordShown ? eye : eyeSlash}
            </i>
          ) : (
            <i className="icon"></i>
          )}
        </div>
      </label> 
     <p className="validation">{name==="username" ? error.username
     : error.password}</p>
    </div>
  );
};

export default InputField;
