import {
  FETCH_DATA_PENDING, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR,
} from '../actions/constants';

const initialState = {
  pending: false,
  data: [],
  error: null,
};

const dataReducer = (state = initialState, action) => {
  const chars = state.data;
  switch (action.type) {
    case FETCH_DATA_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_DATA_SUCCESS:
      action.data.map(char => chars.push(char));
      return {
        ...state,
        pending: false,
        data: chars,
      };
    case FETCH_DATA_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default dataReducer;
