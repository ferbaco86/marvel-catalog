import { render, screen, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../reducers/index';
import HeroCard from '../../components/HeroCard';

const character = {
  name: 'Blade',
  image: 'www.mockurl.com',
  extension: 'jpg',
  url: 'www.mockurl2.com',
};

describe('Rendering component', () => {
  it('creates a HeroCard component', () => {
    act(() => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <HeroCard
              name={character.name}
              image={character.image}
              extension={character.extension}
              url={character.url}
            />
          </Provider>
        </BrowserRouter>,
      );
    });
    screen.getByText('Blade');
  });
});

describe('Display', () => {
  it('renders correctly', () => {
    const snap = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <HeroCard
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
