// src/components/Footer.js

import React, { useState } from 'react'; // <-- 1. Import useState
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Twitter, Facebook, Mail  } from 'lucide-react';
import ContactModal from './ContactMosdal';
import { AnimatePresence } from 'framer-motion'; // For exit animations

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isModalOpen, setIsModalOpen] = useState(false); // <-- 3. Add state for modal

  return (
    <> {/* We use a Fragment to hold the Footer and the Modal */}
        <footer className="bg-gray-900 text-light-text/70 border-t border-gray-700/50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">

            {/* --- The Grid Container for the Columns --- */}
            {/* This will be 1 column on mobile and 3 on desktop */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

            {/* --- Column 1: Brand --- */}
            {/* We use flexbox here to align items on mobile when centered */}
            <div className="flex flex-col items-center md:items-start">
                <h3 className="text-2xl font-bold text-light-text">Debiekreatives</h3>
                <p className="mt-2">Your complete creative partner.</p>
            </div>

            {/* --- Column 2: Connect With Me --- */}
            <div className="flex flex-col items-center md:items-start">
                <h4 className="font-semibold text-light-text tracking-wider uppercase mb-4">Connect With Me</h4>
                {/* We center the icons within their own container */}
                <div className="flex justify-center md:justify-start space-x-5">
                <a href="#" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="hover:text-brand-blue transition-colors"><Linkedin size={24} /></a>
                <a href="#" target="_blank" rel="noopener noreferrer" title="Instagram" className="hover:text-brand-blue transition-colors"><Instagram size={24} /></a>
                <a href="#" target="_blank" rel="noopener noreferrer" title="Twitter" className="hover:text-brand-blue transition-colors"><Twitter size={24} /></a>
                <a href="#" target="_blank" rel="noopener noreferrer" title="Facebook" className="hover:text-brand-blue transition-colors"><Facebook size={24} /></a>
                <a href="mailto:yourclientemail@example.com" title="Send an Email" className="hover:text-brand-blue transition-colors"><Mail size={24} /></a>
                </div>
            </div>
            
            {/* --- Column 3: The CTA Button --- */}
            <div className="flex flex-col items-center md:items-start">
                <h4 className="font-semibold text-light-text tracking-wider uppercase mb-4">Ready to Collaborate?</h4>
                <div className="relative inline-flex group">
                <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-brand-blue to-accent-blue rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-xl"
                >
                    Start a Project
                </button>
                </div>
            </div>

            </div>

            {/* --- Bottom Copyright Bar (centered by default) --- */}
            <div className="mt-16 pt-8 text-center w-full border-t border-gray-700/50">
            <p>© {currentYear} Debiekreatives. All Rights Reserved.</p>
            </div>

        </div>
        </footer>
      {/* --- 5. Conditionally Render the Modal with Animation --- */}
      <AnimatePresence>
        {isModalOpen && <ContactModal setIsOpen={setIsModalOpen} />}
      </AnimatePresence>
    </>
  );
};

export default Footer;