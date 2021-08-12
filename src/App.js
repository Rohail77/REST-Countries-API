import React, { Fragment, useEffect, useState } from 'react';
import ThemeProducer from './components/ThemeProducer';
import './css/main.css';

export const CountriesContext = React.createContext();
export const CountryFormContext = React.createContext();

export const regions = {
  All: 'All Regions',
  Africa: 'Africa',
  Americas: 'Americas',
  Oceania: 'Oceania',
  Asia: 'Asia',
  Europe: 'Europe',
};

function App() {
  const [countries, setCountries] = useState(null);

  const [countryForm, setCountryForm] = useState({
    name: '',
    region: regions.All,
    inDefaultState: true,
  });

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          'https://restcountries.eu/rest/v2/all?fields=alpha3Code;name;nativeName;population;region;subregion;capital;topLevelDomain;currencies;languages;borders;flag'
        );
        const data = await response.json();
        setCountries(data.filter(country => country.alpha3Code !== 'ISR'));
      } catch (error) {
        console.error(error);
      }
    };
    fetchCountries();
  }, []);

  const __setCountryForm = ({ name, region, inDefaultState }) =>
    setCountryForm({ name, region, inDefaultState });

  const resetCountryForm = () =>
    setCountryForm({
      name: '',
      region: regions.All,
      inDefaultState: true,
    });

  return (
    <Fragment>
      {countries === null ? null : (
        <CountriesContext.Provider value={countries}>
          <CountryFormContext.Provider
            value={{
              countryForm,
              __setCountryForm,
              resetCountryForm,
            }}
          >
            <ThemeProducer />
          </CountryFormContext.Provider>
        </CountriesContext.Provider>
      )}
    </Fragment>
  );
}

export default App;
