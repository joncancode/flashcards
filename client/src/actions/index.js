//add new wor

export const ADD_NOTE = 'ADD_NOTE';
export const addNote = (note) => ({
    type: ADD_NOTE,
    note
});

//click on the card 
export const TOGGLE_NOTE = 'TOGGLE_NOTE';
export const toggleNote = () => ({
    type: TOGGLE_NOTE
});


