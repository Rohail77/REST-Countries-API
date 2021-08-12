import { useContext } from 'react';
import CountryLink from '../../../../../../common/country link/CountryLink';
import { ThemeContext } from '../../../../../../ThemeProducer';

function BorderCountry({ name, code }) {
  const theme = useContext(ThemeContext);

  return (
    <li className={`country__neighbour elements-bg--${theme}-theme`}>
      <CountryLink countryCode={code}>{name}</CountryLink>
    </li>
  );
}

export default BorderCountry;
