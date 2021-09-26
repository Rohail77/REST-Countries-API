import Data from './data/Data';
import Flag from '../../../common/flag/Flag';
import { useContext } from 'react';
import { ThemeContext } from '../../../ThemeProducer';
import CountryLink from '../../../common/country link/CountryLink';

function Country({ country }) {
  const { flags, name, region, capital, cca3, area } = country;

  const theme = useContext(ThemeContext);

  return (
    <li className={`country elements-bg--${theme}-theme`}>
      <CountryLink countryCode={cca3}>
        <Flag flag={flags[0]} countryName={name.common} />
        <Data
          area={area}
          region={region}
          capital={capital[0]}
          name={name.common}
        />
      </CountryLink>
    </li>
  );
}

export default Country;
