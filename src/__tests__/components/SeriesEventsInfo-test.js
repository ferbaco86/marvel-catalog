import { render, screen, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../reducers/index';
import SeriesEventsInfo from '../../components/SeriesEventsInfo';

describe('Rendering component', () => {
  it('creates a SeriesEventsInfo component', () => {
    act(() => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <SeriesEventsInfo title="Test Title" />
          </Provider>
        </BrowserRouter>,
      );
    });
    screen.getByText('Test Title');
  });
});

describe('Display', () => {
  it('renders correctly', () => {
    const snap = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <SeriesEventsInfo title="Test Title" />
        </Provider>
      </BrowserRouter>,
    ).toJSON();
    expect(snap).toMatchSnapshot();
  });
});
