import React from 'react';

const Pagination = ({ productsPerPage, totalProducts, currentPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        <li>
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="pageLink"
          >
            {'<'}
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              className={`pageLink ${currentPage === number ? 'activePage' : ''}`}
            >
              {number}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === Math.ceil(totalProducts / productsPerPage)}
            className="pageLink" 
          >
            {'>'}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
