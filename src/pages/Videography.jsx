// src/pages/Videography.js

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Imports ---
import Footer from '../components/Footer'; // 1. IMPORT THE FOOTER COMPONENT
import sectionBg from '../assets/images/portals-bg3.jpg'; // We'll use the same background for consistency
import thumb1 from '../assets/images/portfolio/video-thumb-1.jpg';
import thumb2 from '../assets/images/portfolio/video-thumb-2.jpg';
import thumb3 from '../assets/images/portfolio/video-thumb-3.jpg';
import thumb4 from '../assets/images/portfolio/video-thumb-4.jpg';

// Helper Functions
const getYouTubeId = (url) => { try { return new URL(url).searchParams.get('v'); } catch { return null; } };
const getVimeoId = (url) => { try { return new URL(url).pathname.split('/').pop(); } catch { return null; } };

// Custom Video Modal Component (Unchanged)
const VideoModal = ({ isOpen, onClose, project }) => {
    useEffect(() => {
        const handleEscape = (e) => e.key === 'Escape' && onClose();
        if (isOpen) { document.addEventListener('keydown', handleEscape); document.body.style.overflow = 'hidden'; }
        return () => { document.removeEventListener('keydown', handleEscape); document.body.style.overflow = 'unset'; };
    }, [isOpen, onClose]);

    if (!isOpen || !project) return null;

    const getEmbedUrl = () => {
        if (project.type === 'vimeo') return `https://player.vimeo.com/video/${getVimeoId(project.videoSrc)}?badge=0&autopause=0&autoplay=1`;
        if (project.type === 'youtube') return `https://www.youtube.com/embed/${getYouTubeId(project.videoSrc)}?autoplay=1`;
        return project.videoSrc;
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4" onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }}
                        className="relative bg-black rounded-lg overflow-hidden w-full max-w-4xl" onClick={e => e.stopPropagation()}
                    >
                        <div style={{ paddingBottom: '56.25%', position: 'relative', height: 0 }}>
                            <iframe src={getEmbedUrl()} className="absolute top-0 left-0 w-full h-full" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title={project.title}/>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};


// Portfolio Data (Unchanged)
const allProjects = [
    { id: 1, type: "vimeo", title: "Corporate Brand Story", category: "Corporate", thumbnail: thumb1, videoSrc: "https://vimeo.com/1100904614" },
    { id: 2, type: "vimeo", title: "Summer Music Festival", category: "Events", thumbnail: thumb2, videoSrc: "https://vimeo.com/1100910473" },
    { id: 3, type: "youtube", title: "Product Launch Ad", category: "Corporate", thumbnail: thumb3, videoSrc: "https://www.youtube.com/watch?v=rokGy0huYEA" },
    { id: 4, type: "youtube", title: "Indie Artist Music Video", category: "Music Video", thumbnail: thumb4, videoSrc: "https://www.youtube.com/watch?v=mD2xXNg_p2o" },
];
const categories = ['All', ...new Set(allProjects.map(p => p.category))];

// --- Main Videography Page Component ---
const Videography = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredProjects = activeFilter === 'All' ? allProjects : allProjects.filter(p => p.category === activeFilter);
    const openModal = (project) => { setSelectedProject(project); setModalOpen(true); };
    const closeModal = () => { setModalOpen(false); setSelectedProject(null); };

    return (
        // 2. We use the same layout structure from Voice.js
        <div 
            className="bg-cover bg-fixed bg-center text-light-text"
            style={{ backgroundImage: `url(${sectionBg})` }}
        >
            <div className="bg-dark-bg/90 backdrop-blur-sm pt-10">

                {/* All content now goes inside ONE main wrapper */}
                <div className="max-w-7xl mx-auto px-4  pb-20 space-y-20">

                    {/* --- Page Header --- */}
                    <motion.div 
                        className="text-center py-20"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold text-brand-blue tracking-tight bg-gradient-to-r from-brand-blue to-brand-gold text-transparent bg-clip-text">Videography Portfolio</h1>
                        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-light-text/80">
                            Bringing visions to life through cinematic storytelling.
                        </p>
                    </motion.div>
                    
                    {/* --- Filters & Portfolio Grid --- */}
                    <section>
                         <div className="flex justify-center flex-wrap gap-4 mb-12">
                            {categories.map(category => (
                                <button key={category} onClick={() => setActiveFilter(category)} className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${ activeFilter === category ? 'bg-brand-blue text-white' : 'bg-gray-800 text-light-text/70 hover:bg-gray-700'}`}>
                                    {category}
                                </button>
                            ))}
                        </div>

                        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredProjects.map((project) => (
                                <motion.div layout key={project.id} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.4 }} className="relative rounded-lg overflow-hidden h-64 group cursor-pointer shadow-lg shadow-black/30" onClick={() => openModal(project)}>
                                    <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-16 h-16 bg-brand-blue/80 rounded-full flex items-center justify-center shadow-lg"><svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                                        <h3 className="text-xl font-bold text-white drop-shadow-md">{project.title}</h3>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </section>

                </div> 
                
             
                
                <VideoModal isOpen={modalOpen} onClose={closeModal} project={selectedProject} />
            </div>
        </div>
    );
};

export default Videography;