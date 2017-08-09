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


//async action needs to be created
// import redux Thunk 
// pass the action as an argument 
// server will get it throught he req.body

//server will return a response 