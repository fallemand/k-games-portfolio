import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './_snackbar.scss';

const Snackbar = ({ className, show, message }) => (
  <div
    role="alert"
    className={classnames(className, 'snackbar', { 'snackbar--show': show })}
  >
    {message}
  </div>
);

Snackbar.propTypes = {
  className: PropTypes.string,
  show: PropTypes.bool,
  message: PropTypes.string.isRequired,
};

Snackbar.defaultProps = {
  className: null,
  show: false,
};

export default Snackbar;
