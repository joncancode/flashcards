//add new word
export const ADD_NOTE = 'ADD_NOTE';
export const addNote = ( word, definition, cardIndex ) => ({
    type: ADD_NOTE,
    word,
    definition,
    cardIndex
});

//click on the card 
export const TOGGLE_NOTE = 'TOGGLE_NOTE';
export const toggleNote = () => ({
    type: TOGGLE_NOTE
});


