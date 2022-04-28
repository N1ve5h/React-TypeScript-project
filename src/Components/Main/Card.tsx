import { Link } from "react-router-dom";
import Props from "../../Props";

export const Card: React.FC<Props> = ({ country }) => {
  return (
    <Link to={`/country/${country.name}`}>
      <div className="card">
        <img src={country["flags"]["svg"]} alt="" />
        <h1 className="title">{country["name"]}</h1>
        <p>
          <b>Population: </b>
          {country["population"].toLocaleString()}
        </p>
        <p>
          <b>Region: </b>
          {country["region"]}
        </p>
        <p>
          <b>Capital: </b>
          {country["capital"]}
        </p>
      </div>
    </Link>
  );
};
