import {
  INCREMENT_OFFSET,
} from '../../actions/constants';
import offsetReducer from '../../reducers/offset';

describe('Offset Reducer', () => {
  it('Return the default state', () => {
    const mockState = {
      offset: 0,
    };
    const mockAction = { type: null };
    const state = offsetReducer(mockState, mockAction);
    expect(state).toStrictEqual({ offset: 0 });
  });

  it('Set increased offset by 10 in the state', () => {
    const mockState = {
      offset: 0,
    };
    const mockAction = {
      type: INCREMENT_OFFSET,
      increase: 10,
    };
    const state = offsetReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      offset: 10,
    });
  });
});
