import React, { useState, useEffect } from "react";
import search from "../../assets/icon-search.svg";

export const Main: React.FC = () => {
  const [country, setCountry] = useState("");
  const [apiCountries, setapiCountries] = useState([]);
  const [region, setRegion] = useState("");
  const [error, setError] = useState({});

  useEffect(() => {
    fetch(`https://restcountries.com/v2/all`)
      .then((response) => response.json())
      .then((res) => setapiCountries(res))
      .catch((err) => setError(err));
  }, []);
  interface apiCountries {
    name: String;
    nativeName: String;
    population: Number;
    region: String;
    subregion: String;
    capital: String;
    topLevelDomain: String;
    currencies: String;
    languages: Array<String>;
    borders: Array<String>;
    flags: String;
  }

  return (
    <main>
      <form className="search">
        <label className="search__image" htmlFor="search">
          <img src={search} alt="" />
        </label>
        <input
          required
          className="search__input"
          type="text"
          name="searchCountry"
          id="searchCountry"
          placeholder="Search for a country..."
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </form>

      <select
        name="region"
        className="regionFilter"
        onChange={(e) => {
          const selectedRegion = e.target.value;
          setRegion(selectedRegion);
        }}
      >
        <option value="">All</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>

      <div>
        {apiCountries.length > 0 ? (
          <>
            {region == ""
              ? apiCountries.filter(countries => countries["name"] == country).map((countries) => <p>{countries["name"]}</p>)
              : apiCountries
              .filter(countries => countries["region"] === region && countries["name"] == country)
                  .map((filteredCountry) => <p>{filteredCountry["name"]}</p>)
                  }
          </>
        ) : (
          ''
        )}
      </div>
    </main>
  );
};
