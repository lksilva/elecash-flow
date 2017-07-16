/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import RegisterPage from './containers/RegisterPage';
import BoxBookPage from './containers/BoxBookPage';
import BusinessList from './containers/BusinessListPage';

export default () => (
  <App>
    <Switch>
      <Route path="/register" component={RegisterPage} />
      <Route path="/boxBook" component={BoxBookPage} />
      <Route path="/businessList" component={BusinessList} />
      <Route path="/" component={HomePage} />
    </Switch>
  </App>
);
