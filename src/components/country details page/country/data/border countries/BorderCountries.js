import BorderCountriesList from './list/BorderCountriesList';

function BorderCountries({ borderCountries }) {
  return (
    <div className='country__neighbours'>
      <h3>Border Countries:</h3>
      {borderCountries.length === 0 ? (
        <span className='country__neighbours__empty-msg'> None </span>
      ) : (
        <BorderCountriesList borderCountries={borderCountries} />
      )}
    </div>
  );
}

export default BorderCountries;
