import React, { useState } from "react";
import search from "../../assets/icon-search.svg";

export const Main: React.FC = () => {
    const [country, setCountry] = useState('');
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
    </main>
  );
};
