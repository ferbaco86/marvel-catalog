import { INCREMENT_OFFSET } from '../actions/constants';

const initialState = {
  offset: 0,
};

const offsetReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_OFFSET:
      return {
        ...state,
        offset: state.offset + action.increase,
      };

    default:
      return state;
  }
};

export default offsetReducer;
