import { useDispatch, useSelector } from 'react-redux';
import activatePage from '../../../../../actions/pagination/changeActiveHomePage';

function Page({ pageNumber, isActive, updateCurrentPage }) {
  const theme = useSelector(state => state.theme);
  const dispatch = useDispatch();
  return (
    <li>
      <button
        className={`page page--clickable${
          isActive ? ' active-page' : ''
        } bg--${theme}`}
        onClick={() => dispatch(activatePage(pageNumber))}
      >
        {pageNumber}
      </button>
    </li>
  );
}

export default Page;
