import Country from './country/Country';

function CountriesList({ countries }) {

  return (
    <ul className='countries-list'>
      {countries.map(country => (
        <Country country={country} key={country.alpha3Code} />
      ))}
    </ul>
  );
}

export default CountriesList;
