import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp01Icon, ArrowDown01Icon } from "hugeicons-react";
import { useNavigate } from "react-router-dom";
import { useMusic } from "./BackgroundMusic";
import ImageModal from "./ImageModal";
import VideoModal from "./VideoModal";
import ElasticSlider from "../react_bits_effects/ElasticSlider";
import "../styles/About.css";
import MetaBalls from "../react_bits_effects/MetaBalls";

interface PersonalityItem {
  image?: string;
  video?: string;
  description: string;
  type: "image" | "video";
}

interface VideoItem {
  src: string;
  title: string;
  caption: string;
}

// Instagram-style action icon SVG paths
const ICON_PATHS = {
  heart:
    "M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z",
  comment:
    "M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z",
  share:
    "M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z",
  bookmark:
    "M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z",
} as const;

const PERSONALITY_ICON_PATHS = Array.from(
  { length: 10 },
  (_, index) => `/assets/personality/icons/${53 + index}.png`
);

type IconLayout = {
  top: string;
  left: string;
  size: number;
  delay: number;
  duration: number;
};

const PRESET_ICON_LAYOUTS: IconLayout[] = [
  {
    top: "2%",
    left: "15%",
    size: 316,
    delay: 0.0,
    duration: 12,
  },
  {
    top: "12%",
    left: "68%",
    size: 312,
    delay: 0.4,
    duration: 11,
  },
  {
    top: "0%",
    left: "82%",
    size: 280,
    delay: 0.8,
    duration: 13,
  },
  {
    top: "22%",
    left: "-3%",
    size: 338,
    delay: 1.2,
    duration: 12,
  },
  {
    top: "28%",
    left: "85%",
    size: 358,
    delay: 1.6,
    duration: 10,
  },
  {
    top: "58%",
    left: "-3%",
    size: 424,
    delay: 2.0,
    duration: 14,
  },
  {
    top: "52%",
    left: "78%",
    size: 300,
    delay: 2.4,
    duration: 11,
  },
  {
    top: "62%",
    left: "22%",
    size: 334,
    delay: 2.8,
    duration: 13,
  },
  {
    top: "68%",
    left: "60%",
    size: 352,
    delay: 3.2,
    duration: 12,
  },
  {
    top: "42%",
    left: "18%",
    size: 280,
    delay: 3.6,
    duration: 11,
  },
];

