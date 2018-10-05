import React from 'react';
import {
  HashRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import { render } from 'react-dom';

import './assets/images/logo.svg';
import './styles/_common.scss';

/**
 * Render SPA
 */
render((
  <Router>
    <Switch>
      <Route exact path="/" render={() => <div>Initial Page</div>} />
    </Switch>
  </Router>
), document.getElementById('root-app'));
