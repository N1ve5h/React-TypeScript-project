import { Link } from "react-router-dom";
import Props from "../../Props";
import { Country } from "./Country/Country";

export const Card: React.FC<Props> = ({ country }) => {
  const location = {
    pathname: `/country/${country.name}`,
    param: {country},
    component:Country
  }
  
  return (
    <Link to={location}>
      <div className="card">
        <img src={country.flags.svg} alt="" />
        <h1 className="title">{country.name}</h1>
        <p>
          <b>Population: </b>
          {country.population.toLocaleString()}
        </p>
        <p>
          <b>Region: </b>
          {country.region}
        </p>
        <p>
          <b>Capital: </b>
          {country.capital}
        </p>
      </div>
    </Link>
  );
};
