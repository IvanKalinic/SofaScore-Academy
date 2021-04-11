import React, { useState } from "react";
import Details from "./Details.js";
import "./Logged.css";

function Logged({ caretDown, caretUp, logOut, user }) {
  const [details, setDetails] = useState(false);
  const handleLogOut = () => {
    logOut(true);
  };

  return (
    <div>
      <button className="logout-btn" onClick={handleLogOut}>
        Logout
      </button>
      <div className="form">
        <div className="upper">
          <h2>Hi {user.firstName}!</h2>
          <span onClick={() => setDetails(!details)}>
            <i>
              {!details ? caretDown : caretUp}
            </i>{" "}
            Your Details
          </span>
        </div>

        <div className="details">
          {details ? <Details user={user} /> : null}
        </div>
      </div>
    </div>
  );
}

export default Logged;
