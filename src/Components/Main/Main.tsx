import React, { useState } from "react";
import search from "../../assets/icon-search.svg";

export const Main: React.FC = () => {
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

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
          name="searchgituser"
          id="searchgituser"
          placeholder="Search for a country..."
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </form>

      <select name="region" className="regionFilter">
        <option value="">Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="americas">Americas</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>

      {/* <Country country={country}  region={region}/> */}
    </main>
  );
};
