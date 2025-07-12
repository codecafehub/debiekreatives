// // src/pages/Voice.js

// import React from 'react';
// import { motion } from 'framer-motion';
// import { Mic, Headphones, Computer, Building } from 'lucide-react'; // Icons for studio gear

// // Import your audio demos
// // import commercialDemo from '../assets/audio/commercial-demo.mp3';
// // import narrationDemo from '../assets/audio/narration-demo.mp3';

// // Data for demo players
// const demos = [
//   { title: "Commercial Demo", src: commercialDemo },
//   { title: "Narration Demo", src: narrationDemo },
//   // Add more demos here as needed
//   // { title: "E-Learning Demo", src: elearningDemo },
// ];

// // Data for services
// const services = ["Commercials", "Corporate Narration", "E-Learning", "IVR & Phone Systems", "Audiobooks", "Video Games"];

// const Voice = () => {
//   return (
//     <div className="bg-dark-bg text-light-text pt-10 pb-20">

//       {/* --- Page Header --- */}
//       <motion.div 
//         className="text-center py-20 px-4"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <h1 className="text-4xl md:text-6xl font-extrabold text-brand-blue tracking-tight">Professional Voiceover</h1>
//         <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-light-text/80">
//           A versatile, authentic, and engaging voice ready to bring your project to life.
//         </p>
//       </motion.div>

//       {/* --- Demo Player Section --- */}
//       <section className="max-w-4xl mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-10">Listen to My Demos</h2>
//         <div className="space-y-6">
//           {demos.map((demo, index) => (
//             <motion.div 
//               key={index}
//               className="bg-gray-800/50 p-4 rounded-lg shadow-lg"
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//             >
//               <h3 className="text-xl font-semibold mb-2">{demo.title}</h3>
//               <audio controls className="w-full">
//                 <source src={demo.src} type="audio/mpeg" />
//                 Your browser does not support the audio element.
//               </audio>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* --- Studio Specs & Services Section --- */}
//       <section className="max-w-7xl mx-auto mt-20 px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
//         {/* Studio Specs */}
//         <div>
//           <h2 className="text-3xl font-bold mb-6">Broadcast-Quality Studio</h2>
//           <ul className="space-y-4 text-lg">
//             <li className="flex items-center"><Mic className="w-6 h-6 mr-3 text-brand-blue" /> Microphone: Neumann TLM 103</li>
//             <li className="flex items-center"><Headphones className="w-6 h-6 mr-3 text-brand-blue" /> Interface: Universal Audio Apollo Twin</li>
//             <li className="flex items-center"><Computer className="w-6 h-6 mr-3 text-brand-blue" /> Connectivity: Source-Connect, Zoom, etc.</li>
//             <li className="flex items-center"><Building className="w-6 h-6 mr-3 text-brand-blue" /> Booth: Professionally treated, whisper-quiet space</li>
//           </ul>
//         </div>
        
//         {/* Services Offered */}
//         <div>
//           <h2 className="text-3xl font-bold mb-6">Services Offered</h2>
//           <div className="flex flex-wrap gap-3">
//             {services.map(service => (
//               <span key={service} className="bg-accent-blue/20 text-accent-blue font-medium px-4 py-2 rounded-full">
//                 {service}
//               </span>
//             ))}
//           </div>
//         </div>
//       </section>
      
//     </div>
//   );
// };

// export default Voice;