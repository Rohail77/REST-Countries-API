import { useContext } from 'react';
import { ThemeContext } from '../../../../ThemeProducer';

function Page({ pageNumber, isActive, updateCurrentPage }) {
  const theme = useContext(ThemeContext);
  return (
    <li>
      <button
        className={`page page--clickable${
          isActive ? ' active-page' : ''
        } bg--${theme}`}
        onClick={() => updateCurrentPage(pageNumber)}
      >
        {pageNumber}
      </button>
    </li>
  );
}

export default Page;
