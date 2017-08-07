//add new word
export const ADD_NOTE = 'ADD_NOTE';
export const addNote = word => ({
    type: ADD_NOTE,
    word
});

//click on the card 
export const TOGGLE_NOTE = 'TOGGLE_NOTE';
export const toggleNote = () => ({
    type: TOGGLE_NOTE
});

//add def and example (maybe picture?) 
export const ADD_DEFINITION = 'ADD_DEFINITION';
export const addDefinition = (definition, example) => ({
    type: ADD_DEFINITION,
    definition,
    example
});

