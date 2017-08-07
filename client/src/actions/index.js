//add new word
export const ADD_NOTE = 'ADD_NOTE';
export const addNote = ( word, definition ) => ({
    type: ADD_NOTE,
    word,
    definition
});

//click on the card 
export const TOGGLE_NOTE = 'TOGGLE_NOTE';
export const toggleNote = () => ({
    type: TOGGLE_NOTE
});


