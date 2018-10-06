import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './_pagination.scss';

const Pagination = ({ className, total, show, onChange, active }) => {
  const pages = Math.ceil(total / show);
  return (
    <div className={classnames(className, 'pagination')}>
      <button
        type="button"
        className="pagination__number"
        onClick={() => onChange(active > 1 ? active - 1 : 1)}
      >
        &laquo;
      </button>
      {Array.from(Array(pages), (x, i) => i + 1).map(
        pageNumber => (
          <button
            type="button"
            className={classnames(
              'pagination__number',
              { 'pagination__number--active': (active === pageNumber) },
            )}
            onClick={() => onChange(pageNumber)}
            key={pageNumber}
          >
            {pageNumber}
          </button>),
      )}
      <button
        type="button"
        className="pagination__number"
        onClick={() => onChange(active < pages ? active + 1 : pages)}
      >
        &raquo;
      </button>
    </div>
  );
};

Pagination.propTypes = {
  className: PropTypes.string,
  total: PropTypes.number.isRequired,
  show: PropTypes.number.isRequired,
  active: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

Pagination.defaultProps = {
  className: null,
  active: 1,
};

export default Pagination;
