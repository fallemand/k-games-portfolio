import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './_filter.scss';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleQueryChange = this.handleQueryChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { onFilter, value } = this.props;
    onFilter({
      value,
    });
  }

  handleQueryChange(event) {
    const { value } = event.target;
    const { onChange } = this.props;
    onChange({ value });
  }

  render() {
    const { className, value } = this.props;
    return (
      <form onSubmit={this.handleSubmit} className={classnames(className, 'filter')}>
        <input
          className="filter__value"
          placeholder="Filter Value"
          type="text"
          value={value}
          onChange={this.handleQueryChange}
        />
      </form>
    );
  }
}

Filter.propTypes = {
  className: PropTypes.string,
  onFilter: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

Filter.defaultProps = {
  className: null,
  value: '',
};

export default Filter;
