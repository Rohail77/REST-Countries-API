import { useContext } from 'react';
import { ThemeContext } from '../../../ThemeProducer';

function CountryInput({ name, setName }) {
  const theme = useContext(ThemeContext);
  const handleChange = event => {
    setName(
      event.target.value
    );
  };
  return (
    <input
      type='text'
      name='country'
      className={`country-input elements-bg--${theme}-theme country-input--${theme}-theme`}
      placeholder='Search for a country...'
      value={name}
      onChange={handleChange}
    />
  );
}

export default CountryInput;
