import { render, screen, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../reducers/index';
import SeriesEventsCard from '../../components/SeriesEventsCard';

const character = {
  name: 'Peter Parker',
  image: 'www.mockurl.com',
  extension: 'jpg',
  url: 'www.mockurl2.com',
};

describe('Rendering component', () => {
  it('creates a SeriesEventsCard component', () => {
    act(() => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <SeriesEventsCard
              name={character.name}
              image={character.image}
              extension={character.extension}
              url={character.url}
            />
          </Provider>
        </BrowserRouter>,
      );
    });
    screen.getByText('Peter Parker');
  });
});

describe('Display', () => {
  it('renders correctly', () => {
    const snap = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <SeriesEventsCard
            name={character.name}
            image={character.image}
            extension={character.extension}
            url={character.url}
          />
        </Provider>
      </BrowserRouter>,
    ).toJSON();
    expect(snap).toMatchSnapshot();
  });
});
