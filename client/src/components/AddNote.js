import React from 'react';
import { connect } from 'react-redux';

import { addNote, checkOff, deleteNote, postNotes } from '../actions';

import './AddNote.css';

export class AddNote extends React.Component {
  constructor() {
    super();
    this.state = {
      word: "",
      definition: ""
    };
  }

  onChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.dispatch(postNotes({
      ...this.state
    }))

    this.setState({
      word: '',
      definition: ''
    })
  }



  render() {
    return (
      <div className="addnote">
        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            type="text"
            name="word"
             //name="userInput"
            value={this.state.word}
            aria-label="enter form"
            placeholder="vocabulary word"
            onChange={this.onChange}
            aria-label="enter a vocab word"
            required
          />
          <button type="submit" value="Submit" >
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
