import {createStore} from 'redux'

import {noteHeroReducer} from './reducers';

export default createStore(noteHeroReducer);

