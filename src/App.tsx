import React from "react";
import { Navbar } from "./Components/Navbar/Navbar";
import { Main } from "./Components/Main/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Country } from "./Components/Main/Country/Country";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
      <Navbar />
        <Routes>   
          <Route path="/" element={<Main />} />
          <Route path="/country/:name" element={<Country/>} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;
