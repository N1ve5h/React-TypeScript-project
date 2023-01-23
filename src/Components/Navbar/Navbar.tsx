import React, { MouseEventHandler } from "react";
import { ButtonTheme } from "./ButtonTheme";
import night from "../../assets/icon-moon.svg";
import day from "../../assets/icon-sun.svg";
import styles from "./Navbar.module.css";

type ThemeProps = {
  darkTheme: boolean;
  themeToggler: MouseEventHandler;
};

export const Navbar: React.FunctionComponent<ThemeProps> = (props) => {
  const { darkTheme, themeToggler } = props;

  return (
    <header className={darkTheme ? "dark" : "light"}>
      <nav className={styles.navbar}>
        <h1 className={styles.heading}>Where in the world?</h1>
        {!darkTheme ? (
          <button
            className={`${styles.button} ${styles.button__light}`}
            onClick={themeToggler}
          >
            <ButtonTheme img={night} title={"Dark"} />
          </button>
        ) : (
          <button
            className={`${styles.button} ${styles.button__dark}`}
            onClick={themeToggler}
          >
            <ButtonTheme img={day} title={"Light"} />
          </button>
        )}
      </nav>
    </header>
  );
};
