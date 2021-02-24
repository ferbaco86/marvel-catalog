import { FILTER_BY_NAME } from '../actions/constants';

const initialState = {
  filteredChars: [],
};

const filterReducer = (state = initialState, action) => {
  const charData = action.chars;
  const value = action.name;
  let filtered;
  switch (action.type) {
    case FILTER_BY_NAME:
      if (value) {
        filtered = charData.filter(char => char.name.toLowerCase().includes(value));
      } else {
        filtered = [];
      }
      return {
        ...state,
        filteredChars: filtered,
      };
    default: return state;
  }
};

export default filterReducer;
