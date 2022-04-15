import React from "react";
import { useState } from "react";
import { NavItem } from "./NavItem";

export const Navbar: React.FC = () => {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };


  return (
    <header className="navbar">
      <NavItem title={"Where in the world?"} />
    </header>
  );
};
