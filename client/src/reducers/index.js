//dont think this next line should be commented, but it's not being used
//import { ADD_NOTE, CHECK_OFF, DELETE_NOTE } from '../actions';

const initialState = {
  cards: [ {  } ]
};

export const noteHeroReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return {
        ...state,
        cards: [
          ...state.cards,
          {
            ...action.note,
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
    
    case 'DELETE_NOTE':
      return state.filter(
        cards =>
          cards.id !== action.id
      );
    default:
      return state;
  }
};
