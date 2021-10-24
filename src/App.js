import React from 'react'
import './App.css';
import {Routes,Route } from 'react-router-dom'
import Home from './pages/Home';
import Documentation from './pages/Documentation'

function App() {
  return (
    <div className="App">
<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<Documentation />} />
      </Routes>
   
    </div>
  );
}

export default App;
