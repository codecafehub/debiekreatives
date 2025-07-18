// src/components/ContactModal.js

import React, { useState } from 'react'; // --- 1. IMPORT useState
import { motion } from 'framer-motion';
import { X, Send } from 'lucide-react'; // --- 2. IMPORT the Send icon
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactModal = ({ setIsOpen }) => {

  // --- 3. ALL STATE LOGIC MOVED HERE ---
  // The state now belongs directly to the ContactModal component
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // --- 4. The handleFormSubmit function is now the main logic ---
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    // --- 5. IMPORTANT FIX for Google Sheets submission ---
    // Google Apps Scripts work best with FormData, not JSON.

    
    const scriptURL = "https://script.google.com/macros/s/AKfycbw552mEj6uUIWFT034JLddYU1GU9pKNrcLvpOyTo9vrlTV0jpIOOyCH_WodacXv3-MO/exec";
    const form = e.target;
    
    try {
      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
  
     toast.success("Thank you for your message! I'll get back to you soon.", {
        position: "top-right",
        autoClose: 5000,
      });
  
      setFormData({ name: '', email: '', message: '' }); // Clear the form
      setTimeout(() => {
        setIsOpen(false); // Close the modal after a short delay
      }, 1500);

    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again.", { position: "top-right" });
    }
  
    setIsSubmitting(false);
  };

 

  


  return (
    <div
      onClick={() => setIsOpen(false)}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
    >
      <ToastContainer />
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="relative rounded-xl p-8 max-w-lg w-full"
        style={{
          backgroundColor: 'rgba(30, 41, 59, 0.75)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ type: 'spring', damping: 20, stiffness: 200 }}
      >
        <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-light-text/70 hover:text-light-text transition-colors">
          <X size={24} />
        </button>

        <h3 className="text-2xl font-bold text-light-text mb-6">Let's Get in Touch</h3>
        
        {/* --- 6. The form now correctly uses the main handler --- */}
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-light-text/80 mb-1">Name</label>
            <input type="text" name="name" id="name" required value={formData.name} onChange={handleInputChange} className="w-full bg-gray-900/50 border border-gray-600 rounded-md p-2 text-light-text focus:ring-2 focus:ring-brand-blue outline-none" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-light-text/80 mb-1">Email</label>
            <input type="email" name="email" id="email" required value={formData.email} onChange={handleInputChange} className="w-full bg-gray-900/50 border border-gray-600 rounded-md p-2 text-light-text focus:ring-2 focus:ring-brand-blue outline-none" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-light-text/80 mb-1">Message</label>
            <textarea name="message" id="message" rows="4" required value={formData.message} onChange={handleInputChange} className="w-full bg-gray-900/50 border border-gray-600 rounded-md p-2 text-light-text focus:ring-2 focus:ring-brand-blue outline-none"></textarea>
          </div>

          {/* --- 7. REMOVED the duplicate button --- */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center bg-brand-blue text-light-text hover:bg-accent-blue py-3 rounded-md font-bold transition-colors group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin w-5 h-5 mr-3 border-2 border-white border-t-transparent rounded-full" />
                Sending...
              </>
            ) : (
              <>
                <Send size={20} className="mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                Send Message
              </>
            )}
          </button>

        </form>
      </motion.div>
    </div>
  );
};

export default ContactModal;