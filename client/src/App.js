import React from 'react';
import Notecards from './components/Notecards';
import AddNote from './components/AddNote';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Note Hero</h1>
        </div>
        <h4 className="App-intro">
          These are your 'folder' Notes
        </h4>
      <AddNote 
           />
      
      <Notecards />
      </div>
    );
  }
}

export default App;

//rewrite imports, files, and components  capital first letter and capital letters for any additional words 
//---------------------> NoteCards  instead of Notecards // NoteText vs Notetext