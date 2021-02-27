import { render, screen, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../reducers/index';
import CharDetail from '../../containers/CharDetail';

describe('Rendering component', () => {
  it('creates a CharDetail component', () => {
    act(() => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <CharDetail match={{ params: { id: '2' } }} />
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
          <CharDetail match={{ params: { id: '2' } }}/>
        </Provider>
      </BrowserRouter>,
    ).toJSON();
    expect(snap).toMatchSnapshot();
  });
});
