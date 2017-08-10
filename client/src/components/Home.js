import React from 'react';
import './Home.css';
import AddNote from './AddNote'
import Notecards from './Notecards'
import {connect} from 'react-redux'
import {fetchNotes} from '../actions'

export class Home extends React.Component {
  
   componentDidMount() {
   console.log('props', this.props) //acts as soon as the component loads -- should see in the counsole and lest us know an ACTION is ready to be dispatched
   this.props.dispatch(fetchNotes())
 }

  render() {
    return (
      <div>
        <AddNote />

        <Notecards />
      </div>
    );
  }
}

export default connect()(Home);