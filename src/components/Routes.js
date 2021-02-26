import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import CharDetail from '../containers/CharDetail';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/character/:id" component={CharDetail} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
