//async action -- get
export const fetchNotes = () =>{
    return (dispatch) => { //we are returning another function for to us thunk so we can connect to the ajax call 
      fetch('http://localhost:8080/api/notes' )  //redux-thunk gives us access to the dispatch -- from our local host (connecting to the server)
  .then(response =>  response.json())
  .then(json => dispatch(addNote(json)))   //this is where you pass in a dispatched action so that you can recieve the information -- same as | console.log('parsed json', json)
  .catch(ex => console.log('parsing failed', ex))                     
    }
}

//asyn action -- post 
export const postNotes = () =>{
    return (dispatch) => { //we are returning another function for to us thunk so we can connect to the ajax call 
      fetch('http://localhost:8080/api/notes' , 
        method: 'POST',
        data: JSON.stringify(newNote))  //redux-thunk gives us access to the dispatch -- from our local host (connecting to the server)
  .then(response =>  response.json())
  .then(json => dispatch(addNote(json)))   //this is where you pass in a dispatched action so that you can recieve the information -- same as | console.log('parsed json', json)
  .catch(ex => console.log('parsing failed', ex))                     
    }
}
//add new words

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