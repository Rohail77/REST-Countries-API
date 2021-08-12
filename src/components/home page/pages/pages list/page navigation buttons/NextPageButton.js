import { useContext } from 'react';
import { ThemeContext, themes } from '../../../../ThemeProducer';

function NextPageButton({ updateCurrentPage, currentPage, isDisabled }) {
  const theme = useContext(ThemeContext);
  return (
    <li>
      <button
        className={`page${isDisabled ? '' : ' page--clickable'} bg--${theme}`}
        onClick={() => updateCurrentPage(currentPage + 1)}
        disabled={isDisabled}
        style={{ cursor: `${isDisabled ? 'auto' : 'pointer'}` }}
      >
        <img
          src={`/resources/images/${
            theme === themes.LIGHT ? 'black' : 'white'
          } next page button.svg`}
          alt='right arrow'
        />
      </button>
    </li>
  );
}

export default NextPageButton;
