import actionTypes from '../types';

function fetchCountries() {
  return async function (dispatch) {
    try {
      const response = await fetch(
        'https://restcountries.eu/rest/v2/all?fields=alpha3Code;name;nativeName;population;region;subregion;capital;topLevelDomain;currencies;languages;borders;flag'
      );
      const data = await response.json();
      dispatch({
        type: actionTypes.FETCH_COUNTRIES,
        payload: data.filter(country => country.alpha3Code !== 'ISR'),
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export default fetchCountries;
