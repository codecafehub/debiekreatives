// src/App.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// Import your pages
import Home from './pages/Home';
import Voice from './pages/Voice';
import Videography from './pages/Videography';
import Editing from './pages/Editing';
import Contact from './pages/Contact';
import About from './pages/About';

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
          <Route path="/videography" element={<Videography />} />
          <Route path="/editing" element={<Editing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
           
        </Routes>
      </main>
      <Footer />
      {/* We can add a Footer component here later */}
    </div>
  );
}

export default App;