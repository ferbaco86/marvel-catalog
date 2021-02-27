import { FILTER_BY_EVENT, FILTER_BY_NAME } from '../actions/constants';

const initialState = {
  filteredChars: [],
};

const filterReducer = (state = initialState, action) => {
  const charData = action.chars;
  let value = '';
  let filtered;
  switch (action.type) {
    case FILTER_BY_NAME:
      value = action.name.toLowerCase();
      if (value) {
        filtered = charData.filter(char => char.name.toLowerCase().includes(value));
      } else {
        filtered = [];
      }
      return {
        ...state,
        filteredChars: filtered,
      };
    case FILTER_BY_EVENT:
      value = action.event;
      if (value) {
        filtered = charData.filter(char => char.events.items.map(
          event => event.name,
        ).includes(value));
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
