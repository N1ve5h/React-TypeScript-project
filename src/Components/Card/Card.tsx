import { Link } from "react-router-dom";
import Props from "../../Props";

export const Card: React.FC<Props> = ({ country }) => {
  return (
    <div className="card">
      <img src={country.flags.svg} alt="" />
      <Link to={`/country/${country.name}`} state={{ country }}>
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
      </Link>
    </div>
  );
};
