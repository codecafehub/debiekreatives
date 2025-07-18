

// src/pages/Contact.js

import React, { useCallback , useState} from 'react'; // UPDATED: Added useCallback
import { motion } from 'framer-motion';
import Particles from "react-tsparticles"; // NEW: Import Particles
import { loadSlim } from "tsparticles-slim"; // NEW: Import loadSlim
import { Send } from 'lucide-react'; // --- 2. IMPORT the Send icon
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// --- Imports (no changes here) ---
import sectionBg from '../assets/images/portals-bg3.jpg';
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter, Facebook } from 'lucide-react';

const Contact = () => {

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
  

    const handleFormSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      
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
        
  
      } catch (error) {
        console.error("Error submitting form:", error);
        toast.error("An error occurred. Please try again.", { position: "top-right" });
      }
    
      setIsSubmitting(false);
    };
  
   


  // NEW: Add the particle setup logic and configuration for blocks
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const particlesConfig = {
    zIndex: { value: 0 },
    fullScreen: { enable: false },
    background: { color: { value: 'transparent' } },
    fpsLimit: 60,
    particles: {
      color: { value: '#FFFFFF' },
      shape: { type: 'square' },
      move: {
        direction: 'top',
        enable: true,
        outModes: { default: 'out' },
        random: false,
        speed: 0.2,
        straight: true,
      },
      number: {
        density: { enable: true, area: 1500 },
        value: 20,
      },
      opacity: { value: { min: 0.05, max: 0.4 } },
      size: { value: { min: 2, max: 6 } },
    },
    detectRetina: true,
  };

  return (
    <div 
        className="bg-cover bg-fixed bg-center text-light-text"
        style={{ backgroundImage: `url(${sectionBg})` }}
    >
      <ToastContainer />
      <div className="relative bg-dark-bg/90 backdrop-blur-sm pt-10 overflow-hidden"> 
      {/* UPDATED: Added relative and overflow-hidden */}

        {/* NEW: Placed the Particles component here, in its own container */}
        <div className="absolute inset-0 z-0">
          <Particles
            id="contact-particles"
            init={particlesInit}
            options={particlesConfig}
          />
        </div>

        {/* --- Main Content Wrapper --- */}
        {/* UPDATED: Added relative and a higher z-index to ensure it's on top */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 pb-20 space-y-20">

            {/* --- Page Header (no changes needed) --- */}
            <motion.div 
              className="text-center py-20"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}
            >
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-brand-blue to-accent-blue text-transparent bg-clip-text">
                Let's Connect
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-light-text/80">
                Have a project in mind or just want to say hello? I'd love to hear from you.
              </p>
            </motion.div>
            
            {/* --- Contact Grid: Info + Form (no changes needed) --- */}
            <section className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              
              {/* Column 1: Contact Information */}
              <motion.div 
                className="lg:col-span-2 space-y-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
                <p className="text-light-text/80">
                  Feel free to reach out via email, phone, or find me on social media. I'm always open to discussing new projects and creative ideas.
                </p>
                <div className="space-y-4">
                  <a href="mailto:yourclient@email.com" className="flex items-center space-x-3 group">
                    <Mail className="w-6 h-6 text-brand-blue" />
                    <span className="group-hover:text-brand-blue transition-colors">yourclient@email.com</span>
                  </a>
                  <a href="tel:+1234567890" className="flex items-center space-x-3 group">
                    <Phone className="w-6 h-6 text-brand-blue" />
                    <span className="group-hover:text-brand-blue transition-colors">+1 (234) 567-890</span>
                  </a>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6 text-brand-blue" />
                    <span>Creative Studio, Earth</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-700/50">
                  <h3 className="font-semibold text-light-text mb-3">Follow Me</h3>
                   <div className="flex space-x-5">
                      <a href="#" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="text-light-text/70 hover:text-brand-blue transition-colors"><Linkedin size={28} /></a>
                      <a href="#" target="_blank" rel="noopener noreferrer" title="Instagram" className="text-light-text/70 hover:text-brand-blue transition-colors"><Instagram size={28} /></a>
                      <a href="#" target="_blank" rel="noopener noreferrer" title="Twitter" className="text-light-text/70 hover:text-brand-blue transition-colors"><Twitter size={28} /></a>
                      <a href="#" target="_blank" rel="noopener noreferrer" title="Facebook" className="text-light-text/70 hover:text-brand-blue transition-colors"><Facebook size={28} /></a>
                   </div>
                </div>
              </motion.div>
              
              {/* Column 2: The Contact Form */}
              <motion.div
                className="lg:col-span-3 bg-gray-900/50 p-8 rounded-lg shadow-lg border border-gray-700/50"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
              >
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
            </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;