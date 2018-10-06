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
    this.onFilterChange = this.onFilterChange.bind(this);
    this.onPageChange = this.onPageChange.bind(this);
    this.getListItems = this.getListItems.bind(this);
    this.getParamsFromUrl = this.getParamsFromUrl.bind(this);
    this.pageSize = 10;
    this.state = {
      games: [],
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

  getListItems(params) {
    const { total, games } = gamesService.getGames(params);
    this.setQueryParams(params);
    this.setState({
      ...params,
      games,
      total,
    });
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
    const { games, filter, sort, page, total } = this.state;
    const { history } = this.props;
    return (
      <div className="games">
        <div className="games__actions">
          <Filter onChange={this.onFilterChange} filter={filter} sort={sort} />
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
