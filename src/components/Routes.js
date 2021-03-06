import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Catalog from '../containers/Catalog';
import CharDetail from '../containers/CharDetail';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Catalog} />
      <Route exact path="/character/:id" component={CharDetail} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
