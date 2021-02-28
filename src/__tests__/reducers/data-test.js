import {
  FETCH_DATA_ERROR,
  FETCH_DATA_PENDING,
  FETCH_DATA_SUCCESS,
} from '../../actions/constants';
import dataReducer from '../../reducers/data';

describe('Data Reducer', () => {
  it('Return the default state', () => {
    const mockState = {
      pending: false,
      data: [],
      error: null,
    };
    const mockAction = { type: null };
    const state = dataReducer(mockState, mockAction);
    expect(state).toStrictEqual({ pending: false, data: [], error: null });
  });

  it('Set error in the state', () => {
    const mockState = {
      pending: false,
      data: [],
      error: null,
    };
    const mockAction = { type: FETCH_DATA_ERROR, error: 'Test error' };
    const state = dataReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      pending: false,
      data: [],
      error: 'Test error',
    });
  });

  it('Set characters data in the state', () => {
    const mockState = {
      pending: false,
      data: [],
      error: null,
    };
    const mockAction = {
      type: FETCH_DATA_SUCCESS,
      data: [{
        name: 'Spider-man',
        description: 'Webcrawler',
      }],
    };
    const state = dataReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      pending: false,
      data: [{
        name: 'Spider-man',
        description: 'Webcrawler',
      }],
      error: null,
    });
  });

  it('Set pending true in the state', () => {
    const mockState = {
      pending: true,
      data: [],
      error: null,
    };
    const mockAction = { type: FETCH_DATA_PENDING };
    const state = dataReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      pending: true,
      data: [],
      error: null,
    });
  });
});
