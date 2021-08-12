import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CountriesContext } from '../../App';
import HomeButton from './home button/HomeButton';
import Country from './country/Country';

function CountryDetails() {
  const countries = useContext(CountriesContext);
  const { countryCode } = useParams();

  const getCountry = () =>
    countries.find(country => country.alpha3Code === countryCode);

  return (
    <main className='main--country-details'>
      <div className='wrapper'>
        <HomeButton />
        <Country country={getCountry()} />
      </div>
    </main>
  );
}

export default CountryDetails;
