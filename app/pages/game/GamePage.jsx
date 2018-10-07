import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './game.scss';
import portfolioService from '../../services/portfolio.service';
import gamesService from '../../services/games.service';

class GamePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { match } = this.props;
    const { id } = match.params;
    const game = gamesService.getGame(id);
    return (
      <div className="game">
        <h1 className="game__title">{game.name}</h1>
      </div>
    );
  }
}

GamePage.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(GamePage);
