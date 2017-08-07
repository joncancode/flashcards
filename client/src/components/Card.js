//manages 1 single card

import React from 'react';

import './Card.css';

import FrontText from './FrontText.js';
import BackText from './BackText.js';

export default class Card extends React.Component {
  state = {
    flipped: false
  };

  //if false -> show this

  //this.props.card.map (comes from redux)

  _onFlip = () => this.setState({ flipped: !this.state.flipped });

  render() {
    if (this.state.flipped) {
      return (
        <div className="notecards" onClick={this._onFlip}>
          <BackText text={this.props.definition} />
        </div>
      );
    }
    return (
      <div className="notecards" onClick={this._onFlip}>
        <FrontText text={this.props.words} />
      </div>
    );
  }
}
