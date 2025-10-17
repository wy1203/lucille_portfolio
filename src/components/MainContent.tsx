import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useMusic } from "./BackgroundMusic";
import { worksData } from "../data/worksData";
import SplitText from "../react_bits_effects/SplitText";
import ElasticSlider from "../react_bits_effects/ElasticSlider";

interface Work {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  thumbnailImagePos?: string;
  thumbnailImageFit?: "cover" | "contain" | "fill" | "scale-down" | "none";
}


const MainContent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrollY, setScrollY] = useState(() => window.scrollY);
  const { volume, setVolume } = useMusic();
  const workSectionRef = useRef<HTMLElement>(null);
  const revealLayerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Filter states - persist in sessionStorage
  const [selectedCategories, setSelectedCategories] = useState<string[]>(() => {
    const saved = sessionStorage.getItem('selectedCategories');
    return saved ? JSON.parse(saved) : ["All"];
  });

  // Extract unique categories from works data (split comma-separated categories)
  const allCategories = worksData.flatMap(work =>
    work.category.split(',').map(cat => cat.trim())
  );
  const categories = ["All", ...Array.from(new Set(allCategories))];

  // Handle category selection (only one at a time)
  const toggleCategory = (category: string) => {
    setSelectedCategories([category]);
  };

  // Save selected categories to sessionStorage whenever they change
  useEffect(() => {
    sessionStorage.setItem('selectedCategories', JSON.stringify(selectedCategories));
  }, [selectedCategories]);

  // Filter works based on selected categories (check if work has ANY of the selected categories)
  const filteredWorksData = worksData.filter(work => {
    if (selectedCategories.includes("All")) return true;
    const workCategories = work.category.split(',').map(cat => cat.trim());
    return selectedCategories.some(selectedCat => workCategories.includes(selectedCat));
  });

  const filteredWorks: Work[] = filteredWorksData.map((work) => ({
    id: work.id,
    title: work.title,
    category: work.category,
    description: work.description,
    image: work.thumbnail,
    thumbnailImagePos: work.thumbnailImagePos,
    thumbnailImageFit: work.thumbnailImageFit,
  }));

  useEffect(() => {
    // Detect if device is mobile/tablet
    const checkMobile = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth <= 1024;
      setIsMobile(isTouchDevice || isSmallScreen);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (state?.scrollTo === "work") {
      requestAnimationFrame(() => {
        workSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      navigate(location.pathname + location.search, { replace: true });
    }
  }, [location, navigate]);

  useEffect(() => {
    // Skip mask effect on mobile - will show base layer only
    if (isMobile) return;

    // Direct DOM manipulation for better Safari performance
    let rafId: number | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      rafId = requestAnimationFrame(() => {
        if (revealLayerRef.current) {
          const headerHeight = 120;
          const pageWidth = window.innerWidth;
          const pageHeight = window.innerHeight;
          const targetSize = Math.min(pageWidth, pageHeight) * 0.3;
          const x = Math.round(e.clientX);
          const y = Math.round(e.clientY);
          const size = Math.round(targetSize);

          if (y <= headerHeight) {
            revealLayerRef.current.style.clipPath = "circle(0px at 50% 50%)";
            (revealLayerRef.current.style as any).webkitClipPath = "circle(0px at 50% 50%)";
          } else {
            const clipPathValue = `circle(${size}px at ${x}px ${y}px)`;
            revealLayerRef.current.style.clipPath = clipPathValue;
            (revealLayerRef.current.style as any).webkitClipPath = clipPathValue;
          }
        }
        rafId = null;
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Use passive listeners for better scroll performance
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);


  const scrollToWork = () => {
    workSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const backgroundOpacity = scrollY > 0 ? Math.max(0, 1 - scrollY / 300) : 1;

  return (
    <div className="main-content">
      {/* Gradient background - fades in when scrolling */}
      <div
        className="background-layer gradient-background"
        style={{
          opacity: scrollY > 0 ? Math.min(1, scrollY / 300) : 0,
          background: "linear-gradient(to right, #0054F3 0%, #FF743A 100%)",
          display: scrollY >= window.innerHeight ? "none" : "block",
        }}
      />

      {/* Base layer - shows 3D geometric shapes on black background (shown on mobile) */}
      <div
        className="background-layer"
        style={{
          backgroundImage: 'url("/main_background/layer_base.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Reveal layer - shows colorful design strategy content with mouse-following circular reveal (hidden on mobile) */}
      {!isMobile && (
        <div
          ref={revealLayerRef}
          className="background-layer reveal-layer"
          style={{
            backgroundImage: 'url("/main_background/layer_reveal.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            clipPath: "circle(0px at 50% 50%)",
            WebkitClipPath: "circle(0px at 50% 50%)",
          }}
        />
      )}

      <motion.header
        className="header"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div
          className="logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img src="/icons/luc.png" alt="LW" />
        </div>
        <nav className="nav">
          <a href="/" className="active">
            Home
          </a>
          <a
            href="/about"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo(0, 0);
              navigate("/about");
            }}
          >
            About
          </a>
          <a
            href="/gallery"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo(0, 0);
              navigate("/gallery");
            }}
          >
            Gallery
          </a>
          <a
            href="/data/Lucille Wang_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
          <div className="music-toggle">
            <ElasticSlider value={volume} onValueChange={setVolume} />
          </div>
        </nav>
      </motion.header>

      <motion.main
        className="hero"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h1 className="hero-title">
          <span className="name">
            <SplitText text="Hi, I'm Lucille Wang!" delay={1.0} />
          </span>
          <span className="title">
            <SplitText delay={1.5} type="words">
              Design strategist studying{" "}
              <strong>Design and Environmental Analysis</strong> at Cornell
              University. I mix{" "}
              <strong>
                human-centered design, business insight, and technology
              </strong>{" "}
              to build impactful, future-ready environments.
            </SplitText>
          </span>
        </h1>

        <div className="hero-experiences">
          <span className="experiences-text">Previous Experiences @</span>
          <div className="experiences-logos">
            <img
              src="/assets/company_logos/HDR.png"
              alt="HDR"
              className="experience-logo"
            />
            <img
              src="/assets/company_logos/haworth.png"
              alt="Haworth"
              className="experience-logo"
            />
            <img
              src="/assets/company_logos/JSL.png"
              alt="JSL"
              className="experience-logo"
            />
          </div>
        </div>

        <div className="hero-actions">
          <button className="cta-button primary" onClick={scrollToWork}>
            View My Work ⭣
          </button>
        </div>
      </motion.main>

      <div className="scrolling-text-container">
        <div className="scrolling-text">
          <span>
            — human-centered design nerd — IKEA effect debater— bubble tea
            enthusiast — recipe hoarder & weekend baker — fusion-food foodie —
            Spotify playlist curator — night-owl brainstormer — city-walk
            daydreamer — street-style chaser — dorm room decorator —
            Pinterest.com addict — matcha master — Three-Body Problem superfan —
            "Windows over Apple" defender — doodler, painter and artist{" "}
          </span>
          <span>
            — human-centered design nerd — IKEA effect debater— bubble tea
            enthusiast — recipe hoarder & weekend baker — fusion-food foodie —
            Spotify playlist curator — night-owl brainstormer — city-walk
            daydreamer — street-style chaser — dorm room decorator —
            Pinterest.com addict — matcha master — Three-Body Problem superfan —
            "Windows over Apple" defender — doodler, painter and artist{" "}
          </span>
        </div>
      </div>

      <section id="work" className="home-work-section" ref={workSectionRef}>
        <h2 className="work-section-title">MY WORKS :)</h2>

        <div className="filters-container">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-button ${selectedCategories.includes(category) ? 'active' : ''}`}
              onClick={() => toggleCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="work-grid">
          {filteredWorks.map((work, index) => (
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
            <a href="mailto:lw686@cornell.edu" className="footer-email-link">
              Contact Me at: lw686@cornell.edu
            </a>
            <a
              href="https://www.linkedin.com/in/lucille-wang-7b057b240/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-linkedin-link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
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
        <img
          src={work.image}
          alt={work.title}
          style={{
            objectPosition: work.thumbnailImagePos || "center",
            objectFit: work.thumbnailImageFit || "cover",
            cursor: "pointer",
          }}
        />
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
