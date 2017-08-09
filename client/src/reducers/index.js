import uuid from 'uuid/v4';

import { ADD_NOTE, CHECK_OFF, DELETE_NOTE } from '../actions';

const initialState = {
  cards: [
    {
      words: 'Closure',
      definition:
        "an inner function that has access to the outer (enclosing) function's variables—scope chain",
      id: uuid()
    },
    {
      words: 'Hoisting',
      definition:
        "JavaScript interpreter's action of moving all variable and function declarations to the top of the current scope",
      id: uuid()
    }
  ]
};

// submitNumber(e) {
// e.preventDefault();
// this.setState({
//   listOfGuesses: [...this.state.listOfGuesses, this.state.numberInput],
//   distanceAway: checkDistance(this.state.numberInput, this.state.answer)
// });
// this.answerCorrectly(this.state.numberInput, this.state.answer);

export const noteHeroReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return {
        ...state,
        cards: [
          ...state.cards,
          {
            ...action.note,
            id: uuid(),
            completed: false
          }
        ]
      };
    case 'CHECK_OFF':
      return state.map(
        cards =>
          cards.id === action.id
            ? {
                ...cards,
                completed: !cards.completed
              }
            : cards
      );
    case 'DELETE_NOTE':
      return state.filter(
        cards =>
          cards.id !== action.id
      );
    default:
      return state;
  }
};
