import Page from './page/Page';
import { v4 as uuidv4 } from 'uuid';
import PreviousPageButton from './page navigation buttons/PreviousPageButton';
import NextPageButton from './page navigation buttons/NextPageButton';

function PagesList({ currentPage, totalPages, updateCurrentPage }) {
  const endPagesReached = () => currentPage + 2 > totalPages;

  const getPageNumbers = () => {
    const pageNumbers = [];

    if (!endPagesReached()) {
      for (
        let pageNumber = currentPage;
        pageNumber <= currentPage + 2;
        pageNumber++
      ) {
        pageNumbers.push(pageNumber);
      }
    } else {
      for (
        let pageNumber = totalPages - 2;
        pageNumber <= totalPages;
        pageNumber++
      ) {
        if (pageNumber > 0) pageNumbers.push(pageNumber);
      }
    }
    return pageNumbers;
  };

  const disabledPreviousPageButton = () => currentPage === 1;

  const disabledNextPageButton = () => currentPage === totalPages;

  return (
    <ul className='pages__list'>
      <PreviousPageButton
        isDisabled={disabledPreviousPageButton()}
        currentPage={currentPage}
        updateCurrentPage={updateCurrentPage}
      />
      {getPageNumbers().map(pageNumber => (
        <Page
          pageNumber={pageNumber}
          updateCurrentPage={updateCurrentPage}
          isActive={pageNumber === currentPage}
          key={uuidv4()}
        />
      ))}
      <NextPageButton
        isDisabled={disabledNextPageButton()}
        currentPage={currentPage}
        updateCurrentPage={updateCurrentPage}
      />
    </ul>
  );
}

export default PagesList;
