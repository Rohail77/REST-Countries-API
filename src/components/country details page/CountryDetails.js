import { useParams } from 'react-router-dom';
import HomeButton from './home button/HomeButton';
import Country from './country/Country';
import { useSelector } from 'react-redux';

function CountryDetails() {
  const countries = useSelector(state => state.countries);
  const { countryCode } = useParams();

  const getCountry = () =>
    countries.find(country => country.cca3 === countryCode);

  return (
    <main className='main--country-details'>
      <div className='wrapper'>
        <HomeButton />
        {getCountry() ? <Country country={getCountry()} /> : null}
      </div>
    </main>
  );
}

export default CountryDetails;
