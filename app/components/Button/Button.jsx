import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './_button.scss';

const Button = ({ className, color, children, onClick, ...props }) => (
  <button
    type="button"
    className={classnames(className, 'button', `button--${color}`)}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
);

Button.colors = {
  DEFAULT: 'default',
  GREEN: 'green',
  BLUE: 'blue',
};

Button.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.values(Button.colors)),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  className: null,
  color: Button.colors.DEFAULT,
};

export default Button;
