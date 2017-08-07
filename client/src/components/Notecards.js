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


export default connect()(Notecards);
