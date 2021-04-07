import React from "react";
import './Edit.css';
import Moment from 'moment';

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state={term:props.name,birth:Moment(this.props.birthday).format("DD-MM-YYYY")}
  }
  onInputChanged = (event) => {
      this.setState({term:event.target.value});
  }
  onFormSubmit = (event) =>{
    // this.props.selected.clicked ++;
    event.preventDefault();
    
    this.props.onFormSubmit(this.state.term,this.props.birthday)
  }
 
  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="form"> 
        <div className="ui segment">
          <div className="ui form">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="e.g. John"
              value={this.state.term}
              onChange={this.onInputChanged}
            />
            <h2>Birthday:{this.state.birth}</h2>
          </div>
        </div>
        <button className="ui inverted green button" type="submit">Submit</button>
        <button onClick={() => this.props.onCancle(this.props.selected.clicked)} className="ui inverted secondary button">Cancle</button>
      </form>
    );
  }
}

export default Edit;
