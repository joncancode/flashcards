//manages 1 single card

import React from 'react';

import './Card.css';

import FrontText from './FrontText.js';
import BackText from './BackText.js';

export default class Card extends React.Component {
  state = {
    flipped: false
  };

  _onFlip = () => this.setState({ flipped: !this.state.flipped });

  // _handleCompleted = id => {
  //   this.props.checkOff(id);
  // };

    _handleDelete = id => {
      console.log("id", id)
    this.props.deleteNote(id);
  };

  render() {
    if (this.state.flipped) {
      return (
        <div className="cardback" onClick={this._onFlip}>
          <BackText text={this.props.definition} />
        </div>
      );
    }
    return (
      <div className="cardfront" onClick={this._onFlip}>
        <FrontText text={this.props.word} />
         <button onClick={() => this._handleDelete(this.props._id)}>delete</button> 
           {/* <input onChange={ (id) => this._handleCompleted} type="checkbox"/>   */}
      </div>
    );
  }
}
