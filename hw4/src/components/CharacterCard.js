import React from "react";
import "./CharacterCard.css";
import Edit from "./Edit";

class CharacterCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { size: 250 };
    this.imgRef = React.createRef();
  }
  handleIncrementClick = () => {
    this.setState({ size: this.state.size + 10 });
  };
  componentDidUpdate(prevState, prevProps) {
    this.imgRef.current.style.width = `${this.state.size}px`;
  }

  render() {
    const url = this.props.image;
    return (
      <div>
        <img ref={this.imgRef} onClick={this.handleIncrementClick} src={url} />
        <div className="container">
          <h3 className="element">{this.props.name}</h3>
          <button
            id="btn"
            className="ui inverted red button"
            onClick={() => this.props.onDelete(this.props.name)}
          >
            Delete
          </button>
        </div>
        <div className="edit-space">
          <button
            id="btn"
            className="ui inverted yellow button"
            onClick={() => this.props.onEdit(this.props.name)}
          >
            Edit
          </button>
        </div>
      </div>
    );
  }
}

export default CharacterCard;
