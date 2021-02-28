import {
  FETCH_DETAIL_PENDING, FETCH_DETAIL_SUCCESS, FETCH_DETAIL_ERROR, FETCH_CHAR_ID,
  FETCH_SERIES, FETCH_EVENTS,
} from '../actions/constants';

const initialState = {
  pending: false,
  detail: [],
  error: null,
  id: null,
  series: [],
  events: [],
};

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DETAIL_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_DETAIL_SUCCESS:
      return {
        ...state,
        pending: false,
        detail: action.detail,
      };
    case FETCH_DETAIL_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case FETCH_CHAR_ID:
      return {
        ...state,
        pending: false,
        id: action.id,
      };
    case FETCH_SERIES:
      return {
        ...state,
        pending: false,
        series: action.series,
      };
    case FETCH_EVENTS:
      return {
        ...state,
        pending: false,
        events: action.events,
      };
    default:
      return state;
  }
};

export default detailReducer;
