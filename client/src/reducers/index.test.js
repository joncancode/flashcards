import { noteHeroReducer } from './index';
import { addNote, setNotes } from '../actions/';

describe('noteHeroReducer', () => {
  it('should set the initial state when nothing is passed in', () => {
    const newState = noteHeroReducer(undefined, { type: 'BANANA' });
    expect(newState.cards).toEqual([]);
  });

  it('Should return the new state after add action', () => {
    const initialState = {
      cards: []
    };

    // const newState = noteHeroReducer(initialState, action);
    // expect(newState).toEqual(
    //   Object.assign({}, initialState, {
    //     cards: [{word: "",
    // definition: ""}]
    //      {cards: [action.note}]
    //   })
    // );


  });

});
