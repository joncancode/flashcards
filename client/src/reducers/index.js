import { ADD_NOTE, TOGGLE_NOTE } from '../actions';

const initialState = {
    card: 
        [{words: "example1",
        definition: "example1"},
        {words: "example2",
        definition: "example2"}],
    flipped: false
    }

export const noteHeroReducer = (state=initialState, action) => {
    if (action.type === ADD_NOTE) {
        let card = state.card.map((card, index) => {
            if (index !== action.cardIndex) {
                return card;
            }
            return Object.assign({}, list, {
                cards: [...card.cards, {
                    words: action.words,
                    definitions: action.definitions
                }]
            });
        });

        return Object.assign({}, state, {
            lists
        });
    }
    else if (action.type === TOGGLE_NOTE) {
         state = Object.assign({}, state, {
             flipped: !state.flipped
        });
        return state;
    }


     }

    return state;
};

