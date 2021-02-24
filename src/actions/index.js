import {
  FETCH_DATA_PENDING, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR, INCREMENT_OFFSET, FILTER_BY_NAME,
} from './constants';

export const fetchDataPending = () => ({
  type: FETCH_DATA_PENDING,
});

export const fetchDataSuccess = data => ({
  type: FETCH_DATA_SUCCESS,
  data,
});

export const fetchDataError = error => ({
  type: FETCH_DATA_ERROR,
  error,
});

export const incrementOffset = increase => ({
  type: INCREMENT_OFFSET,
  increase,
});

export const filterByName = (name, chars) => ({
  type: FILTER_BY_NAME,
  name,
  chars,
});
