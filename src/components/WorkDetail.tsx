import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useMusic } from './BackgroundMusic';
import '../styles/WorkDetail.css';

interface ContentItem {
  type: 'text' | 'image';
  value: string;
}

interface SectionContent {
  content: ContentItem[];
}

interface WorkData {
  id: number;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  heroImage: string;
  role: string;
  team: string;
  timeline: string;
  skills: string;
  overview: SectionContent;
  impact: SectionContent;
  reflection: SectionContent;
}

const WorkDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isMusicPlaying, toggleMusic } = useMusic();
  const [work, setWork] = useState<WorkData | null>(null);
  const [activeSection, setActiveSection] = useState('overview');
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    fetch('/data/works.json')
      .then(res => res.json())
      .then((data: WorkData[]) => {
        const foundWork = data.find(w => w.id === Number(id));
        setWork(foundWork || null);
      })
      .catch(err => console.error('Error loading work data:', err));
  }, [id]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'impact', 'reflection'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const isAtBottom = windowHeight + scrollTop >= documentHeight - 100;
      setShowFooter(isAtBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };

  if (!work) {
    return (
      <div className="work-detail-error">
        <h1>Work not found</h1>
        <button onClick={() => navigate('/')}>Go Home</button>
      </div>
    );
  }

  return (
    <div className="work-detail-page">
      <motion.header
        className="header work-detail-header"
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

      <div className="work-detail-container">
        <aside className="work-sidebar">
          <nav className="sidebar-nav">
            <button
              className={activeSection === 'overview' ? 'active' : ''}
              onClick={() => scrollToSection('overview')}
            >
              Overview
            </button>
            <button
              className={activeSection === 'impact' ? 'active' : ''}
              onClick={() => scrollToSection('impact')}
            >
              Impact
            </button>
            <button
              className={activeSection === 'reflection' ? 'active' : ''}
              onClick={() => scrollToSection('reflection')}
            >
              Reflection
            </button>
          </nav>
        </aside>

        <main className="work-detail-main">
          <motion.div
            className="work-hero"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="work-hero-content">
              <span className="work-category-tag">{work.category}</span>
              <h1 className="work-title-detail">{work.title}</h1>
              <p className="work-subtitle">{work.description}</p>
            </div>
            <img src={work.heroImage} alt={work.title} className="work-hero-image" />
          </motion.div>

          <div className="work-content">
            <div className="work-meta">
              <div className="work-meta-item">
                <h3>Role</h3>
                <p>{work.role}</p>
              </div>
              <div className="work-meta-item">
                <h3>Team</h3>
                <p>{work.team}</p>
              </div>
              <div className="work-meta-item">
                <h3>Timeline</h3>
                <p>{work.timeline}</p>
              </div>
              <div className="work-meta-item">
                <h3>Skills</h3>
                <p>{work.skills}</p>
              </div>
            </div>

            <section id="overview" className="work-section">
              <h2>Overview</h2>
              {work.overview.content.map((item, index) => (
                item.type === 'text' ? (
                  <p key={index}>{item.value}</p>
                ) : (
                  <img key={index} src={item.value} alt={`${work.title} overview ${index + 1}`} className="work-section-image" />
                )
              ))}
            </section>

            <section id="impact" className="work-section work-impact">
              <h2>Impact</h2>
              {work.impact.content.map((item, index) => (
                item.type === 'text' ? (
                  <p key={index}>{item.value}</p>
                ) : (
                  <img key={index} src={item.value} alt={`${work.title} impact ${index + 1}`} className="work-section-image" />
                )
              ))}
            </section>

            <section id="reflection" className="work-section">
              <h2>Reflection</h2>
              {work.reflection.content.map((item, index) => (
                item.type === 'text' ? (
                  <p key={index}>{item.value}</p>
                ) : (
                  <img key={index} src={item.value} alt={`${work.title} reflection ${index + 1}`} className="work-section-image" />
                )
              ))}
            </section>
          </div>
        </main>
      </div>

      {showFooter && (
        <motion.footer
          className="footer work-detail-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
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
      )}
    </div>
  );
};

export default WorkDetail;