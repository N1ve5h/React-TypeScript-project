import React from "react";
import { useState } from "react";
import "./reset.css";
import "./body.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Main } from "./Components/Main/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Country } from "./Components/Country/Country";

const App: React.FC = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  
  const themeToggler = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <Router>
      <div className="App">
      <Navbar darkTheme={darkTheme} themeToggler={themeToggler}/>
        <Routes>   
          <Route path="/" element={<Main />} />
          <Route path="/country/:name" element={<Country/>} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;
