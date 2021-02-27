import { render, screen, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../reducers/index';
import Catalog from '../../containers/Catalog';

describe('Rendering component', () => {
  it('creates a Catalog component', () => {
    act(() => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Catalog />
          </Provider>
        </BrowserRouter>,
      );
    });
    screen.getByText('LOADING');
  });
});

describe('Display', () => {
  it('renders correctly', () => {
    const snap = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <Catalog />
        </Provider>
      </BrowserRouter>,
    ).toJSON();
    expect(snap).toMatchSnapshot();
  });
});
