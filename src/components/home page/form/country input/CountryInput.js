import { useContext} from 'react';
import { ThemeContext } from '../../../ThemeProducer';

function CountryInput({ countryInput }) {
  const theme = useContext(ThemeContext);
  return (
    <input
      type='text'
      name='country'
      className={`country-input elements-bg--${theme}-theme country-input--${theme}-theme`}
      placeholder='Search for a country...'
      ref={countryInput}
    />
  );
}

export default CountryInput;
