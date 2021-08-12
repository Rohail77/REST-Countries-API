import BorderCountries from './border countries/BorderCountries';

function Data(props) {
  const {
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = props.data;

  return (
    <div className='country__data'>
      <h1 className='country__name'>{name}</h1>
      <div className='country__facts'>
        <div>
          <div className='country__fact'>
            <h3 className='country__fact__name'>Native Name:</h3>
            <span className='country__fact__value'>{nativeName}</span>
          </div>
          <div className='country__fact'>
            <h3 className='country__fact__name'>Population:</h3>
            <span className='country__fact__value'>
              {population}
            </span>
          </div>
          <div className='country__fact'>
            <h3 className='country__fact__name'>Region:</h3>
            <span className='country__fact__value'>{region}</span>
          </div>
          <div className='country__fact'>
            <h3 className='country__fact__name'>Sub Region:</h3>
            <span className='country__fact__value'>{subregion}</span>
          </div>
          <div className='country__fact'>
            <h3 className='country__fact__name'>Capital:</h3>
            <span className='country__fact__value'>{capital}</span>
          </div>
        </div>
        <div>
          <div className='country__fact'>
            <h3 className='country__fact__name'>Top Level Domain:</h3>
            <span className='country__fact__value'>{topLevelDomain}</span>
          </div>
          <div className='country__fact'>
            <h3 className='country__fact__name'>Currencies:</h3>
            <span className='country__fact__value'>
              {currencies}
            </span>
          </div>
          <div className='country__fact'>
            <h3 className='country__fact__name'>Languages:</h3>
            <span className='country__fact__value'>
              {languages}
            </span>
          </div>
        </div>
      </div>

      <BorderCountries borderCountries={borders} />
    </div>
  );
}

export default Data;
