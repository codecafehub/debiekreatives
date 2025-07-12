// src/components/Navbar.js

import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Updated style function to use our new colors
  const navLinkStyles = ({ isActive }) => {
    return {
      // The active link will now be the main brand blue
      color: isActive ? '#0A74DA' : '#E5E7EB', 
    };
  };

  return (
    <nav className="bg-dark-bg/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <div className="flex-shrink-0">
            <Link to="/" className="text-light-text text-2xl font-bold tracking-wider">
              Debiekreatives
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {/* Updated hover class to use accent-blue */}
              <NavLink to="/voice" style={navLinkStyles} className="text-light-text hover:text-accent-blue px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Voice</NavLink>
              <NavLink to="/videography" style={navLinkStyles} className="text-light-text hover:text-accent-blue px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Videography</NavLink>
              <NavLink to="/editing" style={navLinkStyles} className="text-light-text hover:text-accent-blue px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Editing</NavLink>
              <NavLink to="/about" style={navLinkStyles} className="text-light-text hover:text-accent-blue px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">About</NavLink>
              {/* --- The Contact button now uses brand-blue --- */}
              <Link to="/contact" className="bg-brand-blue text-light-text hover:bg-accent-blue px-4 py-2 rounded-md text-sm font-bold transition-colors duration-300">
                CONTACT
              </Link>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* --- Mobile Menu --- */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/voice" style={navLinkStyles} className="block text-light-text hover:text-accent-blue px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>Voice</NavLink>
            <NavLink to="/videography" style={navLinkStyles} className="block text-light-text hover:text-accent-blue px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>Videography</NavLink>
            <NavLink to="/editing" style={navLinkStyles} className="block text-light-text hover:text-accent-blue px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>Editing</NavLink>
            <NavLink to="/about" style={navLinkStyles} className="block text-light-text hover:text-accent-blue px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>About</NavLink>
            <Link to="/contact" className="bg-brand-blue text-light-text hover:bg-accent-blue block px-3 py-2 mt-2 rounded-md text-base font-bold text-center" onClick={() => setIsOpen(false)}>
              CONTACT
            </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;