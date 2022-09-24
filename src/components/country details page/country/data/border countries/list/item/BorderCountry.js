import { useSelector } from 'react-redux';
import CountryLink from '../../../../../../common/country link/CountryLink';

function BorderCountry({ name, code }) {
  const theme = useSelector(state => state.theme);

  return (
    <li className={`country__neighbour elements-bg--${theme}-theme`}>
      <CountryLink countryCode={code}>{name}</CountryLink>
    </li>
  );
}

export default BorderCountry;
