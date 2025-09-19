import { motion } from 'framer-motion';

const MainContent = () => {
  return (
    <div className="main-content">
      <motion.header
        className="header"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="logo">LW</div>
        <nav className="nav">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </motion.header>

      <motion.main
        className="hero"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h1 className="hero-title">
          <span className="name">Lucille Wang</span>
          <span className="title">Design Strategist</span>
        </h1>

        <p className="hero-description">
          Bridging the gap between user needs and business goals through strategic design thinking.
          Specializing in UX strategy, product design, and design systems.
        </p>

        <div className="hero-actions">
          <button className="cta-button primary">View My Work</button>
          <button className="cta-button secondary">Get In Touch</button>
        </div>
      </motion.main>

      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="social-links">
          <a href="https://www.linkedin.com/in/lucille-wang-7b057b240/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </motion.footer>
    </div>
  );
};

export default MainContent;