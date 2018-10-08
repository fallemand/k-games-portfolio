import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './_pagination.scss';

const pagination = (currentPage, totalPages) => {
  const delta = 2;
  const left = currentPage - delta;
  const right = currentPage + delta + 1;
  return Array.from({ length: totalPages }, (v, k) => k + 1)
    .filter(i => i && i >= left && i < right);
};

const Pagination = ({ className, total, show, onChange, active }) => {
  const pages = Math.ceil(total / show);
  const pagesToShow = pagination(active, pages);
  return (
    <div className={classnames(className, 'pagination')}>
      <button
        type="button"
        disabled={active === 1}
        className="pagination__number"
        onClick={() => onChange(active > 1 ? active - 1 : 1)}
      >
        &laquo;
      </button>
      {pagesToShow.map(
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
        disabled={active === pages}
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
