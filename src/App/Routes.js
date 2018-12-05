import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import NotFoundPage from '../pages/NotFoundPage';
import OtherPage from '../pages/OtherPage';

const Routes = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/other" component={OtherPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </HashRouter>
);

export default Routes;
