// src/components/ServicePortals.jsx

import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import voiceImg from '../assets/images/portal-voice.jpg';
import videoImg from '../assets/images/portal-video.jpg';
import editingImg from '../assets/images/portal-editing.jpg';
import sectionBg from '../assets/images/portals-bg.jpg';

const portals = [
  {
    title: "Voiceover",
    description: "Engaging and professional voice for commercials, narration, and characters.",
    link: "/voice",
    img: voiceImg
  },
  {
    title: "Videography",
    description: "Creating stunning visual stories for events, brands, and corporate clients.",
    link: "/videography",
    img: videoImg
  },
  {
    title: "Video Editing",
    description: "Crafting seamless narratives through precise and dynamic editing.",
    link: "/editing",
    img: editingImg
  }
];

const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: { y: 0, opacity: 1, transition: { type: "spring", bounce: 0.4, duration: 1.2 } }
};

const ServicePortals = () => {

  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);
  
  // Inside your ServicePortals.jsx component...

const particlesConfig = {
    zIndex: { value: 1 },
    fullScreen: { enable: false },
    background: { color: { value: 'transparent' } },
    fpsLimit: 60,
    particles: {
      color: { value: '#3B82F6' },
      move: {
        direction: 'none',
        enable: true,
        outModes: { default: 'out' },
        random: true,
        speed: 0.5, // You can slightly increase this to 0.7 for more movement if you wish
        straight: false,
      },
      number: {
        density: { enable: true, area: 1200 },
        value: 40, 
      },
      // --- CHANGE THIS SECTION ---
      opacity: {
        value: { min: 0.6, max: 0.9 }, // Increased from 0.1/0.5
        animation: { enable: true, speed: 1, sync: false }
      },
      // --- AND CHANGE THIS SECTION ---
      shape: { type: 'circle' },
      size: {
        value: { min: 3, max: 6 }, // Increased from 1/3
      },
    },
    detectRetina: true,
};

  return (
    <div className="relative bg-dark-bg py-20 px-4 overflow-hidden">
      
      {/* --- LAYER 1: Background (z-index 0) --- */}
      <div className="absolute inset-0 z-0">
        <img src={sectionBg} alt="Creative background" className="w-full h-full object-cover filter blur-sm" />
        <div className="absolute inset-0 bg-dark-bg/80"></div>
      </div>

      {/* --- LAYER 2: Particles (z-index 1 - via config) --- */}
      {/* This component will now correctly place its canvas behind the content */}
      <div className="absolute inset-0">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesConfig}
        />
      </div>
      
      {/* --- LAYER 3: Content (z-index 10) --- */}
      {/* This layer is guaranteed to be on top of everything else */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-light-text mb-16">
          My Creative Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portals.map((portal, index) => (
            <motion.div
              key={index}
              className="relative rounded-lg overflow-hidden h-96 group shadow-lg shadow-black/30"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110"
                style={{ backgroundImage: `url(${portal.img})` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="relative p-6 flex flex-col justify-end h-full text-light-text">
                <h3 className="text-3xl font-bold tracking-tight">{portal.title}</h3>
                <p className="mt-2 text-light-text/90 max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                  {portal.description}
                </p>
                <Link 
                  to={portal.link} 
                  className="mt-4 text-brand-blue font-semibold tracking-wider self-start hover:text-accent-blue"
                >
                  Learn More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicePortals;