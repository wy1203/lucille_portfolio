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

const createClipPath = () => {
    const headerHeight = 120; // Approximate header height

    if (mousePosition.y <= headerHeight) {
        // No reveal in header area - completely hide layer_reveal
        return 'circle(0px at 50% 50%)';
    }

    const pathData = "M 386.132812 0.34375 C 393.585938 0.34375 401.082031 0.34375 408.519531 0.34375 C 467.816406 8.957031 504.875 37.632812 521.753906 84.558594 C 620.613281 78.300781 692.492188 167.023438 648.6875 254.105469 C 663.253906 272.402344 675.40625 292.871094 679.792969 320.34375 C 679.792969 328.210938 679.792969 336.0625 679.792969 343.933594 C 666.714844 413.851562 610.4375 461.097656 518.042969 448.378906 C 494.269531 484.277344 451.972656 519.671875 386.148438 515.75 C 352.125 513.394531 328.457031 499.742188 307.730469 483.160156 C 285.90625 496.945312 262.265625 507.765625 228.109375 507.882812 C 149.089844 508.085938 96.226562 454.972656 94.945312 382.121094 C 44.148438 365.078125 9.742188 333.265625 0.375 278.828125 C 0.375 270.960938 0.375 263.074219 0.375 255.242188 C 10.714844 201.296875 43.25 167.414062 97.421875 153.050781 C 94.167969 62.054688 202.527344 5.195312 291.546875 45.28125 C 312.742188 25.457031 342.726562 3.835938 386.132812 0.34375 Z";

    // Calculate size to be approximately 10% of the page
    const pageWidth = window.innerWidth;
    const pageHeight = window.innerHeight;
    const targetSize = Math.min(pageWidth, pageHeight) * 1;
    
    // The original path has a bounding box of approximately 680x520
    const originalWidth = 680;
    const originalHeight = 520;
    
    // Calculate scale factor to make the shape approximately 10% of page
    const scale = targetSize / Math.max(originalWidth, originalHeight);
    
    // Calculate offset to center the shape on mouse position
    const offsetX = mousePosition.x - (originalWidth * scale / 2);
    const offsetY = mousePosition.y - (originalHeight * scale / 2);

    return `url("data:image/svg+xml;charset=utf-8,${encodeURIComponent(`
        <svg width="${pageWidth}" height="${pageHeight}" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <clipPath id="blobClip" clipPathUnits="userSpaceOnUse">
                    <path d="${pathData}" transform="translate(${offsetX}, ${offsetY}) scale(${scale})"/>
                </clipPath>
            </defs>
        </svg>
    `)}#blobClip")`;
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