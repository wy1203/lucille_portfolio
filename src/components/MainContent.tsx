import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MainContent_v2 = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const currentShape = 'star'; // Fixed to star shape

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // Initialize window size
    handleResize();

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Create dynamic mask using shape from public/assets/masks/mask.svg (excluding header area)
  const createShapeMask = () => {
    const headerHeight = 120; // Approximate header height

    if (mousePosition.y <= headerHeight) {
      // No mask in header area
      return `url("data:image/svg+xml;charset=utf-8,${encodeURIComponent(`
        <svg width="${windowSize.width}" height="${windowSize.height}" viewBox="0 0 ${windowSize.width} ${windowSize.height}" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <mask id="shapeMask">
              <rect width="100%" height="100%" fill="black"/>
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="white" mask="url(#shapeMask)"/>
        </svg>
      `)}")`;
    }

    // Use the organic blob shape from public/shape/mask.svg positioned at mouse location
    // Scale and center the shape around the mouse cursor
    const scale = 0.36; // Scale down the original large shape (1.2x bigger than 0.3)
    const centerX = 386; // Center X of the original shape viewBox
    const centerY = 258; // Center Y of the original shape viewBox
    const offsetX = mousePosition.x - (centerX * scale);
    const offsetY = mousePosition.y - (centerY * scale);

    return `url("data:image/svg+xml;charset=utf-8,${encodeURIComponent(`
      <svg width="${windowSize.width}" height="${windowSize.height}" viewBox="0 0 ${windowSize.width} ${windowSize.height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <mask id="shapeMask">
            <rect width="100%" height="100%" fill="black"/>
            <g transform="translate(${offsetX}, ${offsetY}) scale(${scale})">
              <path d="M 386.132812 0.34375 C 393.585938 0.34375 401.082031 0.34375 408.519531 0.34375 C 467.816406 8.957031 504.875 37.632812 521.753906 84.558594 C 620.613281 78.300781 692.492188 167.023438 648.6875 254.105469 C 663.253906 272.402344 675.40625 292.871094 679.792969 320.34375 C 679.792969 328.210938 679.792969 336.0625 679.792969 343.933594 C 666.714844 413.851562 610.4375 461.097656 518.042969 448.378906 C 494.269531 484.277344 451.972656 519.671875 386.148438 515.75 C 352.125 513.394531 328.457031 499.742188 307.730469 483.160156 C 285.90625 496.945312 262.265625 507.765625 228.109375 507.882812 C 149.089844 508.085938 96.226562 454.972656 94.945312 382.121094 C 44.148438 365.078125 9.742188 333.265625 0.375 278.828125 C 0.375 270.960938 0.375 263.074219 0.375 255.242188 C 10.714844 201.296875 43.25 167.414062 97.421875 153.050781 C 94.167969 62.054688 202.527344 5.195312 291.546875 45.28125 C 312.742188 25.457031 342.726562 3.835938 386.132812 0.34375 Z" fill="white"/>
            </g>
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="white" mask="url(#shapeMask)"/>
      </svg>
    `)}")`;
  };

  return (
    <div className="main-content-v2">
      {/* Black image background layer (bottom - default) */}
      <div
        className="background-layer"
        style={{
          backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjMDAwMDAwIi8+Cjwvc3ZnPgo=")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* White image background layer (top) with custom shape reveal effect */}
      <div
        className="background-layer"
        style={{
          backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRkZGRkZGIi8+Cjwvc3ZnPgo=")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          mask: createShapeMask(),
          WebkitMask: createShapeMask()
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