import {
  FETCH_DETAIL_PENDING, FETCH_DETAIL_SUCCESS, FETCH_DETAIL_ERROR, FETCH_CHAR_ID,
} from '../actions/constants';

const initialState = {
  pending: false,
  detail: [],
  error: null,
  id: null,
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
    default:
      return state;
  }
};

export default detailReducer;
