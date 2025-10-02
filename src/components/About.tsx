import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useMusic } from "./BackgroundMusic";
import ImageModal from "./ImageModal";
import VideoModal from "./VideoModal";
import "../styles/About.css";

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
  heart: "M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z",
  comment: "M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z",
  share: "M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z",
  bookmark: "M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"
} as const;

const About = () => {
  const navigate = useNavigate();
  const { isMusicPlaying, toggleMusic } = useMusic();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentVideoSrc, setCurrentVideoSrc] = useState("");
  const [currentVideoTitle, setCurrentVideoTitle] = useState("");

  const musicItems: PersonalityItem[] = [
    {
      image: "/assets/personality/pictures/music1.jpg",
      description: "Concert vibes",
      type: "image",
    },
    {
      image: "/assets/personality/pictures/music2.jpg",
      description: "Studio sessions",
      type: "image",
    },
    {
      image: "/assets/personality/pictures/music3.jpg",
      description: "Festival moments",
      type: "image",
    },
    {
      video: "/assets/personality/videos/night_espresso.mp4",
      description: "Night espresso vibes",
      type: "video",
    },
  ];

  const danceItems: PersonalityItem[] = [
    {
      image: "/assets/personality/pictures/dance1.jpg",
      description: "Dance performances",
      type: "image",
    },
    {
      image: "/assets/personality/pictures/dance2.jpg",
      description: "Movement expression",
      type: "image",
    },
  ];

  const travelItems: PersonalityItem[] = [
    {
      image: "/assets/personality/pictures/travel1.jpg",
      description: "Adventure awaits",
      type: "image",
    },
    {
      image: "/assets/personality/pictures/travel2.jpg",
      description: "Exploring new places",
      type: "image",
    },
    {
      image: "/assets/personality/pictures/travel3.jpg",
      description: "Journey discoveries",
      type: "image",
    },
    {
      image: "/assets/personality/pictures/travel4.jpg",
      description: "Travel memories",
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

  const openModal = (items: PersonalityItem[], index: number) => {
    // Only open modal for images, not videos
    if (items[index].type === "video") return;

    const allImageItems = [...musicItems, ...travelItems, ...danceItems].filter(
      (item) => item.type === "image"
    );
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
          <button className="music-toggle" onClick={toggleMusic}>
            <img
              src={isMusicPlaying ? "/icons/sound.png" : "/icons/mute.png"}
              alt={isMusicPlaying ? "Sound on" : "Sound off"}
            />
          </button>
        </nav>
      </motion.header>

      <motion.main
        className="about-main"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="about-container">
          <section className="about-intro">
            <div className="about-profile">
              <img
                src="/icons/luc.png"
                alt="Lucille Wang"
                className="profile-image"
              />
              <div className="profile-content">
                <h1>Lucille Wang</h1>
                <p className="about-description">
                  I'm a Design Strategy student at Cornell University,
                  passionate about creating human-centered solutions that bridge
                  design, business, and technology. My work focuses on
                  understanding user needs and translating them into meaningful,
                  impactful experiences.
                </p>
              </div>
            </div>
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
                    <p className="experience-period">June 2025 - August 2025</p>
                    <p className="experience-description">
                      Developed strategic framework for spatial function and
                      brand identity in a 150,000+ sq ft workplace with user
                      research insights. Strengthened user experience and
                      branding for Miami-Dade Water by conceptualizing 20+
                      interior themes and 50+ color palettes. Designed 35+ Revit
                      layouts and Enscape renderings as prototypes, enhancing
                      spatial planning strategies through iterative testing.
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
                    <p className="experience-period">June 2024 - August 2024</p>
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
                      educator. Mentored 20+ designers to CAD and build physical
                      model for Cornell Fashion Collective's annual show with
                      4800+ audience. Utilized Revit, Rhino and Adobe
                      Illustrator to guide 200+ students ideate, draw, and
                      create physical models.
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
                      technical drawing for weekly concept pin-ups and usability
                      analysis. Developed 50+ graphic presentations, BIM 3D
                      renderings and CAD computation model at 40+ weekly
                      meetings. Built 30+ physical and presentation models of
                      customized triangle solar panels with circuit wiring and
                      soldering.
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
                    <p className="experience-period">January 2024 - Present</p>
                    <p className="experience-description">
                      Hosted Leadership Roundtable with HKS Architects on the
                      future of design and mental health with 100+ participants.
                      Produced 20+ interview with HKS Architects' Senior Living
                      team on the topic of interior design and Artificial
                      Intelligence. Site-visited local senior-living community
                      to conduct user-analysis on improving living standards for
                      over 300+ residents.
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
                      Made Cornell's largest dining hall transition from plastic
                      utensils to 100% silverware in 2 months. Designed
                      used-utensil separation bins for 2000+ users daily,
                      increase staff efficiency and decrease the landfill by
                      15%.
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
              </div>
            </div>
          </section>

          <section className="about-personality">
            <h2>When I'm Not Designing</h2>

            {/* Music Section */}
            <div className="personality-section music-section">
              <img
                src="/icons/record_left.png"
                alt="Record"
                className="record-icon section-record left-record"
              />
              <div className="section-header left-aligned">
                <h3>MUSIC</h3>
              </div>
              <div className="personality-grid two-per-row">
                {musicItems.map((item, index) => (
                  <div
                    key={index}
                    className="personality-item"
                    onClick={() => openModal(musicItems, index)}
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

            {/* Travel Section */}
            <div className="personality-section travel-section">
              <img
                src="/icons/record_right.png"
                alt="Record"
                className="record-icon section-record right-record"
              />
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

            {/* Dance Section */}
            <div className="personality-section dance-section">
              <img
                src="/icons/record_left.png"
                alt="Record"
                className="record-icon section-record left-record"
              />
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
        images={[...musicItems, ...travelItems, ...danceItems]
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
