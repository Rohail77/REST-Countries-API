import Flag from '../../common/flag/Flag';
import Data from './data/Data';

function Country({ country }) {
  const {
    flag,
    name,
    population,
    region,
    subregion,
    capital,
    nativeName,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = country;

  return (
    <section className='country'>
      <Flag flag={flag} countryName={name} />
      <Data
        data={{
          name,
          nativeName,
          population: population.toLocaleString(),
          region,
          capital,
          subregion,
          topLevelDomain,
          currencies: currencies.map(currency => currency.name).join(', '),
          languages: languages.map(language => language.name).join(', '),
          borders,
        }}
      />
    </section>
  );
}

export default Country;
