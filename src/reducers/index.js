import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import dataReducer from './data';

const store = createStore(
  combineReducers({
    data: dataReducer,
  }),
  applyMiddleware(thunk),
);

export default store;
