import React from "react";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Main } from "./Components/Main/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
      <Navbar />
        <Routes>   
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;
