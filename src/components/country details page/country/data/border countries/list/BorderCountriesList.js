import { useSelector } from 'react-redux';
import BorderCountry from './item/BorderCountry';

function BorderCountriesList({ borderCountries }) {
  const countries = useSelector(state => state.countries);

  const getBorderCountries = () =>
    countries.filter(country => borderCountries.includes(country.cca3));

  return (
    <ul className='country__neighbours__list'>
      {getBorderCountries().map(borderCountry => (
        <BorderCountry
          name={borderCountry.name.common}
          code={borderCountry.cca3}
          key={borderCountry.cca3}
        />
      ))}
    </ul>
  );
}

export default BorderCountriesList;
