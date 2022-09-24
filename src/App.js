import React, { useEffect, useState } from 'react';
import ThemeProducer from './components/ThemeProducer';
import './css/main.css';
import fetchCountries from './actions/countries/fetchCountries';
import { useDispatch } from 'react-redux';

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
  const [countryName, setCountryName] = useState('');
  const [countryRegion, setCountryRegion] = useState(regions.All);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <CountryFormContext.Provider
      value={{
        name: countryName,
        setName: setCountryName,
        region: countryRegion,
        setRegion: setCountryRegion,
      }}
    >
      <ThemeProducer />
    </CountryFormContext.Provider>
  );
}

export default App;
