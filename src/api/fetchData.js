import { fetchDataPending, fetchDataSuccess, fetchDataError } from '../actions/index';
// import store from '../reducers/index';

const config = {
  mode: 'cors',
  method: 'GET',
};

const fetchData = () => dispatch => {
  // const { offset } = store.getState().offset;
  const apiUrl = '';
  dispatch(fetchDataPending());
  fetch(apiUrl, config)
    .then(response => response.json())
    .then(response => {
      if (response.code !== 200) {
        throw (response.status);
      }
      dispatch(fetchDataSuccess(response.data.results));
    })
    .catch(error => {
      dispatch(fetchDataError(error));
    });
};

export default fetchData;
