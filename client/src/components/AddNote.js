import React from 'react'
import './AddNote.css'

export default function AddNote(props) {
    return (
        <div className="addnote">
      <form onSubmit={props.onSubmit}>
        <input
          type="text"
          name="addInput"
          placeholder="vocabulary word"
          value={props.numberInput}
          onChange={props.onChange}
          required
        />
        <button type="submit" value="Submit">
           ADD NOTE
        </button>
      </form>
        </div>
    );
};

