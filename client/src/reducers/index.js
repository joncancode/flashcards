import { ADD_NOTE, TOGGLE_NOTE } from '../actions';

const initialState = {
  cards: [
    {
      words: 'Closure',
      definition:
        "an inner function that has access to the outer (enclosing) function's variables—scope chain"
    },
    {
      words: 'Hoisting',
      definition:
        "JavaScript interpreter's action of moving all variable and function declarations to the top of the current scope"
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
  return state;
  if (action.type === ADD_NOTE) {
    return Object.assign({}, state, {
      cards: [...state.cards.words, action.word],
      cards: [...state.cards.definition, action.definition]
    });
  }
  // else if (action.type === TOGGLE_NOTE) {
  //      state = Object.assign({}, state, {
  //          flipped: !state.flipped
  //     });
  //     return state;
  // }
  // return state;
};