const About = () => {
  const navigate = useNavigate();
  const { volume, setVolume } = useMusic();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentVideoSrc, setCurrentVideoSrc] = useState("");
  const [currentVideoTitle, setCurrentVideoTitle] = useState("");
  const iconLayouts = useMemo<IconLayout[]>(
    () =>
      PERSONALITY_ICON_PATHS.map((_, index) => ({
        ...PRESET_ICON_LAYOUTS[index % PRESET_ICON_LAYOUTS.length],
      })),
    []
  );

  const metaSectionRef = useRef<HTMLElement | null>(null);
  const nonDesignerSectionRef = useRef<HTMLElement | null>(null);
  const designerSectionRef = useRef<HTMLElement | null>(null);

  const scrollToSection = (element: HTMLElement | null) => {
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleNavigate = (target: "non-designer" | "designer") => {
    if (target === "non-designer") {
      scrollToSection(nonDesignerSectionRef.current);
    } else {
      scrollToSection(designerSectionRef.current);
    }
  };

  useEffect(() => {
    if (metaSectionRef.current) {
      metaSectionRef.current.scrollIntoView({
        behavior: "auto",
        block: "center",
      });
    }
  }, []);

  const musicItems: PersonalityItem[] = [
    {
      image: "/assets/personality/pictures/music1.jpg",
      description: "Concert with Night Espresso Band",
      type: "image",
    },
    {
      image: "/assets/personality/pictures/music2.jpg",
      description: "Concert with Night Espresso Band",
      type: "image",
    },
    {
      image: "/assets/personality/pictures/music3.jpg",
      description: "Concert with Night Espresso Band",
      type: "image",
    },
    {
      video: "/assets/personality/videos/night_espresso.mp4",
      description: "Concert with Night Espresso Band",
      type: "video",
    },
  ];

  const danceItems: PersonalityItem[] = [
    {
      image: "/assets/personality/pictures/dance1.jpg",
      description: "Millennium Dance Studio",
      type: "image",
    },
    {
      image: "/assets/personality/pictures/dance2.jpg",
      description: "Dancer Vibe",
      type: "image",
    },
  ];

  const travelItems: PersonalityItem[] = [
    {
      image: "/assets/personality/pictures/travel1.jpg",
      description: "New York",
      type: "image",
    },
    {
      image: "/assets/personality/pictures/travel2.jpg",
      description: "Ithaca, NY",
      type: "image",
    },
    {
      image: "/assets/personality/pictures/travel3.jpg",
      description: "Travel Memories",
      type: "image",
    },
    {
      image: "/assets/personality/pictures/travel4.jpg",
      description: "Travel Memories",
      type: "image",
    },
    {
      image: "/assets/personality/pictures/travel5.jpg",
      description: "New York",
      type: "image",
    },
    {
      image: "/assets/personality/pictures/travel6.jpg",
      description: "Jinan, China",
      type: "image",
    },
  ];

  const videoItems: VideoItem[] = [
    {
      src: "/assets/personality/videos/dance1.mp4",
      title: "Dance Festival Performance",
      caption: "Dance Festival Performance",
    },
    {
      src: "/assets/personality/videos/dance2.mp4",
      title: "Learn Hip-Hop With Me",
      caption: "Learn Hip-Hop With Me",
    },
    {
      src: "/assets/personality/videos/dance3.mp4",
      title: "Daily Practice",
      caption: "Daily Practice",
    },
  ];

  // Profile photos that appear at the top
  const profilePhotos: PersonalityItem[] = [
    {
      image: "/assets/personality/pictures/travel5.jpg",
      description: "Jinan, China",
      type: "image",
    },
    {
      image: "/assets/personality/pictures/travel1.jpg",
      description: "Adventure awaits",
      type: "image",
    },
  ];

  const openModal = (items: PersonalityItem[], index: number) => {
    // Only open modal for images, not videos
    if (items[index].type === "video") return;

    const allImageItems = [
      ...profilePhotos,
      ...danceItems,
      ...travelItems,
      ...musicItems,
    ].filter((item) => item.type === "image");
    const globalIndex = allImageItems.findIndex(
      (item) => items[index] && item.image === items[index].image
    );
    setCurrentImageIndex(globalIndex >= 0 ? globalIndex : index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openVideoModal = (videoSrc: string, videoTitle: string) => {
    setCurrentVideoSrc(videoSrc);
    setCurrentVideoTitle(videoTitle);
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
    setCurrentVideoSrc("");
    setCurrentVideoTitle("");
  };

  return (
    <div className="about-page">
      <motion.header
        className="header"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="logo" onClick={() => navigate("/")}>
          <img src="/icons/luc.png" alt="LW" />
        </div>
        <nav className="nav">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo(0, 0);
              navigate("/");
            }}
          >
            Home
          </a>
          <a href="/about" className="active">
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
      <section
        ref={nonDesignerSectionRef}
        id="about-non-designer"
        className="non-designer-wrapper"
      >
        <div className="non-designer-content">
          <section className="about-personality">
            <h2>When I'm Not Designing</h2>

            <section className="about-personality dance-personality">
              {/* Dance Section */}
              <div className="personality-section dance-section">
                <div className="section-header left-aligned">
                  <h3>DANCE</h3>
                </div>
                <div className="personality-grid two-per-row">
                  {danceItems.map((item, index) => (
                    <div
                      key={index}
                      className="personality-item"
                      onClick={() => openModal(danceItems, index)}
                    >
                      <div className="image-frame">
                        <img src={item.image} alt={item.description} />
                        <div className="instagram-actions">
                          <div className="action-left">
                            <svg
                              className="action-icon heart"
                              viewBox="0 0 48 48"
                              width="28"
                              height="28"
                            >
                              <path d={ICON_PATHS.heart} fill="#ed4956" />
                            </svg>
                            <svg
                              className="action-icon comment"
                              viewBox="0 0 48 48"
                              width="28"
                              height="28"
                            >
                              <path d={ICON_PATHS.comment} fill="#262626" />
                            </svg>
                            <svg
                              className="action-icon share"
                              viewBox="0 0 48 48"
                              width="28"
                              height="28"
                            >
                              <path d={ICON_PATHS.share} fill="#262626" />
                            </svg>
                          </div>
                          <div className="action-right">
                            <svg
                              className="action-icon bookmark"
                              viewBox="0 0 48 48"
                              width="28"
                              height="28"
                            >
                              <path d={ICON_PATHS.bookmark} fill="#262626" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Dance Videos */}
            <section className="about-phone-videos">
              <div className="phone-videos-container">
                {videoItems.map((video, index) => (
                  <div
                    key={index}
                    className="phone-mockup"
                    onClick={() => openVideoModal(video.src, video.title)}
                  >
                    <div className="volume-up"></div>
                    <div className="volume-down"></div>
                    <div className="power-button"></div>
                    <div className="phone-screen">
                      <video
                        className="phone-video"
                        autoPlay
                        loop
                        muted
                        playsInline
                      >
                        <source src={video.src} type="video/mp4" />
                      </video>
                    </div>
                    <div className="phone-caption">{video.caption}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Travel Section */}
            <div className="personality-section travel-section">
              <div className="section-header right-aligned">
                <h3>TRAVEL</h3>
              </div>
              <div className="personality-grid two-per-row">
                {travelItems.map((item, index) => (
                  <div
                    key={index}
                    className="personality-item"
                    onClick={() => openModal(travelItems, index)}
                  >
                    <div className="image-frame">
                      <img src={item.image} alt={item.description} />
                      <div className="instagram-actions">
                        <div className="action-left">
                          <svg
                            className="action-icon heart"
                            viewBox="0 0 48 48"
                            width="28"
                            height="28"
                          >
                            <path d={ICON_PATHS.heart} fill="#ed4956" />
                          </svg>
                          <svg
                            className="action-icon comment"
                            viewBox="0 0 48 48"
                            width="28"
                            height="28"
                          >
                            <path d={ICON_PATHS.comment} fill="#262626" />
                          </svg>
                          <svg
                            className="action-icon share"
                            viewBox="0 0 48 48"
                            width="28"
                            height="28"
                          >
                            <path d={ICON_PATHS.share} fill="#262626" />
                          </svg>
                        </div>
                        <div className="action-right">
                          <svg
                            className="action-icon bookmark"
                            viewBox="0 0 48 48"
                            width="28"
                            height="28"
                          >
                            <path d={ICON_PATHS.bookmark} fill="#262626" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Music Section */}
          <div className="personality-section music-section">
            <div className="section-header left-aligned">
              <h3>MUSIC</h3>
            </div>
            <div className="personality-grid">
              {musicItems.map((item, index) => (
                <div
                  key={index}
                  className="personality-item"
                  onClick={() =>
                    item.type === "video"
                      ? openVideoModal(item.video!, item.description)
                      : openModal(musicItems, index)
                  }
                >
                  {item.type === "video" ? (
                    <div className="video-frame ipad-frame">
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="personality-video"
                      >
                        <source src={item.video} type="video/mp4" />
                      </video>
                    </div>
                  ) : (
                    <div className="image-frame">
                      <img src={item.image} alt={item.description} />
                      <div className="instagram-actions">
                        <div className="action-left">
                          <svg
                            className="action-icon heart"
                            viewBox="0 0 48 48"
                            width="28"
                            height="28"
                          >
                            <path d={ICON_PATHS.heart} fill="#ed4956" />
                          </svg>
                          <svg
                            className="action-icon comment"
                            viewBox="0 0 48 48"
                            width="28"
                            height="28"
                          >
                            <path d={ICON_PATHS.comment} fill="#262626" />
                          </svg>
                          <svg
                            className="action-icon share"
                            viewBox="0 0 48 48"
                            width="28"
                            height="28"
                          >
                            <path d={ICON_PATHS.share} fill="#262626" />
                          </svg>
                        </div>
                        <div className="action-right">
                          <svg
                            className="action-icon bookmark"
                            viewBox="0 0 48 48"
                            width="28"
                            height="28"
                          >
                            <path d={ICON_PATHS.bookmark} fill="#262626" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section ref={metaSectionRef} className="meta-balls">
        <MetaBalls
          color="#ffffffff"
          cursorBallColor="#ffffffff"
          cursorBallSize={3}
          ballCount={35}
          animationSize={25}
          enableMouseInteraction={true}
          enableTransparency={true}
          hoverSmoothness={0.15}
          clumpFactor={1}
          speed={0.3}
        />
        <div className="meta-icons">
          {PERSONALITY_ICON_PATHS.map((iconSrc, index) => {
            const layout = iconLayouts[index];
            if (!layout) return null;
            return (
              <motion.img
                key={iconSrc}
                className="meta-icon"
                src={iconSrc}
                style={{
                  top: layout.top,
                  left: layout.left,
                  width: layout.size,
                  height: layout.size,
                  opacity: 0.8,
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 0.8, y: [0, -14, 0] }}
                transition={{
                  opacity: { duration: 1.4, delay: layout.delay },
                  y: {
                    duration: layout.duration,
                    delay: layout.delay,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  },
                }}
              />
            );
          })}
        </div>
        <div className="meta-actions">
          <div className="meta-action-block meta-action-top">
            <div className="meta-arrow meta-arrow-up" aria-hidden="true">
              <ArrowUp01Icon size={120} strokeWidth={3.2} />
            </div>
            <button
              type="button"
              className="about-toggle"
              onClick={() => handleNavigate("non-designer")}
            >
              Personality Pics
            </button>
          </div>
          <div className="meta-action-block meta-action-bottom">
            <button
              type="button"
              className="about-toggle primary"
              onClick={() => handleNavigate("designer")}
            >
              Professional Experience
            </button>
            <div className="meta-arrow meta-arrow-down" aria-hidden="true">
              <ArrowDown01Icon size={120} strokeWidth={3.2} />
            </div>
          </div>
        </div>
      </section>
      <section
        ref={designerSectionRef}
        id="about-designer"
        className="designer-wrapper"
      >
        <motion.main
          className="about-main"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="about-container">
            <section className="about-intro">
              <div className="about-profile">
                <div className="profile-content">
                  <div className="intro-header">
                    <h1>
                      Hi, I'm Lucille -- I use creativity and design to improve
                      people's experiences :)
                    </h1>
                  </div>

                  <ul className="intro-list">
                    <li className="intro-item">
                      <p>
                        I was born in Shandong, China, a region known for its
                        warmth and hospitality, and later moved to the Bay Area,
                        California, where new opportunities exposed me to
                        diverse perspectives. Growing up between these cultures
                        shaped my belief that{" "}
                        <strong>design is ultimately about connection</strong> —
                        between people, ideas, and environments. My design
                        journey began in middle school with engineering,
                        experimenting with Rhino 3D, laser cutters, and 3D
                        printers. Over time, my curiosity expanded into art,
                        where printmaking, installations, and visual
                        storytelling became ways to transform thoughts into
                        tangible experiences.
                      </p>
                    </li>
                    <li className="intro-item">
                      <p>
                        Now a senior at <strong>Cornell University</strong> in
                        Human Centered Design, graduating in May 2026 with a{" "}
                        <strong>
                          B.S. in Design and Environmental Analysis
                        </strong>
                        , I’ve learned to approach design with both empathy and
                        evidence. Whether through sketches, 3D models, or
                        prototypes, I create design stories that combine
                        research, imagination, and personal style to solve{" "}
                        <strong>real-world problems</strong>.
                      </p>
                    </li>
                    <li className="intro-item">
                      <p>
                        My work centers on{" "}
                        <strong>
                          design strategy, spatial design, and interior
                          architecture
                        </strong>
                        , guided by a systemic and holistic perspective. I
                        believe{" "}
                        <strong>
                          spaces can profoundly shape our health, behavior, and
                          well-being
                        </strong>{" "}
                        — and that design, at its best, is a{" "}
                        <strong>humane tool to make life meaningful</strong>. .
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="profile-images">
                  {profilePhotos.map((item, index) => (
                    <div
                      key={index}
                      className="image-frame"
                      onClick={() => openModal(profilePhotos, index)}
                      style={{ cursor: "pointer" }}
                    >
                      <img src={item.image} alt="Lucille Wang" />
                      <div className="instagram-actions">
                        <div className="action-left">
                          <svg
                            className="action-icon heart"
                            viewBox="0 0 48 48"
                            width="28"
                            height="28"
                          >
                            <path d={ICON_PATHS.heart} fill="#ed4956" />
                          </svg>
                          <svg
                            className="action-icon comment"
                            viewBox="0 0 48 48"
                            width="28"
                            height="28"
                          >
                            <path d={ICON_PATHS.comment} fill="#262626" />
                          </svg>
                          <svg
                            className="action-icon share"
                            viewBox="0 0 48 48"
                            width="28"
                            height="28"
                          >
                            <path d={ICON_PATHS.share} fill="#262626" />
                          </svg>
                        </div>
                        <div className="action-right">
                          <svg
                            className="action-icon bookmark"
                            viewBox="0 0 48 48"
                            width="28"
                            height="28"
                          >
                            <path d={ICON_PATHS.bookmark} fill="#262626" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="about-values">
              <h2>My Core Values :)</h2>
              <ul className="values-list">
                <li className="value-item">
                  <span>Be curious and always learn</span>
                  <span className="value-emoji">🤯</span>
                </li>
                <li className="value-item">
                  <span>Listen with empathy and care</span>
                  <span className="value-emoji">😎</span>
                </li>
                <li className="value-item">
                  <span>Build genuine friendships</span>
                  <span className="value-emoji">🥰</span>
                </li>
              </ul>
            </section>

            <section className="about-experience">
              <h2>Experience</h2>
              <div className="experience-content">
                <div className="experience-item">
                  <div className="experience-company">
                    <img
                      src="/assets/company_logos/HDR.png"
                      alt="HDR"
                      className="company-logo"
                    />
                    <div className="experience-details">
                      <h3>Interior Design Intern</h3>
                      <p className="company-name">
                        <a
                          href="https://www.hdrinc.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "#0054F3", textDecoration: "none" }}
                        >
                          HDR
                        </a>
                      </p>
                      <p className="experience-period">
                        June 2025 - August 2025
                      </p>
                      <p className="experience-description">
                        Developed strategic framework for spatial function and
                        brand identity in a 150,000+ sq ft workplace with user
                        research insights. Strengthened user experience and
                        branding for Miami-Dade Water by conceptualizing 20+
                        interior themes and 50+ color palettes. Designed 35+
                        Revit layouts and Enscape renderings as prototypes,
                        enhancing spatial planning strategies through iterative
                        testing.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="experience-item">
                  <div className="experience-company">
                    <img
                      src="/assets/company_logos/haworth.png"
                      alt="Haworth"
                      className="company-logo"
                    />
                    <div className="experience-details">
                      <h3>Workplace Design and Research Intern</h3>
                      <p className="company-name">
                        <a
                          href="https://www.haworth.com/na/en/about/about-haworth.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "#0054F3", textDecoration: "none" }}
                        >
                          Haworth
                        </a>
                      </p>
                      <p className="experience-period">
                        June 2024 - August 2024
                      </p>
                      <p className="experience-description">
                        Conducted market analysis of 200+ workplace and acoustic
                        designs to identify industry gaps and enhance user
                        experience. Developed 150+ 2D sketches and 3D models for
                        workplace layouts using rapid prototyping to have 15%
                        increase in efficiency. Analyzed preferences of 15+
                        neurodiverse to promote inclusive workplace lighting,
                        noise and temperature for individuals.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="experience-item">
                  <div className="experience-company">
                    <img
                      src="/assets/company_logos/cornell.png"
                      alt="Cornell Digital Design Studio"
                      className="company-logo"
                    />
                    <div className="experience-details">
                      <h3>Design Assistant</h3>
                      <p className="company-name">
                        <a
                          href="https://human.cornell.edu/d2fs"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "#0054F3", textDecoration: "none" }}
                        >
                          Digital Design and Fabrication Studio
                        </a>
                      </p>
                      <p className="experience-period">
                        September 2023 - February 2024
                      </p>
                      <p className="experience-description">
                        Modeled 3D printed clay for façade system with 1000+
                        visitors with International Interior Design Association
                        educator. Mentored 20+ designers to CAD and build
                        physical model for Cornell Fashion Collective's annual
                        show with 4800+ audience. Utilized Revit, Rhino and
                        Adobe Illustrator to guide 200+ students ideate, draw,
                        and create physical models.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="experience-item">
                  <div className="experience-company">
                    <img
                      src="/assets/company_logos/JSL.png"
                      alt="Jenny Sabin Lab"
                      className="company-logo"
                    />
                    <div className="experience-details">
                      <h3>Research Associate</h3>
                      <p className="company-name">
                        <a
                          href="https://www.sabinlab.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "#0054F3", textDecoration: "none" }}
                        >
                          Jenny Sabin Lab
                        </a>
                      </p>
                      <p className="experience-period">
                        February 2023 - October 2023
                      </p>
                      <p className="experience-description">
                        Utilized hand rendering techniques to create 150+
                        technical drawing for weekly concept pin-ups and
                        usability analysis. Developed 50+ graphic presentations,
                        BIM 3D renderings and CAD computation model at 40+
                        weekly meetings. Built 30+ physical and presentation
                        models of customized triangle solar panels with circuit
                        wiring and soldering.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="experience-item">
                  <div className="experience-company">
                    <img
                      src="/assets/company_logos/cornell.png"
                      alt="Cornell University Healthy Futures"
                      className="company-logo"
                    />
                    <div className="experience-details">
                      <h3>Design Associate</h3>
                      <p className="company-name">
                        <a
                          href="https://ihf.cornell.edu/education-research/healthy-futures-graduate-chapter/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "#0054F3", textDecoration: "none" }}
                        >
                          Cornell University Healthy Futures (CUHF)
                        </a>
                      </p>
                      <p className="experience-period">
                        January 2024 - Present
                      </p>
                      <p className="experience-description">
                        Hosted Leadership Roundtable with HKS Architects on the
                        future of design and mental health with 100+
                        participants. Produced 20+ interview with HKS
                        Architects' Senior Living team on the topic of interior
                        design and Artificial Intelligence. Site-visited local
                        senior-living community to conduct user-analysis on
                        improving living standards for over 300+ residents.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="experience-item">
                  <div className="experience-company">
                    <img
                      src="/assets/company_logos/cornell.png"
                      alt="Residential Sustainability Leader"
                      className="company-logo"
                    />
                    <div className="experience-details">
                      <h3>Dining Sustainability Designer</h3>
                      <p className="company-name">
                        <a
                          href="https://experience.cornell.edu/opportunities/residential-sustainability-leaders-rsls"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "#0054F3", textDecoration: "none" }}
                        >
                          Residential Sustainability Leader (RSL)
                        </a>
                      </p>
                      <p className="experience-period">
                        September 2022 - February 2023
                      </p>
                      <p className="experience-description">
                        Made Cornell's largest dining hall transition from
                        plastic utensils to 100% silverware in 2 months.
                        Designed used-utensil separation bins for 2000+ users
                        daily, increase staff efficiency and decrease the
                        landfill by 15%.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="about-education">
              <h2>Education</h2>
              <div className="education-content">
                <div className="education-item">
                  <div className="education-details">
                    <h3>
                      Bachelor's,{" "}
                      <a
                        href="https://human.cornell.edu/degrees/design-environmental-analysis"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#0054F3", textDecoration: "none" }}
                      >
                        Design and Environmental Analysis
                      </a>
                    </h3>
                    <p className="school-name">Cornell University</p>
                    <p className="education-period">August 2022 - May 2026</p>
                    <p className="education-description">Minor in Business</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="about-skills">
              <h2>Toolkit</h2>
              <div className="skills-content">
                <div className="skills-grid">
                  <div className="skill-category">
                    <h3>CAD/BIM Software</h3>
                    <ul>
                      <li>Revit</li>
                      <li>Rhino</li>
                      <li>AutoCAD</li>
                      <li>Sketchup</li>
                      <li>Fusion 360</li>
                      <li>Blender</li>
                      <li>Grasshopper</li>
                    </ul>
                  </div>
                  <div className="skill-category">
                    <h3>Render Software</h3>
                    <ul>
                      <li>Enscape</li>
                      <li>Twinmotion</li>
                      <li>V-Ray</li>
                      <li>3ds Max</li>
                      <li>Lumion</li>
                      <li>D5 Render</li>
                    </ul>
                  </div>
                  <div className="skill-category">
                    <h3>Design Software</h3>
                    <ul>
                      <li>Figma</li>
                      <li>Adobe Photoshop</li>
                      <li>Adobe Illustrator</li>
                      <li>Adobe InDesign</li>
                      <li>Adobe Premiere Pro</li>
                      <li>Adobe Lightroom</li>
                      <li>Bluebeam</li>
                    </ul>
                  </div>
                  <div className="skill-category">
                    <h3>Office Skills</h3>
                    <ul>
                      <li>Excel/Numbers/Sheets</li>
                      <li>PowerPoint/Keynote/Slides</li>
                      <li>Power BI</li>
                      <li>Outlook</li>
                      <li>Mural</li>
                      <li>Miro</li>
                    </ul>
                  </div>
                  <div className="skill-category">
                    <h3>Fabrication Skills</h3>
                    <ul>
                      <li>Laser Cut</li>
                      <li>CNC Machine</li>
                      <li>Woodwork (Table Saw, Drill Press, Sander)</li>
                      <li>3D Print</li>
                      <li>Arduino</li>
                      <li>Hand Sketch and Render</li>
                    </ul>
                  </div>
                  <div className="skill-category">
                    <h3>AI Skills</h3>
                    <ul>
                      <li>Chatgpt GPT5</li>
                      <li>Midjourney</li>
                      <li>Nano Banana</li>
                      <li>Figma Make</li>
                      <li>Sora 2</li>
                      <li>Suno</li>
                      <li>AI-Enhanced Visualization</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </motion.main>
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

      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        images={[...profilePhotos, ...danceItems, ...travelItems, ...musicItems]
          .filter((item) => item.type === "image")
          .map((item) => ({
            src: item.image!,
            alt: item.description,
            caption: item.description,
          }))}
        currentIndex={currentImageIndex}
        onNavigate={setCurrentImageIndex}
      />

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={closeVideoModal}
        videoSrc={currentVideoSrc}
        title={currentVideoTitle}
      />
    </div>
  );
};

export default About;
