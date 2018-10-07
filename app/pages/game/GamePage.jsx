import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './game.scss';
import portfolioService from '../../services/portfolio.service';
import gamesService from '../../services/games.service';

class GamePage extends React.Component {
  constructor(props) {
    super(props);
    const { match } = props;
    const { id } = match.params;
    this.game = gamesService.getGame(id);
  }

  render() {
    const { game } = this;
    return (
      <div className="game">
        <div className="game__header">
          <h1 className="game__title">{game.name}</h1>
        </div>
        <div className="game__play">
          <img className="game__play-background" src={game.images.screenshot} alt={game.name} />
          <div className="game__play-overlay" />
          <div className="game__play-icon">
            Lets Play
          </div>
        </div>
      </div>
    );
  }
}

GamePage.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default withRouter(GamePage);
