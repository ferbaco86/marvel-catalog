import { combineReducers } from 'redux';
import dataReducer from './data';
import offsetReducer from './offset';
import filterReducer from './filter';
import detailReducer from './detail';

const rootReducer = combineReducers({
  data: dataReducer,
  offset: offsetReducer,
  filter: filterReducer,
  detail: detailReducer,
});

export default rootReducer;
