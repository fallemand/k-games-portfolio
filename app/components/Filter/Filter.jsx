import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Dropdown from '../Dropdown';
import './_filter.scss';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.handleSortChange = this.handleSortChange.bind(this);
    this.handleRandomize = this.handleRandomize.bind(this);
    this.handleQueryChange = this.handleQueryChange.bind(this);
  }

  handleSortChange(value) {
    const { onChange, filter } = this.props;
    onChange({ sort: value, filter });
  }

  handleRandomize() {
    this.handleSortChange(Filter.sort.RANDOM);
  }

  handleQueryChange(event) {
    const { value } = event.target;
    const { onChange, sort } = this.props;
    onChange({ filter: value, sort });
  }

  render() {
    const { className, filter, sort } = this.props;
    const sortOrderFields = Object.entries(Filter.sort).map(
      ([key, value]) => ({ label: value, value }),
    );
    return (
      <form className={classnames(className, 'filter')}>
        <fieldset className="filter__fieldset">
          <legend className="filter__legend">Name</legend>
          <input
            name="filter"
            className="filter__field"
            placeholder="Game name"
            type="text"
            value={filter}
            onChange={this.handleQueryChange}
          />
        </fieldset>
        <fieldset className="filter__fieldset">
          <legend className="filter__legend">Sort Order</legend>
          <Dropdown
            name="sort"
            title="Sort"
            className="filter__field"
            value={sort}
            options={sortOrderFields}
            onChange={this.handleSortChange}
          />
        </fieldset>
        <fieldset className="filter__fieldset">
          <legend className="filter__legend">Randomize</legend>
          <button onClick={this.handleRandomize} type="button" className="filter__button">Go!</button>
        </fieldset>
      </form>
    );
  }
}

Filter.sort = {
  ASC: 'ascendant',
  DESC: 'descendant',
  RANDOM: 'random',
};

Filter.propTypes = {
  className: PropTypes.string,
  sort: PropTypes.oneOf(Object.values(Filter.sort).concat([''])),
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

Filter.defaultProps = {
  className: null,
  filter: null,
  sort: null,
};

export default Filter;
