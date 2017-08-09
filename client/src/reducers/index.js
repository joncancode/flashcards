import uuid from 'uuid/v4';

import { ADD_NOTE, CHECK_OFF, DELETE_NOTE } from '../actions';

const initialState = {
  cards: [
    {
    //   // word: '',
    //   // definition:
    //   //   '',
    //   // id: uuid()
    // },
    // {
    //   word: '',
    //   definition:
    //     '',
    //   id: uuid()
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
      case 'SET_NOTES':
      return { ...state, cards: action.allNotes};
    // case 'CHECK_OFF':
    //   return state.map(
    //     cards =>
    //       cards.id === action.id
    //         ? {
    //             ...cards,
    //             completed: !cards.completed
    //           }
    //         : cards
    //   );
    // case 'DELETE_NOTE':
    //   return state.filter(
    //     cards =>
    //       cards.id !== action.id
    //   );
    default:
      return state;
  }
};
