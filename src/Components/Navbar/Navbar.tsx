import React from "react";
import { useState } from "react";
import { NavItem } from "./NavItem";
import night from "../../assets/icon-moon.svg";
import day from "../../assets/icon-sun.svg";

export const Navbar: React.FC = () => {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <header className="navbar">
      <h1>Where in the world?</h1>
      <section className="colorButton" onClick={() => themeToggler()}>
        {theme === "light" ? <NavItem img={night} title={"Dark"}/> :  <NavItem img={day} title={"Light"}/>}
      </section>
    </header>
  );
};
