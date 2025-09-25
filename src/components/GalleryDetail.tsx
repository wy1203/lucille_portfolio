import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useMusic } from './BackgroundMusic';
import '../styles/GalleryDetail.css';

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  fullDescription: string;
  details: {
    medium: string;
    year: string;
    location?: string;
    focus?: string;
    equipment?: string;
    tools?: string;
    software?: string;
    materials?: string;
    methods?: string;
    scale?: string;
  };
}

const GalleryDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isMusicPlaying, toggleMusic } = useMusic();
  const [galleryItem, setGalleryItem] = useState<GalleryItem | null>(null);
  const [otherItems, setOtherItems] = useState<GalleryItem[]>([]);

  useEffect(() => {
    fetch('/data/gallery.json')
      .then(res => res.json())
      .then((data: GalleryItem[]) => {
        const currentItem = data.find(item => item.id === Number(id));
        setGalleryItem(currentItem || null);

        // Get other items for "More Gallery" section
        const others = data.filter(item => item.id !== Number(id)).slice(0, 6);
        setOtherItems(others);
      })
      .catch(err => console.error('Error loading gallery data:', err));
  }, [id]);

  if (!galleryItem) {
    return (
      <div className="gallery-detail-error">
        <h1>Gallery item not found</h1>
        <button onClick={() => navigate('/gallery')}>Back to Gallery</button>
      </div>
    );
  }

  return (
    <div className="gallery-detail-page">
      <motion.header
        className="header gallery-detail-header"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="logo" onClick={() => navigate('/')}>
          <img src="/icons/LUC_blackwhite.png" alt="LW" />
        </div>
        <nav className="nav">
          <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Home</a>
          <a href="/about" onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); navigate('/about'); }}>About</a>
          <a href="/gallery" onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); navigate('/gallery'); }} className="active">Gallery</a>
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
        className="gallery-detail-main"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="gallery-detail-container">
          {/* Back Navigation */}
          <div className="back-navigation">
            <button onClick={() => navigate('/gallery')} className="back-button">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to Gallery
            </button>
          </div>

          {/* Title Section */}
          <section className="gallery-detail-intro">
            <span className="gallery-detail-category">{galleryItem.category}</span>
            <h1 className="gallery-detail-title">{galleryItem.title}</h1>
            <p className="gallery-detail-description">{galleryItem.fullDescription}</p>
          </section>

          {/* Main Image */}
          <section className="gallery-detail-image">
            <img src={galleryItem.image} alt={galleryItem.title} />
          </section>

          {/* Details Section */}
          <section className="gallery-detail-info">
            <div className="detail-grid">
              <div className="detail-item">
                <h3>Medium</h3>
                <p>{galleryItem.details.medium}</p>
              </div>
              <div className="detail-item">
                <h3>Year</h3>
                <p>{galleryItem.details.year}</p>
              </div>
              {galleryItem.details.location && (
                <div className="detail-item">
                  <h3>Location</h3>
                  <p>{galleryItem.details.location}</p>
                </div>
              )}
              {galleryItem.details.focus && (
                <div className="detail-item">
                  <h3>Focus</h3>
                  <p>{galleryItem.details.focus}</p>
                </div>
              )}
              {galleryItem.details.equipment && (
                <div className="detail-item">
                  <h3>Equipment</h3>
                  <p>{galleryItem.details.equipment}</p>
                </div>
              )}
              {galleryItem.details.tools && (
                <div className="detail-item">
                  <h3>Tools</h3>
                  <p>{galleryItem.details.tools}</p>
                </div>
              )}
              {galleryItem.details.software && (
                <div className="detail-item">
                  <h3>Software</h3>
                  <p>{galleryItem.details.software}</p>
                </div>
              )}
              {galleryItem.details.materials && (
                <div className="detail-item">
                  <h3>Materials</h3>
                  <p>{galleryItem.details.materials}</p>
                </div>
              )}
            </div>
          </section>

          {/* More Gallery Section */}
          <section className="more-gallery">
            <h2>More Gallery</h2>
            <div className="more-gallery-grid">
              {otherItems.map((item) => (
                <div
                  key={item.id}
                  className="more-gallery-item"
                  onClick={() => {
                    navigate(`/gallery/${item.id}`);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  <img src={item.image} alt={item.title} />
                  <div className="more-gallery-overlay">
                    <span className="more-gallery-category">{item.category}</span>
                    <h3>{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
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

export default GalleryDetail;