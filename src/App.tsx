import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { motion, AnimatePresence } from 'framer-motion';
import { MusicProvider } from './components/BackgroundMusic';
import CircularText from './components/CircularText';
import MainContent from './components/MainContent';
import WorkDetail from './components/WorkDetail';
import About from './components/About';
import Gallery from './components/Gallery';
import GalleryDetail from './components/GalleryDetail';
import './App.css';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <MusicProvider>
      <Router>
        <div className="App">
          <AnimatePresence>
            {showIntro && (
              <motion.div
                className="intro-overlay"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} />
                  <CircularText />
                </Canvas>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {!showIntro && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <Routes>
                  <Route path="/" element={<MainContent />} />
                  <Route path="/work/:id" element={<WorkDetail />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/gallery/:id" element={<GalleryDetail />} />
                </Routes>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Router>
    </MusicProvider>
  );
}

export default App;
