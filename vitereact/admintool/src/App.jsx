import React from 'react';
import './App.css';
import Mainpage from './Components/Mainpage';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Mainpage/>
    </BrowserRouter>
  )
}

export default App
