import { useLocation } from "react-router";
import arrow from "../../assets/arrow-left-long-solid.svg";
import { Link } from "react-router-dom";

export const Country: React.FC = () => {
  let location = useLocation();
  let { country }: any = location.state;
  
  return (
    <>
      <Link to='/'><button className="backButton">
        <img src={arrow} alt="Back Arrow"/> Back
      </button>
      </Link>
      <div className="card detail">
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
          <b>Sub Region: </b>
          {country.subregion}
        </p>
        <p>
          <b>Capital: </b>
          {country.capital}
        </p>
      </div>
      <div className="card detail second">
        <p>
          <b>Top Level Domain: </b>
          {country.topLevelDomain}
        </p>
        <p>
          <b>Currencies: </b>
          {country.currencies[0].name}
        </p>
        <p>
          <b>Languages:</b>
          {country.languages.map((language: { name: string; }) => ' '+language.name)}
        </p>
      </div>
    </>
  )
};
