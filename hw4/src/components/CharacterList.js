import "./CharacterList.css";
import React from "react";
import CharacterCard from "./CharacterCard";
import Edit from "./Edit";

class CharacterList extends React.Component {
  constructor(props) {
    super(props);
  }

  
  render() {
    let characters = this.props.characters.map((item) => {
      return (
        <div>
          {this.props.edit &&
          this.props.selected.clicked % 2 !== 0 &&
          this.props.selected.name === item.name ? (
            <Edit
              onFormSubmit={this.props.onFormSubmit}
              birthday={item.birthday}
              name={item.name}
              key={item.char_id}
              image={item.img}
              selected={this.props.selected}
              onCancle={this.props.onCancle}
              onCancle={this.props.onCancle}
            />
          ) : (
            <CharacterCard
              onFormSubmit={this.props.onFormSubmit}
              name={item.name}
              key={item.char_id}
              id={item.chard_id}
              image={item.img}
              onDelete={this.props.onDelete}
              onEdit={this.props.onEdit}
              edit={this.props.edit}
              selected={this.props.selected}
            />
          )}
        </div>
      );
    });
    return (
      <div>
        <div className="image-list">{characters}</div>
        <div>
          {this.props.clear ? (
            <button id="clear" className="negative ui button" onClick={this.props.clearItems}>
              Clear all characters
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default CharacterList;
