import React from 'react';
import { connect } from 'react-redux';

import './AddNote.css';

export class AddNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //editing: false
        }

        this.submitPress = this.submitPress.bind(this);
    }


  submitPress(event) {
    event.preventDefault();
    const text = this.textInput.value.trim();
    if (text && this.props.onAdd) {
      this.props.onAdd(this.textInput.value);
    }

    console.log(textInput)
    this.textInput.value = '';


    // this.props.dispatch(abcd(textInput))
  }

  render() {
    return (
      <div className="addnote">
        <form onSubmit={this.props.onSubmit} aria-label="enter form">
          <input
            type="text"
            name="addInput"
            placeholder="vocabulary word"
            value={this.props.numberInput}
            onChange={this.props.onChange}
            aria-label="enter a vocab word"
            required
          />
          <button
            type="submit"
            value="Submit"
            onClick={this.submitPress}
          >
            ADD NOTE
          </button>
          <br />
          <textarea
            rows="2"
            cols="25"
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
