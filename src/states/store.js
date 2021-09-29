import { combineReducers, createStore, compose } from 'redux';
import shop from './commerce/reducer';

const rootReducer = combineReducers({ shop });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const mdl = composeEnhancers();
const store = createStore(rootReducer, mdl);

export { store };
