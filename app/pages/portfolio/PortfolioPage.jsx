import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './portfolio.scss';
import portfolioService from '../../services/portfolio.service';
import gamesService from '../../services/games.service';

class PortfolioPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: portfolioService.getGames(),
    };
  }

  render() {
    const { games } = this.state;
    return (
      <div className="portfolio">
        <h1 className="portfolio__title"> Portfolio </h1>
        <div className="portfolio__items">
          <ul className="portfolio__items-list">
            { games.map((game) => {
              const gameInfo = gamesService.getGame(game);
              return (
                <li className="portfolio__item">
                  <img className="portfolio__item-img" src={gameInfo.images.iconM} alt={gameInfo.name} />
                  <h3 className="portfolio__item-name">{gameInfo.name}</h3>
                  <div className="portfolio__item-actions">
                    <button type="button" className="game-card__button game-card__button--remove">
                      Remove from Portfolio
                    </button>
                    <button type="button" className="game-card__button game-card__button--play">
                      Play
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

PortfolioPage.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(PortfolioPage);
