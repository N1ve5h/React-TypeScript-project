import React from 'react';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Main } from './Components/Main/Main';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>
  )
}
export default App;
