import React from 'react';
import { connect } from 'react-redux';

import { addNote, checkOff, deleteNote, postNotes } from '../actions';

import './AddNote.css';

export class AddNote extends React.Component {
  constructor() {
    super();
    this.state = {
      words: "",
      definition: ""
    };
  }

  onChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    })
  }

  submitPress = (e) => {
    e.preventDefault();

    this.props.dispatch(addNote({
      ...this.state
    }))

    this.setState({
      words: '',
      definition: ''
    })
  }


  render() {
    return (
      <div className="addnote">
        <form onSubmit={this.props.onSubmit} aria-label="enter form">
          <input
            type="text"
            name="words"
             //name="userInput"
            value={this.state.words}
            placeholder="vocabulary word"
            onChange={this.onChange}
            aria-label="enter a vocab word"
            required
          />
          <button onClick={() => postNotes()}>Fetch posts</button>
          <button type="submit" value="Submit" onClick={this.submitPress}>
            ADD NOTE
          </button>
          <br />
          <textarea
            onChange={this.onChange}
            rows="2"
            cols="25"
            value={this.state.definition}
            name="definition"
            aria-label="enter definition"
            placeholder="enter definition"
            required
          />
        </form>
      </div>
    );
  }
}

export default connect()(AddNote);
