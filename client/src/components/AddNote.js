import React from 'react';
import { connect } from 'react-redux';

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
    console.log(this.textInput.value.trim());
    console.log('.');
    const text = this.textInput.value.trim();
    if (text && this.props.onAdd) {
      this.props.onAdd(this.textInput.value);
    }

    this.textInput.value = '';

    // console.log(textInput)
    // this.textInput.value = '';

    // this.props.dispatch(addNote(text))
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
            ref={textArea => (this.textInput = textArea)}
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
