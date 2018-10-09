import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './game.scss';
import portfolioService from '../../services/portfolio.service';
import gamesService from '../../services/games.service';
import Button from '../../components/Button';
import Snackbar from '../../components/Snackbar';

class GamePage extends React.Component {
  constructor(props) {
    super(props);
    const { match } = props;
    const { id } = match.params;
    this.game = gamesService.getGame(id);
    this.state = {
      inPortfolio: portfolioService.contains(id),
      snackbar: {},
    };
  }

  removeGame(gameId) {
    portfolioService.add(gameId);
    const snackbar = {
      message: 'The game has been removed from your portfolio!',
      show: true,
    };
    this.setState({
      inPortfolio: false,
      snackbar,
    });
    // Hide snackbar after 3 seconds
    setTimeout(() => {
      snackbar.show = false;
      this.setState({ snackbar });
    }, 3000);
  }

  addGame(gameId) {
    portfolioService.remove(gameId);
    const snackbar = {
      message: 'The game has been added to your portfolio!',
      show: true,
    };
    this.setState({
      inPortfolio: true,
      snackbar,
    });
    // Hide snackbar after 3 seconds
    setTimeout(() => {
      snackbar.show = false;
      this.setState({ snackbar });
    }, 3000);
  }

  render() {
    const { game } = this;
    const { inPortfolio, snackbar } = this.state;
    return (
      <div className="game">
        <div className="game__header">
          <h1 className="game__title">{game.name}</h1>
          { inPortfolio && (
            <Button className="game__button" onClick={() => this.removeGame(game.short)} color={Button.colors.DEFAULT}>
              Remove from Portfolio
            </Button>
          )}
          { !inPortfolio && (
            <Button className="game__button" onClick={() => this.addGame(game.short)} color={Button.colors.GREEN}>
              Add to Portfolio
            </Button>
          )}
        </div>
        <div className="game__play">
          <img className="game__play-background" src={game.images.screenshot} alt={game.name} />
          <div className="game__play-overlay" />
          <div className="game__play-icon">
            Lets Play
          </div>
        </div>
        <Snackbar message={snackbar.message} show={snackbar.show} />
      </div>
    );
  }
}

GamePage.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default withRouter(GamePage);
