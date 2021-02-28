import { render, screen, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../reducers/index';
import ErrorMessage from '../../components/ErrorMessage';

describe('Rendering component', () => {
  it('creates a ErrorMessage component', () => {
    act(() => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ErrorMessage message="Error!" />
          </Provider>
        </BrowserRouter>,
      );
    });
    screen.getByText('Error!');
  });
});

describe('Display', () => {
  it('renders correctly', () => {
    const snap = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <ErrorMessage message="Error!" />
        </Provider>
      </BrowserRouter>,
    ).toJSON();
    expect(snap).toMatchSnapshot();
  });
});
