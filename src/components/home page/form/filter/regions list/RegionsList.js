import { useContext, useEffect } from 'react';
import Region from './region/Region';
import { regions } from '../../../../../App';
import { ThemeContext } from '../../../../ThemeProducer';

function FilterOptions({ open, setOpen, region, setRegion }) {
  useEffect(() => {
    const closeFilterOptions = () => setOpen(false);

    if (open) document.addEventListener('click', closeFilterOptions);
    return () => document.removeEventListener('click', closeFilterOptions);
  });

  const theme = useContext(ThemeContext);

  return (
    <ul
      className={`region-filter-options elements-bg--${theme}-theme`}
      style={{ display: open ? 'block' : 'none' }}
    >
      <div>
        {Object.keys(regions).map((key, index) => (
          <Region
            region={regions[key]}
            selected={regions[key] === region}
            key={index}
            setRegion={setRegion}
          />
        ))}
      </div>
    </ul>
  );
}

export default FilterOptions;
