//manages array of Cards

import React from 'react';
import { connect } from 'react-redux'

import './Notecards.css'; // can make it with import {nameOfSomething} from __file__

import Card from './Card.js';

import {addNote} from '../actions';

export class Notecards extends React.Component {
    constructor(props) {
      super(props);
        this.state = {
          cards: []
        }
      }
    
    addNote(word, definition) {
        this.props.dispatch(addNote(word, definition, this.props.cardIndex));
    }

    render() {
        const cards = this.props.cards.map((card) =>
            <Card key={card.id} {...card} 
            onAdd={word => this.addNote(word)}
            _handleDelete={word => this.deleteNote(word)}
            />

        );
        return (
            <div className="words">
                <h3>{this.props.word}</h3>
                {cards}
               
                
            </div>
        );
    }


//   render() {
//     return (
//       <div className="notecards">
//         {this.props.cards.map((card, i) => (
//             <Card key={i} {...card} />
//         ))}
//       </div>
//     );
//   }

 }

// -----for the total number of notes----- 

const mapStateToProps = state => ({
    cards: state.cards
});

export default connect(mapStateToProps)(Notecards);
