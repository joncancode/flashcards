import React, { Component } from 'react';
import './Notecards.css';

import Notetext from './Notetext.js';

class Notecards extends React.Component {
  render() {
    return (
      <div className="notecards">
        <Notetext />
      </div>
    );
  }
}

export default Notecards;
