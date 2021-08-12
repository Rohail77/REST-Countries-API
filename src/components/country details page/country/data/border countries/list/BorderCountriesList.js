import { useContext } from 'react';
import { CountriesContext } from '../../../../../../App';
import BorderCountry from './item/BorderCountry';

function BorderCountriesList({ borderCountries }) {
  const countries = useContext(CountriesContext);

  const getBorderCountries = () =>
    countries.filter(country => borderCountries.includes(country.alpha3Code));


  return (
    <ul className='country__neighbours__list'>
      {getBorderCountries().map(borderCountry => (
        <BorderCountry
          name={borderCountry.name}
          code={borderCountry.alpha3Code}
          key={borderCountry.alpha3Code}
        />
      ))}
    </ul>
  );
}

export default BorderCountriesList;
