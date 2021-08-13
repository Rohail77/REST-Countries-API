import { Fragment, useContext, useEffect } from 'react';
import Filter from './filter/Filter';
import { regions } from '../../../../../App';
import { ThemeContext } from '../../../../ThemeProducer';

function Filters({ closeFilters, region, setRegion }) {
  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener('click', closeFilterOptions);
      document.addEventListener('keyup', handleKeyPress);
    };

    const removeEventListeners = () => {
      document.removeEventListener('click', closeFilterOptions);
      document.removeEventListener('keyup', handleKeyPress);
    };

    const closeFilterOptions = () => {
      if (!componentUnmounted()) closeFilters();
    };
    const handleKeyPress = event => {
      if (
        (event.keyCode === 13 || event.key === 'ENTER') &&
        !componentUnmounted()
      )
        closeFilters();
    };
    const componentUnmounted = () =>
      document.querySelector('.main--home .region-filter-options') === null;

    addEventListeners();
    return removeEventListeners;
  }, [closeFilters]);

  const theme = useContext(ThemeContext);

  return (
    <Fragment>
      <ul className={`region-filter-options elements-bg--${theme}-theme`}>
        <div>
          {Object.keys(regions).map((key, index) => (
            <Filter
              region={regions[key]}
              setRegion={setRegion}
              selected={regions[key] === region}
              key={index}
            />
          ))}
        </div>
      </ul>
    </Fragment>
  );
}

export default Filters;
