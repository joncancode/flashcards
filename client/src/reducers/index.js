import {ADD_NOTE, TOGGLE_NOTE, ADD_DEFINITION} from '../actions';

const initialState = {
    lists: []
};

export const trelloReducer = (state=initialState, action) => {
    if (action.type === ADD_NOTE) {
        return Object.assign({}, state, {
            lists: [...state.lists, {
                title: action.title,
                cards: []
            }]
        });
    }
    else if (action.type === TOGGLE_NOTE) {
        let lists = state.lists.map((list, index) => {
            if (index !== action.listIndex) {
                return list;
            }
            return Object.assign({}, list, {
                cards: [...list.cards, {
                    text: action.text
                }]
            });
        });
        

        return Object.assign({}, state, {
            lists
        });
    }
    else if (action.type === actions.FETCH_BOARD_SUCCESS) {
        return action.board;
    }
    return state;
};

