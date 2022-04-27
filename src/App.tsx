import React from "react";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Main } from "./Components/Main/Main";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Route path="/" element={<Navbar/>} />
        <Route path="/" element={<Main/>} />
      </div>
    </Router>
  );
};
export default App;
