import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../views/pages/home/home.component';
import RepositoryDetails from '../views/pages/repository-details/repository-details.component';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/repo">
      <RepositoryDetails />
    </Route>
    <Route path="/" exact>
      <Home />
    </Route>
  </Switch>
);

export default Routes;
