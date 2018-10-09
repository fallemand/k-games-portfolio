import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './_dropdown.scss';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    const { onChange } = this.props;
    onChange(value);
  }

  render() {
    const {
      className, name, title, options, value,
    } = this.props;
    return (
      <select className={classnames(className, 'dropdown')} name={name} onChange={this.handleChange}>
        {title && <option value="" disabled selected={!value}>{title}</option>}
        {
          options.map(option => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
              selected={option.value === value}
            >
              {option.label}
            </option>
          ))
        }
      </select>
    );
  }
}
Dropdown.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  title: PropTypes.string,
  options: PropTypes.array.isRequired,
};

Dropdown.defaultProps = {
  className: null,
  title: null,
  value: '',
};

export default Dropdown;
