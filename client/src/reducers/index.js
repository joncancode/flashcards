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
        // return Object.assign({}, state, {
        //     lists: [...state.lists, {
        //         title: action.title,
        //         cards: []
        //     }]
        // });
    }
    else if (action.type === TOGGLE_NOTE) {
    //     let lists = state.lists.map((list, index) => {
    //         if (index !== action.listIndex) {
    //             return list;
    //         }
    //         return Object.assign({}, list, {
    //             cards: [...list.cards, {
    //                 text: action.text
    //             }]
    //         });
    //     });

    //     return Object.assign({}, state, {
    //         lists
    //     });

     }

    return state;
};

