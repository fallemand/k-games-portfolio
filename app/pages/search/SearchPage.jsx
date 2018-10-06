import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import queryString from 'query-string';
import Filter from '../../components/Filter';
import GameCard from '../../components/GameCard';
import Pagination from '../../components/Pagination';
import gamesService from '../../services/games.service';
import './search.scss';

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.games = [];
  }

  componentWillMount() {
    this.games = gamesService.getGamesWithImages();
  }

  render() {
    const { games } = this;
    const { history } = this.props;
    return (
      <div className="games">
        <div className="games__actions">
          Actions!
        </div>
        <div className={classnames(
          'games__list',
          { 'games__list--loading': false },
        )}
        >
          {games.map(game => <GameCard game={game} />)}
        </div>
        <Pagination
          className="games__pagination"
          active={1}
          total={games.length}
          show={10}
          onChange={() => {}}
        />
      </div>
    );
  }
}

SearchPage.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(SearchPage);
