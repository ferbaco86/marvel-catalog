import { fetchDataPending, fetchDataSuccess, fetchDataError } from '../actions/index';
import store from '../reducers/index';

const config = {
  mode: 'cors',
  method: 'GET',
};
const API_KEY = process.env.REACT_APP_API_KEY;

const fetchData = () => dispatch => {
  const { offset } = store.getState().offset;
  const apiUrl = `https://gateway.marvel.com:443/v1/public/characters?orderBy=name&limit=100&offset=${offset}&apikey=${API_KEY}`;
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
