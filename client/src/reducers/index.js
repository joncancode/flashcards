import { ADD_NOTE } from '../actions';

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


        // let cards = state.cards.map((card, cardIndex) => {
        //     if (cardIndex !== action.cardIndex) {
        //         return card;
        //     }

  if (action.type === ADD_NOTE) {
    return Object.assign({}, state, {
      cards: [...state.cards, {word: action.word, definition: action.definition}],
    });
  }
   return state;

};
// })


