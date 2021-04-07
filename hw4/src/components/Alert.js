import React from "react";
import "./Alert.css";

class Alert extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div className={`alert alert-${this.props.type}`} role="alert">
          <div className="">{this.props.text}</div>
        </div>
    );
  }
}

export default Alert;
