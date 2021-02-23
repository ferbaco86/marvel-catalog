import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Catalog from '../containers/Catalog';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/catalog" component={Catalog} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
