import { useContext } from 'react';
import { ThemeContext, themes } from '../../../../ThemeProducer';

function PreviousPageButton({ updateCurrentPage, currentPage, isDisabled }) {
  const theme = useContext(ThemeContext);

  return (
    <li>
      <button
        className={`page${isDisabled ? '' : ' page--clickable'} bg--${theme}`}
        onClick={() => updateCurrentPage(currentPage - 1)}
        disabled={isDisabled}
        style={{ cursor: `${isDisabled ? 'auto' : 'pointer'}` }}
      >
        <img
          src={`/resources/images/${
            theme === themes.LIGHT ? 'black' : 'white'
          } previous page button.svg`}
          alt='left arrow'
        />
      </button>
    </li>
  );
}

export default PreviousPageButton;
