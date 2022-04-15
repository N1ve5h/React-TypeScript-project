import React from 'react';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Input } from './Components/Input/Input';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Input />
    </div>
  )
}
export default App;
