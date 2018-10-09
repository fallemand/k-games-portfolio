import React from 'react';
import {
  HashRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import { render } from 'react-dom';
import SearchPage from './pages/search/SearchPage';
import PortfolioPage from './pages/portfolio/PortfolioPage';
import GamePage from './pages/game/GamePage';
import NotFoundPage from './pages/not-found/NotFoundPage';
import './assets/scripts/headerActions';
import './assets/images/logo.svg';
import './styles/_common.scss';

/**
 * Render SPA
 */
render((
  <Router>
    <Switch>
      <Route exact path="/search" component={SearchPage} />
      <Route exact path="/portfolio" component={PortfolioPage} />
      <Route exact path="/games/:id" component={GamePage} />
      <Route exact path="/" render={() => <Redirect to="/search" />} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
), document.getElementById('root-app'));
