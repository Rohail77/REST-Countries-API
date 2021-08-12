import { Link } from "react-router-dom";

function CountryLink({ countryCode, children }) {
  return <Link to={`/country details/${countryCode}`}>{children}</Link>;
}

export default CountryLink;
