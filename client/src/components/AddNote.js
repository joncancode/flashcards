import React from 'react';
import './AddNote.css';

export default function AddNote(props) {
  return (
    <div className="addnote">
      <form onSubmit={props.onSubmit} aria-label="enter form">
        <input
          type="text"
          name="addInput"
          placeholder="vocabulary word"
          value={props.numberInput}
          onChange={props.onChange}
          aria-label="enter a vocab word"
          required
        />
        <button type="submit" value="Submit">
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
