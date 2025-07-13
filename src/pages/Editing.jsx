// src/pages/Editing.js

import React from 'react';
import { motion } from 'framer-motion';

// --- Imports for assets ---
import sectionBg from '../assets/images/portals-bg3.jpg';      // The new section background
import showreelVideo from '../assets/videos/editing-showreel.mp4';  // The showreel video
import editingPoster from '../assets/images/editing-poster.jpg';  // The new cover photo (poster)

// Software Logos
import premiereLogo from '../assets/images/logos/premiere-pro.svg';
import afterEffectsLogo from '../assets/images/logos/after-effects.svg';
import resolveLogo from '../assets/images/logos/davinci-resolve.svg';
import capcut from '../assets/images/logos/capcut.svg';

// Data for services and software
const services = [ "Story & Narrative Editing", "Color Correction & Grading", "Sound Design & Mixing", "Motion Graphics & Titles", "Social Media Cuts", "Corporate & Brand Videos" ];
const software = [
  { name: "Adobe Premiere Pro", logo: premiereLogo },
  { name: "Adobe After Effects", logo: afterEffectsLogo },
  { name: "DaVinci Resolve", logo: resolveLogo },
  { name: "CapCut", logo: capcut }
];


const Editing = () => {
  return (
    // We use the same background wrapper structure as Videography.js
    <div 
        className="bg-cover bg-fixed bg-center text-light-text"
        style={{ backgroundImage: `url(${sectionBg})` }}
    >
      <div className="bg-dark-bg/90 backdrop-blur-sm pt-10">

        {/* --- Main Content Wrapper --- */}
        <div className="max-w-7xl mx-auto px-4 pb-20 space-y-20">

            {/* --- Page Header --- */}
            <motion.div 
              className="text-center py-20"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}
            >
              <h1 className="text-4xl md:text-6xl font-extrabold racking-tight bg-gradient-to-r from-brand-blue to-brand-gold text-transparent bg-clip-text">
                Creative Video Editing
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-light-text/80">
                Crafting compelling stories with precision, rhythm, and style.
              </p>
            </motion.div>
            
            {/* --- Showreel Section --- */}
            <section>
              <h2 className="text-3xl font-bold text-center mb-10">Editor's Showreel</h2>
              <motion.div 
                className="aspect-video bg-black rounded-lg shadow-2xl shadow-brand-blue/20 overflow-hidden border border-gray-700/50"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <video
                  className="w-full h-full object-cover"
                  src={showreelVideo}
                  controls
                  playsInline
                  poster={editingPoster} // <-- THIS IS THE KEY CHANGE
                >
                  Your browser does not support the video tag.
                </video>
              </motion.div>
            </section>

            {/* --- Services & Software Section --- */}
            <section className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              <div className="lg:col-span-3">
                <h2 className="text-3xl font-bold mb-6">Editing Services</h2>
                <div className="flex flex-wrap gap-3">
                  {services.map(service => (
                    <span key={service} className="bg-accent-blue/20 text-accent-blue font-medium px-4 py-2 rounded-full">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6">Software Proficiency</h2>
                <div className="flex items-center space-x-6">
                  {software.map(s => (
                    <img key={s.name} src={s.logo} alt={s.name} className="h-12 w-12" title={s.name} />
                  ))}
                </div>
              </div>
            </section>

        </div> 
      </div>
    </div>
  );
};

export default Editing;