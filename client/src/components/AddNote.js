import React from 'react';
import { connect } from 'react-redux';

import { addNote } from '../actions';

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
    // const text = this.textInput.value;
    // if (text && this.props.onAdd) {
    //   this.props.onAdd(this.textInput.value);
    //   console.log("text added")
    // }
    // const def = this.textArea.value;
    // if (def && this.props.onAdd) {
    //   this.props.onAdd(this.textArea.value);
    //   console.log("definition added")
    // }

    // console.log(this.textInput.value.trim(), 'word');
    // console.log(this.textArea.value.trim(), 'def');

    this.props.dispatch(addNote({
      ...this.state
    }))

    this.setState({
      words: '',
      definition: ''
    })

    // this.textInput.value = '';
    // this.textArea.value = '';

  }

  render() {
    return (
      <div className="addnote">
        <form onSubmit={this.props.onSubmit} aria-label="enter form">
          <input
            type="text"
            name="words"
            value={this.state.words}
            placeholder="vocabulary word"
            onChange={this.onChange}
            aria-label="enter a vocab word"
            required
          />
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
