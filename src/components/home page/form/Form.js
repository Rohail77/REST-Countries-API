import { useContext, useEffect, useRef, useState } from 'react';
import { CountryFormContext } from '../../../App';
import CountryInput from './country input/CountryInput';
import RegionFilter from './filter/RegionFilter';
import { regions } from '../../../App';

function Form() {
  const [region, setRegion] = useState(regions.All);
  const countryInput = useRef();
  const { __setCountryForm, countryForm } = useContext(CountryFormContext);

  useEffect(() => {
    const resetFields = () => {
      countryInput.current.value = '';
      setRegion(regions.All);
    };
    if (countryForm.inDefaultState) resetFields();
  }, [countryForm.inDefaultState]);

  useEffect(() => {
    countryInput.current.value = countryForm.name;
    setRegion(countryForm.region);
  }, [countryForm.name, countryForm.region]);

  const handleSubmit = event => {
    event.preventDefault();
    __setCountryForm({
      name: countryInput.current.value,
      region: region,
      inDefaultState: isFormInDefaultState(),
    });
  };

  const isFormInDefaultState = () =>
    countryInput.current.value === '' && region === regions.All;

  return (
    <form onSubmit={handleSubmit}>
      <div className='relative-container'>
        <CountryInput countryInput={countryInput} />
        <button className='search-img' type='submit'>
          <img src='resources/images/search icon.svg' alt='magnifying glass' />
        </button>
      </div>

      <RegionFilter setRegion={setRegion} region={region} />
    </form>
  );
}

export default Form;
