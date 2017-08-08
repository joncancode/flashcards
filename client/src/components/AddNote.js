import React from 'react';
import { connect } from 'react-redux';

import { addNote } from '../actions';

import './AddNote.css';

export class AddNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //editing: false
    };

    this.submitPress = this.submitPress.bind(this);
  }

  submitPress(event) {
    event.preventDefault();
    const text = this.textInput.value.trim();
    if (text && this.props.onAdd) {
      this.props.onAdd(this.textInput.value);
      console.log("text added")
    }
    const def = this.textArea.value.trim();
    if (def && this.props.onAdd) {
      this.props.onAdd(this.textArea.value);
      console.log("definition added")
    }

    console.log(this.textInput.value.trim(), 'word');
    console.log(this.textArea.value.trim(), 'def');

    console.log(this.props.dispatch(addNote(text)))

     this.props.dispatch(addNote(text))

    this.textInput.value = '';
    this.textArea.value = '';

    // console.log(textInput)
    // this.textInput.value = '';

  }

  render() {
    return (
      <div className="addnote">
        <form onSubmit={this.props.onSubmit} aria-label="enter form">
          <input
            type="text"
            ref={input => (this.textInput = input)}
            name="addInput"
            placeholder="vocabulary word"
            onChange={this.props.onChange}
            aria-label="enter a vocab word"
            required
          />
          <button type="submit" value="Submit" onClick={this.submitPress}>
            ADD NOTE
          </button>
          <br />
          <textarea
            rows="2"
            cols="25"
            ref={textArea => (this.textArea = textArea)}
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
