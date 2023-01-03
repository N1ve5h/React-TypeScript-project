import React from "react";
import { useState } from "react";
import { ButtonTheme } from "./ButtonTheme";
import night from "../../assets/icon-moon.svg";
import day from "../../assets/icon-sun.svg";
import styles from "./Navbar.module.css";

export const Navbar: React.FC = () => {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <header>
      <nav className={styles.navbar}>
        <h1 className={styles.heading}>Where in the world?</h1>

        {theme === "light" ? (
          <button
            className={`${styles.button} ${styles.button__light}`}
            onClick={() => themeToggler()}
          >
            <ButtonTheme img={night} title={"Dark"} />
          </button>
        ) : (
          <button
            className={`${styles.button} ${styles.button__dark}`}
            onClick={() => themeToggler()}
          >
            <ButtonTheme img={day} title={"Light"} />
          </button>
        )}
      </nav>
    </header>
  );
};
