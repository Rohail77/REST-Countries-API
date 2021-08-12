import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CountryDetails from './country details page/CountryDetails';
import Home from './home page/Home';
import ScrollToTop from './scroll to top/ScrollToTop';

function AppRouter() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path='/country details/:countryCode'>
          <CountryDetails />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRouter;
