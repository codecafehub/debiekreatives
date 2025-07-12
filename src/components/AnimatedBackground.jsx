// src/components/AnimatedBackground.js

import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const AnimatedBackground = () => {
  // This is required to load the tsparticles engine
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // You can do something here once the particles are loaded
    // console.log(container);
  }, []);

  // --- This is where you configure the particles ---
  const particlesConfig = {
    fullScreen: { enable: false }, // Set to false to confine to the container
    background: {
      color: {
        value: 'transparent', // Make the canvas background transparent
      },
    },
    fpsLimit: 60,
    particles: {
      color: {
        value: '#3B82F6', // Our accent-blue color
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'out',
        },
        random: true,
        speed: 0.5, // Slow, subtle movement
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 1200, // Wider area for fewer particles
        },
        value: 40, // Number of particles
      },
      opacity: {
        value: { min: 0.1, max: 0.5 }, // Varying opacity for depth
        animation: {
            enable: true,
            speed: 1,
            sync: false
        }
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 3 }, // Small, subtle dots
      },
    },
    detectRetina: true,
  };

  return (
    <div className="absolute inset-0 z-0">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesConfig}
      />
    </div>
  );
};

export default AnimatedBackground;