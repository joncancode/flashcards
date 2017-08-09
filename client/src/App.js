import React from 'react';
import Notecards from './components/Notecards';
import AddNote from './components/AddNote';
import './App.css';
import {connect} from 'react-redux'
import {fetchNotes} from './actions'

class App extends React.Component {
 
 componentDidMount() {
   console.log('This shit works') //acts as soon as the component loads -- should see in the counsole and lest us know an ACTION is ready to be dispatched
   this.props.dispatch(fetchNotes())
 }
 
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Note Hero</h1>
        </div>
        <h4 className="App-intro">
          You Got This.
        </h4>
      <AddNote />
      
      <Notecards />
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   cards: 
//   // [
//     // {
//     //   words: this.state.words,                        // how to get the key and properties to work 
//     //   definition: state.noteHereReducer.definition,
//     //   id: state.noteHereReducer.id
//     // }
//   // ]
// })

export default connect()(App);

//rewrite imports, files, and components  capital first letter and capital letters for any additional words 
//---------------------> NoteCards  instead of Notecards // NoteText vs Notetext