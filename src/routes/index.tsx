import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../views/pages/home/home.component';
import RepositoryDetails from '../views/pages/repository-details/repository-details.component';
import MyRepositories from '../views/pages/my-repositories/my-repositories.component';
import MyCollections from '../views/pages/my-collections/my-collections.component';
import SignInAndSignUpPage from '../views/pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/repositories/:fullName+">
      <RepositoryDetails />
    </Route>
    <Route path="/my">
      <MyRepositories />
    </Route>
    <Route path="/collections">
      <MyCollections />
    </Route>
    <Route path="/signin">
      <SignInAndSignUpPage />
    </Route>
    <Route path="/" exact>
      <Home />
    </Route>
  </Switch>
);

export default Routes;
