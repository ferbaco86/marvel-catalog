import { FETCH_DATA_PENDING, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } from './constants';

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
