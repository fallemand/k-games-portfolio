import React from 'react';
import {
  HashRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import { render } from 'react-dom';
import SearchPage from './pages/search/SearchPage';

import './assets/images/logo.svg';
import './styles/_common.scss';

/**
 * Render SPA
 */
render((
  <Router>
    <Switch>
      <Route exact path="/" render={() => <div>Initial Page</div>} />
      <Route exact path="/search" component={SearchPage} />
    </Switch>
  </Router>
), document.getElementById('root-app'));
