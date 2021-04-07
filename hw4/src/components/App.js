import React from "react";
import SearchBar from "./SearchBar";
import CharacterList from "./CharacterList";
import Nav from "./Nav";
import Alert from "./Alert";

class App extends React.Component {
  state = {
    characters: [],
    changed: false,
    type: "",
    text: "",
    edit: false,
    selected: [{ clicked: 0, name: "" }],
    clear: true,
  };

  componentDidMount() {
    this.onSearchSubmit("White");
  }

  onSearchSubmit = async (term) => {
    const response = await fetch(
      "https://www.breakingbadapi.com/api/characters?name=" + term
    );
    const data = await response.json();
    console.log(data);
    if (term.toLowerCase() == "white")
      this.setState({ characters: data, changed: false, type: "", text: "" });
    else
      this.setState({
        characters: data,
        changed: true,
        type: "new",
        text: "New character",
        clear: true,
      });
  };

  handleDelete = (charName) => {
    let tempCharacters = this.state.characters.filter(
      (img) => img.name !== charName
    );
    this.setState({
      characters: tempCharacters,
      changed: true,
      type: "delete",
      text: `${charName} deleted`,
    });
  };
  onFormSubmit = (newName, birthday) => {
    let tempCharacter = this.state.characters.find(
      (char) => char.birthday === birthday
    );
    var position = this.state.characters.indexOf(tempCharacter);
    tempCharacter.name = newName;
    let tempCharacters = this.state.characters.filter(
      (char) => char.birthday !== birthday
    );
    tempCharacters.splice(position, 0, tempCharacter);
    this.setState({ characters: tempCharacters });
  };

  handleEdit = (charName) => {
    let numberOfClicks = this.state.selected.clicked + 1;
    this.setState({
      edit: true,
      selected: { name: charName, clicked: numberOfClicks },
      numberOfClicks,
      changed: true,
      type: "edit",
      text: `${charName} editing`,
    });
  };
  handleCancle = (clicked) => {
    this.setState({ selected: { clicked: clicked + 1 }, changed: false });
  };

  clearItems = () => {
    this.setState({ characters: [], clear: false });
  };

  render() {
    return (
      <div>
        {" "}
        <Nav />
        <div className="ui container" style={{ marginTop: "10px" }}>
          <SearchBar onSubmit={this.onSearchSubmit} />
          {this.state.changed && this.state.clear ? (
            <Alert type={this.state.type} text={this.state.text} />
          ) : (
            ""
          )}
          <CharacterList
            clear={this.state.clear}
            clearItems={this.clearItems}
            onCancle={this.handleCancle}
            onFormSubmit={this.onFormSubmit}
            edit={this.state.edit}
            selected={this.state.selected}
            characters={this.state.characters}
            onDelete={this.handleDelete}
            onEdit={this.handleEdit}
          />
        </div>
      </div>
    );
  }
}
export default App;
