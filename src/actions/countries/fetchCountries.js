import actionTypes from '../types';

function fetchCountries() {
  return async function (dispatch) {
    try {
      const response = await fetch(
        'https://restcountries.com/v3/all?fields=cca3,name,region,subregion,capital,tld,currencies,languages,borders,flags,area'
      );
      const data = await response.json();
      dispatch({
        type: actionTypes.FETCH_COUNTRIES,
        payload: data
          .filter(country => country.cca3 !== 'ISR')
          .sort((country1, country2) => {
            return country1.name.common <= country2.name.common ? 0 : 1;
          }),
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export default fetchCountries;
