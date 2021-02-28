import {
  FETCH_DETAIL_ERROR,
  FETCH_DETAIL_PENDING,
  FETCH_DETAIL_SUCCESS,
  FETCH_CHAR_ID,
  FETCH_SERIES,
  FETCH_EVENTS,
} from '../../actions/constants';
import detailReducer from '../../reducers/detail';

describe('Detail Reducer', () => {
  it('Return the default state', () => {
    const mockState = {
      pending: false,
      detail: [],
      error: null,
      id: null,
      series: [],
      events: [],
    };
    const mockAction = { type: null };
    const state = detailReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      pending: false,
      detail: [],
      error: null,
      id: null,
      series: [],
      events: [],
    });
  });

  it('Set error in the state', () => {
    const mockState = {
      pending: false,
      detail: [],
      error: null,
      id: null,
      series: [],
      events: [],
    };
    const mockAction = { type: FETCH_DETAIL_ERROR, error: 'Test error' };
    const state = detailReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      pending: false,
      detail: [],
      error: 'Test error',
      id: null,
      series: [],
      events: [],
    });
  });

  it('Set characters details in the state', () => {
    const mockState = {
      pending: false,
      detail: [],
      error: null,
      id: null,
      series: [],
      events: [],
    };
    const mockAction = {
      type: FETCH_DETAIL_SUCCESS,
      detail: [{
        name: 'Spider-man',
        description: 'Webcrawler',
      }],
    };
    const state = detailReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      pending: false,
      detail: [{
        name: 'Spider-man',
        description: 'Webcrawler',
      }],
      error: null,
      id: null,
      series: [],
      events: [],
    });
  });

  it('Set pending true in the state', () => {
    const mockState = {
      pending: true,
      detail: [],
      error: null,
      id: null,
      series: [],
      events: [],
    };
    const mockAction = { type: FETCH_DETAIL_PENDING };
    const state = detailReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      pending: true,
      detail: [],
      error: null,
      id: null,
      series: [],
      events: [],
    });
  });

  it('Set char id in the state', () => {
    const mockState = {
      pending: false,
      detail: [],
      error: null,
      id: null,
      series: [],
      events: [],
    };
    const mockAction = {
      type: FETCH_CHAR_ID,
      id: 2,
    };
    const state = detailReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      pending: false,
      detail: [],
      error: null,
      id: 2,
      series: [],
      events: [],
    });
  });

  it('Set series in the state', () => {
    const mockState = {
      pending: false,
      detail: [],
      error: null,
      id: null,
      series: [],
      events: [],
    };
    const mockAction = {
      type: FETCH_SERIES,
      series: [{
        title: 'Uncanny Avengers',
      }],
    };
    const state = detailReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      pending: false,
      detail: [],
      error: null,
      id: null,
      series: [{
        title: 'Uncanny Avengers',
      }],
      events: [],
    });
  });
  it('Set events in the state', () => {
    const mockState = {
      pending: false,
      detail: [],
      error: null,
      id: null,
      series: [],
      events: [],
    };
    const mockAction = {
      type: FETCH_EVENTS,
      events: [{
        title: 'Spider-Verse',
      }],
    };
    const state = detailReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      pending: false,
      detail: [],
      error: null,
      id: null,
      series: [],
      events: [{
        title: 'Spider-Verse',
      }],
    });
  });
});
