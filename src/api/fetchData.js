import { fetchDataPending, fetchDataSuccess, fetchDataError } from '../actions/index';

const fetchData = () => dispatch => {
  dispatch(fetchDataPending());
  fetch('https://exampleapi.com/products')
    .then(response => response.json())
    .then(response => {
      if (response.error) {
        throw (response.error);
      }
      dispatch(fetchDataSuccess(response.data));
    })
    .catch(error => {
      dispatch(fetchDataError(error));
    });
};

export default fetchData;
