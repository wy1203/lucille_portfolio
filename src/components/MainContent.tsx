import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MainContent_v2 = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Create dynamic clip-path that reveals layer_reveal only in blob shape around mouse cursor
  const createClipPath = () => {
    const headerHeight = 120; // Approximate header height

    if (mousePosition.y <= headerHeight) {
      // No reveal in header area - completely hide layer_reveal
      return 'circle(0px at 50% 50%)';
    }

    // Create a clip-path that reveals layer_reveal in blob shape centered on mouse position
    const revealSize = 200; // Size of the reveal area in pixels
    return `circle(${revealSize}px at ${mousePosition.x}px ${mousePosition.y}px)`;
  };

  return (
    <div className="main-content-v2">
      {/* Base layer - shows 3D geometric shapes on black background */}
      <div
        className="background-layer"
        style={{
          backgroundImage: 'url("/main_background/layer_base.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Reveal layer - shows colorful design strategy content with mouse-following circular reveal */}
      <div
        className="background-layer"
        style={{
          backgroundImage: 'url("/main_background/layer_reveal.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          clipPath: createClipPath(),
          WebkitClipPath: createClipPath(),
          transition: 'clip-path 0.1s ease-out'
        }}
      />


      <motion.header
        className="header-v2"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="logo-v2">LW</div>
        <nav className="nav-v2">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </motion.header>

      <motion.main
        className="hero-v2"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h1 className="hero-title-v2">
          <span className="name-v2">Lucille Wang</span>
          <span className="title-v2">Design Strategist</span>
        </h1>

        <p className="hero-description-v2">
          Bridging the gap between user needs and business goals through strategic design thinking.
          Specializing in UX strategy, product design, and design systems.
        </p>

        <div className="hero-actions-v2">
          <button className="cta-button-v2 primary">View My Work</button>
          <button className="cta-button-v2 secondary">Get In Touch</button>
        </div>
      </motion.main>

      <motion.footer
        className="footer-v2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="social-links-v2">
          <a href="https://www.linkedin.com/in/lucille-wang-7b057b240/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </motion.footer>
    </div>
  );
};

export default MainContent_v2;