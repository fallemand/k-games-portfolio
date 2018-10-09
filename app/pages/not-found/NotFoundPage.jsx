import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './_not-found.scss';

const NotFoundPage = ({ history }) => {
  const handleClick = () => {
    history.push('/search');
  };

  return (
    <div className="not-found">
      <h1 className="not-found__title">404</h1>
      <h2 className="not-found__subtitle">{"We couldn't find the page you're looking for :(".toString()}</h2>
      <button
        className="not-found__button"
        type="button"
        onClick={handleClick}
      >
        Go Home!
      </button>
    </div>
  );
};
NotFoundPage.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(NotFoundPage);
