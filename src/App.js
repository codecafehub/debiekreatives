// src/App.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// Import your pages
import Home from './pages/Home';
import Voice from './pages/Voice';

function App() {
  return (
  <div className="bg-dark-bg text-light-text">
      <Navbar />
      <main>
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<Home />} />
          
          {/* We'll add the other pages later, e.g.: */}
          <Route path="/voice" element={<Voice />} />
        </Routes>
      </main>
      {/* We can add a Footer component here later */}
    </div>
  );
}

export default App;