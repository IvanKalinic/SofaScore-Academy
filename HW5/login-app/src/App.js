import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import InputField from "./components/InputField";
import Logged from "./components/Logged";
import Alert from "./components/Alert";
import RememberMe from "./components/RememberMe";
import Login from "./components/Login";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash,faCaretDown,faCaretUp } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;
const eyeSlash = <FontAwesomeIcon icon={faEyeSlash} />;
const caretDown = <FontAwesomeIcon icon={faCaretDown} />;
const caretUp = <FontAwesomeIcon icon={faCaretUp} />;

const URL = "https://private-leagues-api.herokuapp.com/api/login";

function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(false);
  const [checked, setChecked] = useState(false);
  const [loggedUser, setLoggedUser] = useState([]);
  const [logOut, setLogOut] = useState(true);
  const [failed, setFailed] = useState(false);
  

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (!userName && !password) {
      setFailed(true);
    } 
    else {
      if (valid) {
        console.log("CALLED");
        postRequest().then((data) => {
          console.log(data);
          if (!data.error) {
            setLoggedUser(data);
            setLogOut(false);
          } else {
            setFailed(true);
            setLogOut(true);
            return;
          }
        });
      } else {
        setFailed(false);
      }
    }
  },[userName,password]);


  const handleChange = (value, name) => {
     if (name === "password") {
      setPassword(value);
    } else if (name === "username") {
      setUserName(value);
    }
    localStorage.setItem(name,value);
  };
  
  const handleError = (error) => {
    if (!error) setValid(true);
    else setValid(false);
  };

  const postRequest = async () => {
    const response = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" }, 
      body: JSON.stringify({ username: userName, password: password }),
    });
    return response.json();
  };

  const onChecked = () => {
    setChecked(!checked);
    if(loggedUser){
      setUserName(localStorage.getItem("username"));
      setPassword(localStorage.getItem("password"));
    }
  };

  return (
    <div>
      {logOut ? (
        <form onSubmit={(e)=>handleSubmit(e)} className="form">  
          <h1>Welcome to login app!</h1>
          <InputField
            placeholder="User name"
            name="username"
            label="username"
            type="text"
            onChange={handleChange}
            validation={`required|min:3|max:10`}
            onError={handleError}
            display={userName}
            checked={checked}
          />
          <InputField
            placeholder="Password"
            name="password"
            label="password"
            type="password"
            onChange={handleChange}
            validation={"required|min:8"}
            onError={handleError}
            display={password}
            checked={checked}
            eye={eye}
            eyeSlash={eyeSlash}
          />
          <br />
          <RememberMe checked={checked} onChecked={onChecked} />
          <br />
          <Login />
          {failed ? <Alert /> : null}
        </form>
      ) : (
        <Logged caretDown={caretDown} caretUp={caretUp} user={loggedUser.user} logOut={setLogOut} />
      )}
    </div>
  );
}

export default App;
