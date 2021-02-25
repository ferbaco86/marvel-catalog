import { fetchDetailPending, fetchDetailSuccess, fetchDetailError } from '../actions/index';
// import store from '../reducers/index';

const config = {
  mode: 'cors',
  method: 'GET',
};

const fetchCharDetail = () => dispatch => {
  // let charID = 0;
  // if (store.getState().detail.id) { charID = store.getState().detail.id; }
  const apiUrl = '';
  dispatch(fetchDetailPending());
  fetch(apiUrl, config)
    .then(response => response.json())
    .then(response => {
      if (response.code !== 200) {
        throw (response.status);
      }
      dispatch(fetchDetailSuccess(response.data.results));
    })
    .catch(error => {
      dispatch(fetchDetailError(error));
    });
};

export default fetchCharDetail;
