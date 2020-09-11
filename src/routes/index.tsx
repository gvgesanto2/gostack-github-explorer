import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ExplorerPage from '../views/containers/explorer/explorer.container';
// import RepositoryDetailsPage from '../views/pages/repository-details/repository-details.component';
import MyRepositories from '../views/pages/my-repositories/my-repositories.component';
import MyCollections from '../views/pages/my-collections/my-collections.component';
import SignInAndSignUpPage from '../views/pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import RepositoryDetailsPage from '../views/containers/explorer/explorer-repo-details.container';

const Routes: React.FC = () => {
  console.log('@@Routes/rendered');
  return (
    <Switch>
      <Route
        path="/repositories/:fullName+"
        component={RepositoryDetailsPage}
      />
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
        <ExplorerPage />
      </Route>
    </Switch>
  );
};

export default Routes;
