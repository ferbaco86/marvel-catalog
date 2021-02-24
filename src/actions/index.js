import {
  FETCH_DATA_PENDING, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR, INCREMENT_OFFSET,
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
