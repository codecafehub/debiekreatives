// src/pages/About.js

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// --- Imports ---
import sectionBg from '../assets/images/portals-bg3.jpg';
import clientHeadshot from '../assets/images/client-headshot.png';
import { Briefcase } from 'lucide-react';

// Data for Skills & Journey sections
const skills = {
  voiceover: ["Commercials", "Narration", "Characters"],
  videography: ["Cinematography", "Lighting", "Drone Operation"],
  editing: ["Storytelling", "Color Grading", "Motion Graphics"],
};

const journey = [
  { year: "2018", title: "Started a Passion Project", description: "Began creating short films and learning the fundamentals of visual storytelling." },
  { year: "2020", title: "First Freelance Projects", description: "Took on first clients for event videography and local commercial editing." },
  { year: "2022", title: "Professional Voiceover Training", description: "Invested in professional coaching and built a broadcast-quality home studio." },
  { year: "Today", title: "Full-Time Creative Professional", description: "Collaborating with brands and creators to produce high-quality media." }
];

const About = () => {
  return (
    <div 
        className="bg-cover bg-fixed bg-center text-light-text"
        style={{ backgroundImage: `url(${sectionBg})` }}
    >
      <div className="bg-dark-bg/90 backdrop-blur-sm pt-10">

        {/* --- Main Content Wrapper --- */}
        <div className="max-w-7xl mx-auto px-4 pb-20 space-y-24">

            {/* --- Section 1: Introduction with Photo --- */}
            <section className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center pt-20">
                <motion.div 
                    className="lg:col-span-2 flex justify-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <img src={clientHeadshot} alt="[Client's Name]" className="rounded-lg shadow-2xl shadow-brand-blue/20 w-full max-w-sm" />
                </motion.div>
                <motion.div 
                    className="lg:col-span-3"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-blue-500 ">
                        Hello, I'm <span className=" text-light-text">Deborah Babalola</span>
                    </h1>
                    <p className="mt-6 text-lg text-light-text/80 leading-relaxed">
                        A multi-passionate creative specializing in bringing stories to life. With a foundation in cinematic videography and a trained voice that connects, I found my ultimate passion in the editing suite where all the elements converge to create magic.
                        <br/><br/>
                        My mission is to be more than just a service provider; I strive to be a creative partner, dedicated to understanding your vision and executing it with technical excellence and artistic flair.
                    </p>
                </motion.div>
            </section>
            
            {/* --- Section 2: My Philosophy --- */}
            <motion.section 
                className="text-center max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-brand-blue to-brand-gold text-transparent bg-clip-text">My Creative Philosophy</h2>
                <p className="text-xl text-light-text/80 leading-loose">
                    "Every project is a new world waiting to be explored. My role is to be the guide, using my skills to craft a journey that is authentic, engaging, and unforgettable for the audience."
                </p>
            </motion.section>

            {/* --- Section 3: Professional Journey Timeline --- */}
            <section>
              <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-brand-blue to-brand-gold text-transparent bg-clip-text">My Journey</h2>
              <div className="relative max-w-2xl mx-auto">
                {/* The vertical line */}
                <div className="absolute left-4 top-0 h-full w-0.5 bg-brand-blue/30"></div>
                {journey.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="relative pl-12 pb-12"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* The dot on the timeline */}
                    <div className="absolute left-0 top-1.5 w-8 h-8 bg-gray-800 rounded-full border-2 border-brand-blue flex items-center justify-center">
                      <Briefcase className="w-4 h-4 text-brand-blue" />
                    </div>
                    <p className="font-bold text-brand-blue">{item.year}</p>
                    <h3 className="font-semibold text-xl mt-1">{item.title}</h3>
                    <p className="text-light-text/70 mt-2">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </section>
        </div>
      </div>
    </div>
  );
};

export default About;