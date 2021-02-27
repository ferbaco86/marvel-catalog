import {
  FILTER_BY_EVENT,
  FILTER_BY_NAME,
} from '../../actions/constants';
import filterReducer from '../../reducers/filter';

describe('Filter Reducer', () => {
  it('Return the default state', () => {
    const mockState = {
      filteredChars: [],
    };
    const mockAction = { type: null };
    const state = filterReducer(mockState, mockAction);
    expect(state).toStrictEqual({ filteredChars: [] });
  });

  it('Set filtered elements by name in the state', () => {
    const mockState = {
      filteredChars: [],
    };
    const mockAction = {
      type: FILTER_BY_NAME,
      name: 'blade',
      chars: [{ name: 'Spider-Man' }, { name: 'Blade' }],
    };
    const state = filterReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      filteredChars: [{ name: 'Blade' }],
    });
  });

  it('Set filtered elements by event in the state', () => {
    const mockState = {
      filteredChars: [],
    };
    const mockAction = {
      type: FILTER_BY_EVENT,
      event: 'Secret Invasion',
      chars: [
        {
          id: 1011334,
          name: '3-D Man',
          events: {
            available: 1,
            collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011334/events',
            items: [
              {
                resourceURI: 'http://gateway.marvel.com/v1/public/events/269',
                name: 'Secret Invasion',
              },
            ],
            returned: 1,
          },
        },
      ],
    };
    const state = filterReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      filteredChars: [{
        id: 1011334,
        name: '3-D Man',
        events: {
          available: 1,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011334/events',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/269',
              name: 'Secret Invasion',
            },
          ],
          returned: 1,
        },
      }],
    });
  });
});
