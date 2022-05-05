import { Link } from "react-router-dom";
import Props from "../../Props";
import { Country } from "./Country/Country";

<<<<<<< HEAD
export const Card: React.FC<Props> = ({ country }) => {  
  return (
    <Link to={`/country/${country.name}`} state={{country}}>
=======
export const Card: React.FC<Props> = ({ country }) => {
  return (
    <Link to={{pathname:`/country/${country.name}`}} state={country}>
>>>>>>> 68cf064610766718e221796f827974b95a7e2e2f
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
