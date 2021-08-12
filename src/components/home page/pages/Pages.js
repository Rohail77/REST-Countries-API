import { Fragment } from 'react';
import PagesList from './pages list/PagesList';

function Pages({ totalItems, itemsPerPage, currentPage, updateCurrentPage }) {
  const getTotalPages = () => Math.ceil(totalItems / itemsPerPage);

  return (
    <Fragment>
      {getTotalPages() <= 1 ? null : (
        <div className='pages'>
          <PagesList
            currentPage={currentPage}
            totalPages={getTotalPages()}
            updateCurrentPage={updateCurrentPage}
          />
          <p className='pages__info'>
            Page {currentPage} of {getTotalPages()}
          </p>
        </div>
      )}
    </Fragment>
  );
}

export default Pages;
