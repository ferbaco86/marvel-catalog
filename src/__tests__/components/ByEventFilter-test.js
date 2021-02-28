import { render, screen, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../reducers/index';
import ByEventFilter from '../../components/ByEventFilter';

const mockFunc = () => 'test';

describe('Rendering component', () => {
  it('creates a ByEventFilter component', () => {
    act(() => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ByEventFilter filter={mockFunc} />
          </Provider>
        </BrowserRouter>,
      );
    });
    screen.getByText('Spider-Verse');
  });
});

describe('Display', () => {
  it('renders correctly', () => {
    const snap = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <ByEventFilter filter={mockFunc} />
        </Provider>
      </BrowserRouter>,
    ).toJSON();
    expect(snap).toMatchSnapshot();
  });
});
