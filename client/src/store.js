import {createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger';

import {noteHeroReducer} from './reducers';

const middlewares = [createLogger()];

export default createStore(noteHeroReducer, undefined, applyMiddleware(...middlewares));

