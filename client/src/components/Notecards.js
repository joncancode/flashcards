import React from 'react';
import { connect } from 'react-redux'

import './Notecards.css';

import Notetext from './Notetext.js';

export class Notecards extends React.Component {
  render() {
    return (
      <div className="notecards">
        <Notetext />
      </div>
    );
  }
}

// -----for the total number of notes----- 

const mapStateToProps = state => ({
    count: state.notes.length
});

export default connect(mapStateToProps)(Notecards);
