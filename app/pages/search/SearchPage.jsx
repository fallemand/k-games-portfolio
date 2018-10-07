import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import queryString from 'query-string';
import Filter from '../../components/Filter';
import GameCard from '../../components/GameCard';
import Pagination from '../../components/Pagination';
import gamesService from '../../services/games.service';
import portfolioService from '../../services/portfolio.service';
import './search.scss';

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.onFilterChange = this.onFilterChange.bind(this);
    this.onPageChange = this.onPageChange.bind(this);
    this.onCardButtonPressed = this.onCardButtonPressed.bind(this);
    this.getListItems = this.getListItems.bind(this);
    this.getParamsFromUrl = this.getParamsFromUrl.bind(this);
    this.pageSize = 10;
    this.state = {
      games: [],
      portfolio: [],
      filter: '',
      sort: '',
      page: 1,
    };
  }

  componentWillMount() {
    const params = this.getParamsFromUrl();
    this.getListItems(
      this.completeSearchParams(params),
    );
  }

  onFilterChange(params) {
    this.getListItems(
      this.completeSearchParams({
        ...params,
        page: 1, // OnFilter, go back to page 1.
      }),
    );
  }

  onPageChange(page) {
    const params = this.completeSearchParams({ page });
    this.getListItems(params);
  }

  onCardButtonPressed(action, gameKey) {
    let portfolio;
    switch (action) {
      case 'add': portfolio = portfolioService.add(gameKey); break;
      case 'remove': portfolio = portfolioService.remove(gameKey); break;
      case 'play': portfolioService.addGame(gameKey); break;
      default: console.error('invalid action', action);
    }
    this.setState({
      portfolio,
    });
  }

  getListItems(params) {
    this.setState({
      loading: true,
    });
    const { total, games } = gamesService.getGames(params);
    this.setQueryParams(params);
    this.setState({
      ...params,
      games,
      total,
    });
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 2000);
  }

  getParamsFromUrl() {
    const { location } = this.props;
    const params = queryString.parse(location.search);
    return params;
  }

  setQueryParams(params) {
    const { location, history } = this.props;
    const queryParams = queryString.parse(location.search);
    Object.assign(queryParams, params);
    history.push({
      pathname: '/search',
      search: `?${queryString.stringify(queryParams)}`,
    });
  }

  completeSearchParams(params) {
    const { pageSize, state: { filter, sort, page } } = this;
    return {
      filter,
      sort,
      page,
      pageSize,
      ...params,
    };
  }

  render() {
    const { games, filter, sort, page, total, portfolio, loading } = this.state;
    return (
      <div className="search">
        <div className="search__actions">
          <Filter onChange={this.onFilterChange} filter={filter} sort={sort} />
        </div>
        <div
          className={classnames('search__list', { 'search__list--loading': loading })}
        >
          {games.map(game => (
            <GameCard
              game={game}
              onAction={this.onCardButtonPressed}
              actions={portfolio.includes(game.short) ? ['remove', 'play'] : ['add', 'play']}
            />
          ))}
        </div>
        <Pagination
          className="search__pagination"
          active={parseInt(page, 10)}
          total={total}
          show={this.pageSize}
          onChange={this.onPageChange}
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
