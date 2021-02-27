import { render, screen, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../reducers/index';
import CharInfo from '../../components/CharInfo';

const character = {
  name: 'Spider-Man',
  description: 'Super Hero',
  image: 'www.mockurl.com',
  extension: 'jpg',
  url: 'www.mockurl2.com',
};

describe('Rendering component', () => {
  it('creates a CharInfo component', () => {
    act(() => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <CharInfo
              name={character.name}
              description={character.description}
              image={character.image}
              extension={character.extension}
              url={character.url}
            />
          </Provider>
        </BrowserRouter>,
      );
    });
    screen.getByText('Spider-Man');
  });
});

describe('Display', () => {
  it('renders correctly', () => {
    const snap = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <CharInfo
            name={character.name}
            description={character.description}
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
