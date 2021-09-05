import CountriesList from './countries/CountriesList';
import Form from './form/Form';
import { CountryFormContext, regions } from '../../App';
import { Fragment, useContext, useEffect } from 'react';
import Pages from './pages/Pages';
import NoResults from './no results/NoResults';
import ScrollTopButton from './scroll top button/ScrollTopButton';
import { useDispatch, useSelector } from 'react-redux';
import activatePage from '../../actions/pagination/changeActiveHomePage';

function Home() {
  const countries = useSelector(state => state.countries);
  const currentPage = useSelector(state => state.activeHomePage);
  const dispatch = useDispatch();
  const { name, region } = useContext(CountryFormContext);

  useEffect(() => dispatch(activatePage(1)), [name, region, dispatch]);
  useEffect(() => {
    if (currentPage !== 1) document.querySelector('.pages').scrollIntoView();
  }, [currentPage]);

  const filterCountries = () => {
    const countryNameWithoutExtraSpaces = () =>
      name
        .split(' ')
        .filter(s => s)
        .join(' ');
    const _name = countryNameWithoutExtraSpaces();
    if (showAllCountries()) return countries;
    if (region === regions.All)
      return countries.filter(country =>
        country.name.toLowerCase().includes(_name.toLowerCase())
      );
    return countries.filter(
      country =>
        country.name.toLowerCase().includes(_name.toLowerCase()) &&
        country.region === region
    );
  };
  const showAllCountries = () => name === '' && region === regions.All;

  const filteredCountries = filterCountries();

  const COUNTRIES_PER_PAGE = 40;
  const softwaresForCurrentPage = () => {
    const initialCountryIndexForCurrentPage = () =>
      (currentPage - 1) * COUNTRIES_PER_PAGE;
    return filteredCountries.slice(
      initialCountryIndexForCurrentPage(),
      initialCountryIndexForCurrentPage() + COUNTRIES_PER_PAGE
    );
  };

  return (
    <main className='main--home'>
      <div className='wrapper'>
        <Form />
        {countries.length === 0 ? null : filteredCountries.length <= 0 ? (
          <NoResults />
        ) : (
          <Fragment>
            <CountriesList countries={softwaresForCurrentPage()} />
            <Pages
              totalItems={filteredCountries.length}
              itemsPerPage={COUNTRIES_PER_PAGE}
              currentPage={currentPage}
            />
          </Fragment>
        )}
        <ScrollTopButton />
      </div>
    </main>
  );
}

export default Home;
