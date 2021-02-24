import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import dataReducer from './data';
import offsetReducer from './offset';

const store = createStore(
  combineReducers({
    data: dataReducer,
    offset: offsetReducer,
  }),
  applyMiddleware(thunk),
);

export default store;
