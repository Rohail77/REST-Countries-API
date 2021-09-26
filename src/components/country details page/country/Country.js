import Flag from '../../common/flag/Flag';
import Data from './data/Data';

function Country({ country }) {
  const {
    flags,
    name,
    region,
    subregion,
    capital,
    area,
    tld,
    currencies,
    languages,
    borders,
  } = country;

  return (
    <section className='country'>
      <Flag flag={flags[0]} countryName={name.common} />
      <Data
        data={{
          name: name.common,
          nativeName: name.nativeName[Object.keys(name.nativeName)[0]].common,
          region,
          subregion,
          capital: capital[0],
          area,
          tld: tld[0],
          currencies: Object.keys(currencies)
            .map(currency => currencies[currency].name)
            .join(', '),
          languages: Object.keys(languages)
            .map(language => languages[language])
            .join(', '),
          borders,
        }}
      />
    </section>
  );
}

export default Country;
