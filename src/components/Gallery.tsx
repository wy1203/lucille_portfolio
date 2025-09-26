import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useMusic } from './BackgroundMusic';
import '../styles/Gallery.css';

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

const Gallery = () => {
  const navigate = useNavigate();
  const { isMusicPlaying, toggleMusic } = useMusic();
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);

  useEffect(() => {
    fetch('/data/gallery.json')
      .then(res => res.json())
      .then((data: GalleryItem[]) => {
        setGalleryItems(data);
      })
      .catch(err => console.error('Error loading gallery data:', err));
  }, []);

  const handleItemClick = (id: number) => {
    navigate(`/gallery/${id}`);
  };

  return (
    <div className="gallery-page">
      <motion.header
        className="header gallery-header"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="logo" onClick={() => navigate('/')}>
          <img src="/icons/luc.png" alt="LW" />
        </div>
        <nav className="nav">
          <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Home</a>
          <a href="/about" onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); navigate('/about'); }}>About</a>
          <a href="/gallery" className="active">Gallery</a>
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
        className="gallery-main"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="gallery-container">
          <section className="gallery-intro">
            <h1>Gallery</h1>
            <p className="gallery-description">
              A collection of visual explorations, creative experiments, and design inspirations
              from my journey in spatial design and environmental analysis.
            </p>
          </section>

          <section className="gallery-grid">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="gallery-item"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => handleItemClick(item.id)}
              >
                <div className="gallery-item-image">
                  <img src={item.image} alt={item.title} />
                  <div className="gallery-item-overlay">
                    <div className="gallery-item-content">
                      <span className="gallery-item-category">{item.category}</span>
                      <h3 className="gallery-item-title">{item.title}</h3>
                      <p className="gallery-item-description">{item.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </section>
        </div>
      </motion.main>

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

export default Gallery;