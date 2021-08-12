import Data from './data/Data';
import Flag from '../../../common/flag/Flag';
import { useContext } from 'react';
import { ThemeContext } from '../../../ThemeProducer';
import CountryLink from '../../../common/country link/CountryLink';

function Country({ country }) {
  const { flag, name, population, region, capital, alpha3Code } = country;

  const theme = useContext(ThemeContext);

  return (
    <li className={`country elements-bg--${theme}-theme`}>
      <CountryLink countryCode={alpha3Code}>
        <Flag flag={flag} countryName={name} />
        <Data
          population={population.toLocaleString()}
          region={region}
          capital={capital}
          name={name}
        />
      </CountryLink>
    </li>
  );
}

export default Country;
