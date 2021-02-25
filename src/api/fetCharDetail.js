import {
  fetchDetailPending, fetchDetailSuccess, fetchDetailError, fetchSeries, fetchEvents,
} from '../actions/index';
import store from '../reducers/index';

const config = {
  mode: 'cors',
  method: 'GET',
};

const API_KEY = process.env.REACT_APP_API_KEY;

const fetchCharDetail = () => dispatch => {
  let charID = 0;
  if (store.getState().detail.id) { charID = store.getState().detail.id; }
  const apiUrl = `https://gateway.marvel.com:443/v1/public/characters/${charID}?apikey=${API_KEY}}`;
  const seriesApiUrl = `https://gateway.marvel.com:443/v1/public/characters/${charID}/series?orderBy=-startYear&limit=5&apikey=${API_KEY}`;
  const eventsApiUrl = `https://gateway.marvel.com:443/v1/public/characters/${charID}/events?orderBy=-startDate&limit=5&apikey=${API_KEY}`;

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

  dispatch(fetchDetailPending());
  fetch(seriesApiUrl, config)
    .then(response => response.json())
    .then(response => {
      if (response.code !== 200) {
        throw (response.status);
      }
      dispatch(fetchSeries(response.data.results));
    })
    .catch(error => {
      dispatch(fetchDetailError(error));
    });

  dispatch(fetchDetailPending());
  fetch(eventsApiUrl, config)
    .then(response => response.json())
    .then(response => {
      if (response.code !== 200) {
        throw (response.status);
      }
      dispatch(fetchEvents(response.data.results));
    })
    .catch(error => {
      dispatch(fetchDetailError(error));
    });
};

export default fetchCharDetail;
