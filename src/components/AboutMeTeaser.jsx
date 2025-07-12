// src/components/AboutMeTeaser.js

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Import the headshot and background image
import clientHeadshot from '../assets/images/client-headshot.png';
import sectionBg from '../assets/images/portals-bg3.jpg';

const AboutMeTeaser = () => {
  return (
    // The main container uses 'background-fixed' for the parallax effect
    <div
      className="relative py-20 px-4 bg-cover bg-fixed bg-center"
      style={{ backgroundImage: `url(${sectionBg})` }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-dark-bg/85"></div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
        
        
        {/* --- Column 1: The Headshot with Animated Border --- */}
      <motion.div
          className="md:col-span-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            >
            {/* The Wrapper for the animated border */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 p-1 rounded-full flex justify-center items-center">
                
                {/* The animated gradient element */}
                <div 
                className="absolute w-full h-full rounded-full animate-spin-slow"
                style={{ background: 'conic-gradient(#FFC300, #0A74DA, #E5E7EB, #FFC300)' }} // Using our gold, blue, and white colors
                ></div>

                {/* The inner container that holds the image, creating the "border" effect */}
                <div className="relative w-full h-full bg-dark-bg rounded-full overflow-hidden">
                <img
                    src={clientHeadshot}
                    alt=" Deborah Babalola Headshot"
                    className="w-full h-full object-cover"
                />
                </div>
                
            </div>
        </motion.div>

        {/* --- Column 2: The Text Content --- */}
        <motion.div
          className="md:col-span-2 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-500 mb-4">
            Meet <span className="text-brand-blue text-light-text">Deborah Babalola </span>
          </h2>
          <p className="text-lg text-light-text/80 mb-6 leading-relaxed">
            I'm a multi-passionate creative with a deep love for storytelling. Whether it's through a compelling voice, a cinematic lens, or a perfectly-timed edit, my goal is always the same: to connect with audiences and create unforgettable experiences. I combine technical expertise with a genuine passion for the craft.
          </p>
          <Link
            to="/about"
            className="inline-block bg-brand-blue text-light-text hover:bg-accent-blue px-8 py-3 rounded-md text-lg font-semibold tracking-wide transition-colors duration-300"
          >
            More About Me
          </Link>
        </motion.div>

      </div>
    </div>
  );
};

export default AboutMeTeaser;