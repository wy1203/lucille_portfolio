import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useMusic } from './BackgroundMusic';
import { worksData } from '../data/worksData';

interface Work {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

const works: Work[] = worksData.map(work => ({
  id: work.id,
  title: work.title,
  category: work.category,
  description: work.description,
  image: work.image
}));

const MainContent = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const { isMusicPlaying, toggleMusic } = useMusic();
  const workSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


const createClipPath = () => {
    const headerHeight = 120;

    if (mousePosition.y <= headerHeight) {
        return 'circle(0px at 50% 50%)';
    }

    const pathData = "M 767.996094 0.203125 L 767.996094 484.464844 C 703.996094 484.464844 703.996094 645.796875 640 645.796875 C 575.976562 645.796875 575.976562 484.464844 511.980469 484.464844 C 447.980469 484.464844 447.980469 645.796875 383.980469 645.796875 C 319.980469 645.796875 319.980469 484.464844 255.980469 484.464844 C 191.980469 484.464844 191.980469 645.796875 128.003906 645.796875 C 64.003906 645.796875 64.003906 484.464844 0.00390625 484.464844 L 0.00390625 0.203125 C 64.003906 0.203125 64.003906 161.539062 128.003906 161.539062 C 191.980469 161.539062 191.980469 0.203125 255.980469 0.203125 C 319.980469 0.203125 319.980469 161.539062 383.980469 161.539062 C 447.980469 161.539062 447.980469 0.203125 511.980469 0.203125 C 575.976562 0.203125 575.976562 161.539062 640 161.539062 C 703.996094 161.539062 703.996094 0.203125 767.996094 0.203125 Z M 767.996094 0.203125";

    const pageWidth = window.innerWidth;
    const pageHeight = window.innerHeight;
    const targetSize = Math.min(pageWidth, pageHeight) * 0.6;

    const originalWidth = 768;
    const originalHeight = 646;

    const scale = targetSize / Math.max(originalWidth, originalHeight);

    const offsetX = mousePosition.x - (originalWidth * scale / 2);
    const offsetY = mousePosition.y - (originalHeight * scale / 2);

    return `url("data:image/svg+xml;charset=utf-8,${encodeURIComponent(`
        <svg width="${pageWidth}" height="${pageHeight}" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <clipPath id="waveClip" clipPathUnits="userSpaceOnUse">
                    <path d="${pathData}" transform="translate(${offsetX}, ${offsetY}) scale(${scale})"/>
                </clipPath>
            </defs>
        </svg>
    `)}#waveClip")`;
};

  const scrollToWork = () => {
    workSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const backgroundOpacity = scrollY > 0 ? Math.max(0, 1 - scrollY / 300) : 1;

  return (
    <div className="main-content">
      {/* Gradient background - fades in when scrolling */}
      <div
        className="background-layer gradient-background"
        style={{
          opacity: scrollY > 0 ? Math.min(1, scrollY / 300) : 0,
          background: 'linear-gradient(to right, #0054F3 0%, #FF743A 100%)',
          display: scrollY >= window.innerHeight ? 'none' : 'block'
        }}
      />

      {/* Base layer - shows 3D geometric shapes on black background */}
      <div
        className="background-layer"
        style={{
          backgroundImage: 'url("/main_background/layer_base.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: backgroundOpacity,
          transition: 'opacity 0.3s ease-out'
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
          transition: 'clip-path 0.1s ease-out, opacity 0.3s ease-out',
          opacity: backgroundOpacity
        }}
      />

      <motion.header
        className="header"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src="/icons/LUC_blackwhite.png" alt="LW" />
        </div>
        <nav className="nav">
          <a href="/" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Home</a>
          <a href="/about" onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); navigate('/about'); }}>About</a>
          <a href="/gallery" onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); navigate('/gallery'); }}>Gallery</a>
          <a href="/data/Lucille Wang_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          <button className="music-toggle" onClick={toggleMusic}>
            <img
              src={isMusicPlaying ? '/icons/sound.png' : '/icons/mute.png'}
              alt={isMusicPlaying ? 'Sound on' : 'Sound off'}
            />
          </button>
        </nav>
      </motion.header>

      <motion.main
        className="hero"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h1 className="hero-title">
          <span className="name">Hi, I'm Lucille Wang!</span>
          <span className="title">
            Design strategist studying <strong>Design and Environmental Analysis</strong> at Cornell University. I mix <strong>human-centered design, business insight, and technology</strong> to build impactful, future-ready environments.
          </span>
        </h1>

        <div className="hero-experiences">
          <span className="experiences-text">Previous Experiences @</span>
          <div className="experiences-logos">
            <img src="/assets/company_logos/HDR.png" alt="HDR" className="experience-logo" />
            <img src="/assets/company_logos/haworth.png" alt="Haworth" className="experience-logo" />
            <img src="/assets/company_logos/JSL.png" alt="JSL" className="experience-logo" />
          </div>
        </div>

        <div className="hero-actions">
          <button className="cta-button primary" onClick={scrollToWork}>View My Work ⭣</button>
        </div>
      </motion.main>

      <div className="scrolling-text-container">
        <div className="scrolling-text">
          <span>— human-centered design nerd — IKEA effect debater— bubble tea enthusiast — recipe hoarder & weekend baker — fusion-food foodie — Spotify playlist curator — night-owl brainstormer — city-walk daydreamer — street-style chaser — dorm room decorator — Pinterest.com addict — matcha master — Three-Body Problem superfan — "Windows over Apple" defender — doodler, painter and artist </span>
          <span>— human-centered design nerd — IKEA effect debater— bubble tea enthusiast — recipe hoarder & weekend baker — fusion-food foodie — Spotify playlist curator — night-owl brainstormer — city-walk daydreamer — street-style chaser — dorm room decorator — Pinterest.com addict — matcha master — Three-Body Problem superfan — "Windows over Apple" defender — doodler, painter and artist </span>
        </div>
      </div>

      <section id="work" className="work-section" ref={workSectionRef}>
        <motion.h2
          className="work-section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          My Works
        </motion.h2>

        <div className="work-grid">
          {works.map((work, index) => (
            <WorkCard key={work.id} work={work} index={index} />
          ))}
        </div>
      </section>

      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="footer-content">
          <div className="footer-left">
            <a href="mailto:lw686@cornell.edu" className="footer-email-link">Contact Me at: lw686@cornell.edu</a>
            <a href="https://www.linkedin.com/in/lucille-wang-7b057b240/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="footer-linkedin-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>

          <div className="footer-right">
            <p className="footer-copyright">Created by Lucille Wang © 2025</p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

const WorkCard = ({ work, index }: { work: Work; index: number }) => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleClick = () => {
    navigate(`/work/${work.id}`);
  };

  return (
    <motion.div
      ref={ref}
      className="work-card"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onClick={handleClick}
    >
      <div className="work-card-image">
        <img src={work.image} alt={work.title} />
      </div>
      <div className="work-card-content">
        <span className="work-category">{work.category}</span>
        <h3 className="work-title">{work.title}</h3>
        <p className="work-description">{work.description}</p>
      </div>
    </motion.div>
  );
};

export default MainContent;