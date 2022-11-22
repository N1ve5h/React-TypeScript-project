import React from "react";
import { useState } from "react";
import { NavItem } from "./NavItem";
import night from "../../assets/icon-moon.svg";
import day from "../../assets/icon-sun.svg";
import styles from "./Navbar.module.css";

let setClass = (classes: string[]) => {
  return classes.map((className) => styles[className]).join(" ");
}

export const Navbar: React.FC = () => {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  
  return (
    <header className={setClass(["flex", "row"])}>
      <h1 className={styles.heading}>Where in the world?</h1>
      <section className={styles.flex} onClick={() => themeToggler()}>
        {theme === "light" ? <NavItem img={night} title={"Dark"}/> :  <NavItem img={day} title={"Light"}/>}
      </section>
    </header>
  );
};
