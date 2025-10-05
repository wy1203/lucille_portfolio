import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useMusic } from "./BackgroundMusic";
import ElasticSlider from "../react_bits_effects/ElasticSlider";
import DomeGallery from "../react_bits_effects/DomeGallery";
import "../styles/Gallery.css";

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

const Gallery = () => {
  const navigate = useNavigate();
  const { volume, setVolume } = useMusic();
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  useEffect(() => {
    fetch("/data/gallery.json")
      .then((res) => res.json())
      .then((data: GalleryItem[]) => {
        setGalleryItems(data);
      })
      .catch((err) => console.error("Error loading gallery data:", err));
  }, []);

  // Convert gallery items to DomeGallery format with metadata
  const domeImages = galleryItems.map((item) => ({
    src: item.image,
    alt: item.title,
    title: item.title,
    description: item.description,
  }));

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
        {galleryItems.length > 0 && (
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

        {selectedImage && (
          <div className="gallery-image-info">
            <h2>{selectedImage.title}</h2>
            <p>{selectedImage.description}</p>
          </div>
        )}
      </motion.main>
    </div>
  );
};

export default Gallery;
