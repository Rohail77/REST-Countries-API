import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { themes } from '../../ThemeProducer';

function HomeButton() {
  const theme = useSelector(state => state.theme);

  return (
    <Link to='/' className={`home-btn elements-bg--${theme}-theme`}>
      <img
        src={`/resources/images/${
          theme === themes.LIGHT ? 'black' : 'white'
        } back arrow.svg`}
        alt='back arrow'
      />
      <span>Home</span>
    </Link>
  );
}

export default HomeButton;
