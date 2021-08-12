import { useContext } from 'react';
import { CountryFormContext } from '../../../App';

function AllCountriesButton() {
  const { resetCountryForm } = useContext(CountryFormContext);
  return (
    <button className='all-countries-btn' onClick={resetCountryForm}>
      View All Countries
    </button>
  );
}

export default AllCountriesButton;
