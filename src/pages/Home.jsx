// src/pages/Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import motion

// Import your background video
import heroVideo from '../assets/videos/hero-video.mp4';

const Home = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      
      {/* --- Video Background --- */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video
          className="w-full h-full object-cover"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline // Important for iOS devices
        >
          Your browser does not support the video tag.
        </video>
        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>
      </div>

      {/* --- Content --- */}
      <motion.div
        className="relative z-20 text-center text-light-text p-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        >
          Stories Brought to Life.
        </motion.h1>

        <motion.p 
          className="mt-4 max-w-xl mx-auto text-lg md:text-xl text-light-text/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
        >
          Dynamic Visuals. Compelling Voice. Seamless Editing.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
        >
          {/* Note: In a real project, this would likely scroll to the next section */}
          <Link 
            to="/videography" // Or whichever page is the main portfolio
            className="inline-block mt-8 bg-brand-blue text-light-text hover:bg-accent-blue px-8 py-3 rounded-md text-lg font-semibold tracking-wide transition-colors duration-300"
          >
            Explore My Work
          </Link>
        </motion.div>
      </motion.div>

    </section>
  );
};

export default Home;