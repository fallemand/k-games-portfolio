import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './portfolio.scss';
import Button from '../../components/Button';
import Snackbar from '../../components/Snackbar';
import portfolioService from '../../services/portfolio.service';
import gamesService from '../../services/games.service';

class PortfolioPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleGameClick = this.handleGameClick.bind(this);
    this.removeGame = this.removeGame.bind(this);
    this.playGame = this.playGame.bind(this);
    this.state = {
      games: portfolioService.getGames(),
      snackbar: {
        message: '',
        show: false,
      },
    };
  }

  handleGameClick(event, gameId) {
    event.preventDefault();
    const { history } = this.props;
    history.push(`/games/${gameId}`);
  }

  removeGame(event, gameId) {
    event.stopPropagation();
    const games = portfolioService.remove(gameId);
    const snackbar = {
      message: 'The game has been removed from your portfolio!',
      show: true,
    };
    this.setState({
      snackbar,
      games,
    });
    // Hide snackbar after 3 seconds
    setTimeout(() => {
      snackbar.show = false;
      this.setState({ snackbar });
    }, 3000);
  }

  playGame(event, gameId) {
    event.stopPropagation();
    const games = portfolioService.remove(gameId);
    this.setState({
      games,
    });
  }

  render() {
    const { games, snackbar } = this.state;
    return (
      <div className="portfolio">
        <div className="portfolio__items">
          <h1 className="portfolio__title">Portfolio</h1>
          <ul className="portfolio__items-list">
            { games.map((game) => {
              const gameInfo = gamesService.getGame(game);
              return (
                <li className="portfolio__item">
                  <button
                    type="button"
                    className="portfolio__item-link"
                    onClick={evt => this.handleGameClick(evt, gameInfo.short)}
                  >
                    <img className="portfolio__item-img" src={gameInfo.images.iconM} alt={gameInfo.name} />
                    <h3 className="portfolio__item-name">{gameInfo.name}</h3>
                    <div className="portfolio__item-actions">
                      <Button
                        onClick={evt => this.removeGame(evt, gameInfo.short)}
                        color={Button.colors.DEFAULT}
                      >
                        Remove Portfolio
                      </Button>
                      <Button
                        onClick={() => this.playGame(gameInfo.short)}
                        color={Button.colors.BLUE}
                      >
                        Play
                      </Button>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
          {games.length === 0 && (
            <div className="portfolio__items-no-items">
              You have no games in your portfolio!
            </div>
          )}
        </div>
        <Snackbar message={snackbar.message} show={snackbar.show} />
      </div>
    );
  }
}

PortfolioPage.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(PortfolioPage);
