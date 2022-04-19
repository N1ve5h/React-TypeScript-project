import React, { useState, useEffect } from "react";
import search from "../../assets/icon-search.svg";

export const Main: React.FC = () => {
  const [country, setCountry] = useState("");
  const [apiCountries, setapiCountries] = useState([]);
  const [regions, setRegion] = useState(["All", "Africa","America","Asia","Europe","Oceania"]);
  const [error, setError] = useState({});
  const [selectedRegion, setselectedRegion] = useState("");
 
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

      <select name="region" className="regionFilter" value={selectedRegion}>
        {regions.length > 0 ? regions.map(region => <option key={region} value={region === 'All' ? '' : region.toLocaleLowerCase()}>{region}</option>) : ''}
      </select>

      {/* {apiCountries.length > 0 ? apiCountries.map(apiCountry => console.log(apiCountry.region)) : console.log("Error, fetch failed")} */}
    </main>
  );
};
//  