import { useContext, useState } from 'react';
import { ThemeContext, themes } from '../../../ThemeProducer';
import RegionsList from './regions list/RegionsList';

function RegionFilter({ region, setRegion }) {
  const [areOptionsOpen, setAreOptionsOpen] = useState(false);

  const toggleFilterOptions = () =>
    setAreOptionsOpen(!areOptionsOpen);

  const theme = useContext(ThemeContext);

  return (
    <div>
      <div
        className={`region-filter elements-bg--${theme}-theme`}
        onClick={toggleFilterOptions}
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
        <RegionsList
          open={areOptionsOpen}
          setOpen={setAreOptionsOpen}
          region={region}
          setRegion={setRegion}
        />
      </div>
    </div>
  );
}

export default RegionFilter;
