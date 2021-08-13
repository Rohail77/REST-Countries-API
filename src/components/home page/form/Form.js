import { useContext } from 'react';
import { CountryFormContext } from '../../../App';
import { ThemeContext, themes } from '../../ThemeProducer';
import CountryInput from './country input/CountryInput';
import RegionFilter from './region filter/RegionFilter';

function Form() {
  const { name, setName, region, setRegion } = useContext(CountryFormContext);
  const theme = useContext(ThemeContext);

  return (
    <form onSubmit={event => event.preventDefault()}>
      <div className='relative-container'>
        <CountryInput name={name} setName={setName} />
        <img
          className='search-img'
          src={`resources/images/${
            theme === themes.LIGHT ? 'gray' : 'white'
          }-search-icon.svg`}
          alt='magnifying glass'
        />
      </div>

      <RegionFilter region={region} setRegion={setRegion} />
    </form>
  );
}

export default Form;
