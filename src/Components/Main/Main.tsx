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

  const fuzzySearchCountry = (name: string) => {
    if (name.toLowerCase().indexOf(country.toLowerCase()) !== -1) return name;
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
              ? apiCountries.filter(countries => fuzzySearchCountry(countries['name'])).map((countries) => <p>{countries["name"]}</p>)
              : apiCountries
              .filter(countries => countries["region"] === region).filter(countries => fuzzySearchCountry(countries['name']))
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
