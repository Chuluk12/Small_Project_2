import { combineReducers, createStore } from 'redux';
import todos from './todo/reducer';

const rootReducer = combineReducers({ todos });

const store = createStore(rootReducer);

export { store };
