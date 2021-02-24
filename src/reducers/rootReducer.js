import { combineReducers } from 'redux';
import dataReducer from './data';
import offsetReducer from './offset';
import filterReducer from './filter';

const rootReducer = combineReducers({
  data: dataReducer,
  offset: offsetReducer,
  filter: filterReducer,
});

export default rootReducer;
