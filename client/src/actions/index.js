//adding notes
export const ADD_NOTE = 'ADD_NOTE';
export const addNote = (note) => ({
    type: ADD_NOTE,
    note
});

//setting all of the notes 
export const SET_NOTES = 'SET_NOTES';
export const setNotes = (allNotes) => ({
    type: SET_NOTES,
    allNotes
});

//click on the card 
export const CHECK_OFF = 'CHECK_OFF';
export const checkOff = (id) => ({
    type: CHECK_OFF,
    id
});

export const DELETE_NOTE = 'DELETE_OFF';
export const deleteNote = (id) => ({
    type: DELETE_NOTE,
    id
});



//async action

//async action -- get
export const fetchNotes = () =>{
    return (dispatch) => { //we are returning another function for to us thunk so we can connect to the ajax call 
      fetch('/api/notes' )  //redux-thunk gives us access to the dispatch -- from our local host (connecting to the server)
  .then(response =>  response.json())
  .then(json => dispatch(setNotes(json)))  
//   .then(json => console.log(json)) //this is where you pass in a dispatched action so that you can recieve the information -- same as | console.log('parsed json', json)
  .catch(ex => console.log('parsing failed', ex))                     
    }
}

// asyn action -- post 
export const postNotes = (newNote) =>{
    return (dispatch) => { //we are returning another function for to us thunk so we can connect to the ajax call 
      fetch('/api/notes' , { 
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({newNote}) 
        }) //redux-thunk gives us access to the dispatch -- from our local host (connecting to the server)
  .then(response =>  response.json())
  .then(json => {
    dispatch(addNote(json))
    console.log('json', json)
  })
  // .then(json => console.log(json))   //this is where you pass in a dispatched action so that you can recieve the information -- same as | console.log('parsed json', json)
  .catch(ex => console.log('parsing failed', ex))                     
    }
}

// // asyn action -- put 
// export const postNotes = (newNote) =>{
//     return (dispatch) => { //we are returning another function for to us thunk so we can connect to the ajax call 
//       fetch('http://localhost:8080/api/notes' , { 
//         method: 'POST',
//         data: JSON.stringify({newNote}) 
//         }) //redux-thunk gives us access to the dispatch -- from our local host (connecting to the server)
//   .then(response =>  response.json())
//   .then(json => dispatch(addNote(json)))   //this is where you pass in a dispatched action so that you can recieve the information -- same as | console.log('parsed json', json)
//   .catch(ex => console.log('parsing failed', ex))                     
//     }
// }

// asyn action -- delete 
export const isthistheone = (newNote) =>{
    return (dispatch) => { //we are returning another function for to us thunk so we can connect to the ajax call 
      fetch('http://localhost:8080/api/notes' , { 
        method: 'DELETE',
        body: JSON.stringify({newNote}) 
        }) //redux-thunk gives us access to the dispatch -- from our local host (connecting to the server)
  .then(response =>  response.json())
  .then(json => dispatch(deleteNote(json)))   //this is where you pass in a dispatched action so that you can recieve the information -- same as | console.log('parsed json', json)
  .catch(ex => console.log('parsing failed', ex))                     
    }
}



//async action needs to be created
// import redux Thunk 
// pass the action as an argument 
// server will get it throught he req.body

//server will return a response 