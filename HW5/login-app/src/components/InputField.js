import React, { useState, useEffect, useRef } from "react";
import "./InputField.css";

const InputField = ({
  eyeSlash,
  eye,
  checked,
  display,
  onError,
  validation,
  onChange,
  label,
  placeholder,
  name,
  type,
}) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    if (document.activeElement === inputRef.current) {
      validate();
    }
  }, [value]);

  useEffect(() => {
    handleError(error);
  }, [error]);

  const handleVisibility = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const handleChange =  (e, name) => {
    setValue(e.target.value);
    onChange(e.target.value, name);
  };
  
  const handleError = (error) => {
    onError(error);
    return;
  };

  const validate = () => {
    const rules = validation.split("|");
    for (let i = 0; i < rules.length; i++) {
      console.log(i);

      const current = rules[i];
      console.log(current);
      if (current === "required") {
        if (!value) {
          setError(`This field is ${current}`);
          return;
        }
      }
      const currentPair = current.split(":");
      switch (currentPair[0]) {
        case "min":
          if (value.length < currentPair[1]) {
            setError(
              `Field must be at least ${currentPair[1]} characters long`
            );
          } else {
            setError("");
          }

          break;
        case "max":
          if (value.length > currentPair[1]) {
            setError(
              `Field must be no longer than ${currentPair[1]} characters long`
            );
          }
          break;
        default:
          break;
      }
    }
  };
  return (
    <div>
      <label className="label" for={label}>
        {placeholder}
        {!checked ? (
          <div>
            <input
              ref={inputRef}
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
        ) : (
          <div>
            <input
              ref={inputRef}
              type={type}
              placeholder={placeholder}
              name={name}
              value={display}
              onChange={(e) => handleChange(e, name)}
            />
          </div>
        )}
      </label>
      {error !== "" ? <p className="validation">{error}</p> : ""}
    </div>
  );
};

export default InputField;
