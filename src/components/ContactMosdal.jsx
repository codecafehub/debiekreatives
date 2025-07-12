// src/components/ContactModal.js

import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

// The 'setIsOpen' prop is a function passed down from the Footer to close the modal
const ContactModal = ({ setIsOpen }) => {

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would handle form submission here (e.g., send to an API)
    alert("Form submitted! (This is a placeholder)");
    setIsOpen(false); // Close modal after submission
  };

  return (
    // The main overlay wrapper
    <div
      onClick={() => setIsOpen(false)}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
    >
      <motion.div
        // This prevents the modal from closing when you click inside it
        onClick={(e) => e.stopPropagation()}
        className="relative rounded-xl p-8 max-w-lg w-full"
        // Glassmorphism style
        style={{
          backgroundColor: 'rgba(30, 41, 59, 0.75)', // A semi-transparent slate color
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}
        // Animation
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ type: 'spring', damping: 20, stiffness: 200 }}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-light-text/70 hover:text-light-text transition-colors"
        >
          <X size={24} />
        </button>

        <h3 className="text-2xl font-bold text-light-text mb-6">Let's Get in Touch</h3>
        
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-light-text/80 mb-1">Name</label>
            <input type="text" name="name" id="name" required className="w-full bg-gray-900/50 border border-gray-600 rounded-md p-2 text-light-text focus:ring-2 focus:ring-brand-blue outline-none" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-light-text/80 mb-1">Email</label>
            <input type="email" name="email" id="email" required className="w-full bg-gray-900/50 border border-gray-600 rounded-md p-2 text-light-text focus:ring-2 focus:ring-brand-blue outline-none" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-light-text/80 mb-1">Message</label>
            <textarea name="message" id="message" rows="4" required className="w-full bg-gray-900/50 border border-gray-600 rounded-md p-2 text-light-text focus:ring-2 focus:ring-brand-blue outline-none"></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-brand-blue text-light-text hover:bg-accent-blue py-3 rounded-md font-bold transition-colors"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactModal;