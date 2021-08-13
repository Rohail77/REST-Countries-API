import { useContext, useState } from 'react';
import { ThemeContext, themes } from '../../../ThemeProducer';
import Filters from './filters/Filters';

function RegionFilter({ region, setRegion }) {
  const [areFiltersOpen, setAreFiltersOpen] = useState(false);
  const theme = useContext(ThemeContext);

  const toggleFilters = () => setAreFiltersOpen(!areFiltersOpen);

  const handleKeyPress = event => {
    if (event.keyCode === 13 || event.key === 'ENTER') toggleFilters();
  };

  return (
    <div>
      <div
        className={`region-filter elements-bg--${theme}-theme`}
        onClick={toggleFilters}
        onKeyUp={handleKeyPress}
        role='button'
        tabIndex='0'
      >
        <span>{region}</span>
        <img
          src={`resources/images/${
            theme === themes.LIGHT ? 'black' : 'white'
          } down arrow.svg`}
          alt='down arrow'
        />
      </div>
      <div className='relative-container'>
        {areFiltersOpen && (
          <Filters
            closeFilters={() => setAreFiltersOpen(false)}
            region={region}
            setRegion={setRegion}
          />
        )}
      </div>
    </div>
  );
}

export default RegionFilter;
