import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useMusic } from "./BackgroundMusic";
import ElasticSlider from "../react_bits_effects/ElasticSlider";
import DomeGallery from "../react_bits_effects/DomeGallery";
import "../styles/Gallery.css";

const Gallery = () => {
  const navigate = useNavigate();
  const { volume, setVolume } = useMusic();
  const [domeImages, setDomeImages] = useState<
    Array<{ src: string; alt: string; title: string }>
  >([]);

  useEffect(() => {
    // Dynamically load all images from public/gallery folder
    // Supported formats: .jpg, .jpeg, .png, .gif
    const imageFiles = [
      "Accessible and Affordable Food - Drawing.jpg",
      "Icey Pengiun.gif",
      "Play - Printmaking.jpg",
      "Bad Intestine - Printmaking.jpg",
      "Before Brain There was No Pain and Anxiety - Printmaking.jpg",
      "GoldenYears - Oil Painting.jpg",
      "HoneycombHouse - Design.png",
      "The Box - Installation Design 1.jpg",
      "The Box - Installation Design.JPG",
      "2D Tessellation Units - Design.png",
      "Remake of The Great Odalisque - Collage.JPG",
      "Reciprocal Frame Bridge - Design.png",
      "My Special Place - Installation 1.png",
      "My Special Place - Installation.png",
      "3D New Form - Design.png",
      "The Butterfly Stool - Book Cover Design.jpg",
      "The Elephant and The Man - Drawing.gif",
      "The Game - Printmaking.jpg",
      "The Swaying Heart - Printmaking.jpg",
      "Tokyo Store - Watercolor.jpeg",
    ];

    const images = imageFiles.map((filename) => {
      // Extract title from filename (format: "Title - Medium.ext")
      const nameWithoutExt = filename.replace(
        /\.(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)$/i,
        ""
      );
      // Use the full filename without extension as the title
      const title = nameWithoutExt;

      return {
        src: `/gallery/${filename}`,
        alt: title,
        title: title,
      };
    });

    setDomeImages(images);
  }, []);

  return (
    <div className="gallery-page">
      <motion.header
        className="header gallery-header"
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
          <a href="/gallery" className="active">
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
        className="gallery-main dome-gallery-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {domeImages.length > 0 && (
          <DomeGallery
            images={domeImages}
            fit={0.6}
            minRadius={500}
            maxRadius={900}
            overlayBlurColor="#000000"
            imageBorderRadius="20px"
            openedImageBorderRadius="20px"
            grayscale={false}
          />
        )}
      </motion.main>
    </div>
  );
};

export default Gallery;
