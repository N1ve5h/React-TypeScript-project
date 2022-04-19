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
      <NavItem title={"Where in the world?"} />
      <section className="colorButton" onClick={() => themeToggler()}>
        {theme === "light" ? <NavItem img={night} title={"Dark Mode"}/> :  <NavItem img={day} title={"Light Mode"}/>}
      </section>
    </header>
  );
};
