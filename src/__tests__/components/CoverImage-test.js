import { render, screen, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../reducers/index';
import CoverImage from '../../components/CoverImage';

const character = {
  name: 'Doctor Strange',
  url: 'www.mockurl2.com',
  subtitle: 'Multiverse Madness',
};

describe('Rendering component', () => {
  it('creates a CoverImage component', () => {
    act(() => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <CoverImage
              name={character.name}
              imageURL={character.url}
              subtitle={character.subtitle}
            />
          </Provider>
        </BrowserRouter>,
      );
    });
    screen.getByText('Multiverse Madness');
  });
});

describe('Display', () => {
  it('renders correctly', () => {
    const snap = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <CoverImage
            name={character.name}
            imageURL={character.url}
            subtitle={character.subtitle}
          />
        </Provider>
      </BrowserRouter>,
    ).toJSON();
    expect(snap).toMatchSnapshot();
  });
});
