import React from 'react';
import './index.css';
import { Provider } from 'react-redux';
import Routes from './components/Routes';
import store from './reducers/index';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container); 

root.render(
    <Provider store={store}>
      <Routes />
    </Provider>,
);
