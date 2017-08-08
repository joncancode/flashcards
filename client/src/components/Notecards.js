//manages array of Cards

import React from 'react';
import { connect } from 'react-redux'

import './Notecards.css';

import Card from './Card.js';

export class Notecards extends React.Component {

  render() {
    return (
      <div className="notecards">
        {this.props.cards.map((card, i) => (
            <Card key={i} {...card} />
        ))}
      </div>
    );
  }
}

// -----for the total number of notes----- 

const mapStateToProps = state => ({
    cards: state.cards
});

export default connect(mapStateToProps)(Notecards);
