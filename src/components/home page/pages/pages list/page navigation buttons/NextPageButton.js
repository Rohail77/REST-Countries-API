import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import activatePage from '../../../../../actions/pagination/changeActiveHomePage';
import { themes } from '../../../../ThemeProducer';

function NextPageButton({ updateCurrentPage, currentPage, isDisabled }) {
  const theme = useSelector(state => state.theme);
  const dispatch = useDispatch();

  return (
    <li>
      <button
        className={`page${isDisabled ? '' : ' page--clickable'} bg--${theme}`}
        onClick={() => dispatch(activatePage(currentPage + 1))}
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
